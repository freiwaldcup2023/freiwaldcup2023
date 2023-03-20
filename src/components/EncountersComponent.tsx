import { useEffect, useState } from "react";
import { Encounters } from "../interfaces/types";
import Dropdown from 'react-bootstrap/Dropdown';
import { Figure, ListGroup, Stack } from "react-bootstrap";
import { encountersCollection } from "../utils/db";
import { getDocs, query, where } from "@firebase/firestore";
import EncounterCard from "./EncounterCard";


function EncountersComponent() {

  const groups: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  let init = true;
  
  const [selectedGroup, setSelectedGroup] = useState('A');
  const [encounters, setEncounters] = useState<Encounters[]>([])

  useEffect(() => {
    if (!init) return;
    init = false;
    setEncounters([]);
    const getData = async () => {
      const q = query(encountersCollection, where('group', '==', selectedGroup));
      const encs = await getDocs(q);
      encs.docs.forEach((enc) => {
        setEncounters(encounters => [...encounters, enc.data()].sort((a, b) => {
          if (a.date > b.date) {
            return 1;
          } else if (a.date < b.date) {
            return -1;
          } else {
            return 0;
          }
        }));
      })
    }
    getData();
  }, [selectedGroup])

  return (
    <>
      <Dropdown className="text-center m-3">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Gruppe {selectedGroup}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {groups.map((group) => (
              <Dropdown.Item key={group} onClick={() => setSelectedGroup(group)}>
                Gruppe {group} 
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
      {encounters.length === 0 ? (
        <div className="d-flex justify-content-center">
          <p>Keine Ergebnisse gefunden.</p>
        </div>
      ) : (
      <ListGroup className="mx-3">
        {encounters.map((enc) => (
            <ListGroup.Item>
              <EncounterCard enc={enc} />
            </ListGroup.Item>
          ))}
      </ListGroup>
      )}
    </>
  );
}

export default EncountersComponent;