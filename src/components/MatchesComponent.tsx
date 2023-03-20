import { useEffect, useState } from "react";
import { teamsCollection, encountersCollection } from "../utils/db";
import { getDocs } from "firebase/firestore";
import { Teams, Encounters } from "../interfaces/types";
import NewEncounterForm from "./NewEncounterForm";
import { Button, ListGroup, Table } from "react-bootstrap";
import EncounterCard from "./EncounterCard";

interface MatchesComponentProps {
  team: string;
}

const MatchesComponent = (props: MatchesComponentProps) => {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [encounters, setEncounters] = useState<Encounters[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchTeamsAndEncounters = async () => {
      const teamSnapshot = await getDocs(teamsCollection);
      const fetchedTeams: Teams[] = teamSnapshot.docs.map((teamDoc) => teamDoc.data() as Teams);
      setTeams(fetchedTeams);

      const encounterSnapshot = await getDocs(encountersCollection);
      const fetchedEncounters: Encounters[] = encounterSnapshot.docs.map((encounterDoc) => encounterDoc.data() as Encounters);
      setEncounters(fetchedEncounters);
    };
    fetchTeamsAndEncounters();
  }, []);

  if (!props.team) {
    return null;
  }

  const currentTeam = teams.find((team) => team.name === props.team);
  const teamEncounters = encounters.filter(encounter => encounter.home_team === currentTeam?.name || encounter.guest_team === currentTeam?.name);

  return (
    <div>
      <ListGroup className="m-3">
        {teamEncounters.map((enc) => (
            <ListGroup.Item>
              <EncounterCard enc={enc} />
            </ListGroup.Item>
          ))}
      </ListGroup>
      {!showForm && (
        <div className="text-center">
          <Button onClick={() => setShowForm(!showForm)}>
            Match hinzufügen
          </Button>
        </div>
      )}
      {showForm && currentTeam && (
        <NewEncounterForm
          loggedInTeam={currentTeam}
          teams={teams}
          encounters={encounters}
          onSubmitSuccess={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default MatchesComponent;
