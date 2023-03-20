import { getDocs, query, where } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Teams, TableEntry, Encounters } from '../interfaces/types';
import { encountersCollection, teamsCollection } from '../utils/db';

function TableComponent(props: {
  group: string;
}) {

  const [entries, setEntries] = useState<TableEntry[]>([])
  let init = true;

  useEffect(() => {
    if (!init) return;
    init = false;
    let tableEntryValues : TableEntry[]
    setEntries([])
    const getData = async () => {
      const qt = query(teamsCollection, where('group', '==', props.group));
      const st = await getDocs(qt);
      st.docs.forEach(async (team) => {
        const entry: TableEntry = {
          name: team.data().name,
          games: 0,
          wins: 0,
          loses: 0,
          plus: 0,
          minus: 0,
          points: 0,
        };
        const qeh = query(encountersCollection, where('home_team', '==', team.data().name));
        const seh = await getDocs(qeh);
        seh.docs.forEach((enc) => {
          const data = enc.data();
          entry.games++;
          entry.wins += data.home_points > data.guest_points ? 1 : 0;
          entry.loses += data.home_points > data.guest_points ? 0 : 1;
          entry.plus += data.home_points;
          entry.minus += data.guest_points;
          if(data.home_points >= 7) entry.points += 3;
          else if (data.home_points >= 5) entry.points += 2;
          else if (data.home_points >= 3) entry.points += 1;
        });
        const qeg = query(encountersCollection, where('guest_team', '==', team.data().name ));
        const seg = await getDocs(qeg);
        seg.docs.forEach((enc) => {
          const data = enc.data();
          entry.games++;
          entry.wins += data.home_points < data.guest_points ? 1 : 0;
          entry.loses += data.home_points < data.guest_points ? 0 : 1;
          entry.plus += data.guest_points;
          entry.minus += data.home_points;
          if(data.guest_points >= 7) entry.points += 3;
          else if (data.guest_points >= 5) entry.points += 2;
          else if (data.guest_points >= 3) entry.points += 1;
        });
        setEntries(entries => [...entries, entry].sort((a, b) => {
          if (a.points !== b.points) {
            return b.points - a.points;
          } else if (a.wins !== b.wins) {
            return b.wins - a.wins;
          } else {
            return b.plus - a.plus;
          }
        }));
      });

    };

    getData();
  }, [])

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Mannschaft</th>
          <th>Sp</th>
          <th>S</th>
          <th>N</th>
          <th>+</th>
          <th>-</th>
          <th>P</th>
        </tr>
      </thead>
      <tbody>
      {entries.map((entry, index) => (
        <tr key={index}>
          <td>{index + 1}.</td>
          <td>{entry.name}</td>
          <td>{entry.games}</td>
          <td>{entry.wins}</td>
          <td>{entry.loses}</td>
          <td>{entry.plus}</td>
          <td>{entry.minus}</td>
          <td>{entry.points}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;