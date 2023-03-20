import { useState, FormEvent, ChangeEvent } from "react";
import { Teams, Encounters } from "../interfaces/types";
import { addDoc } from "firebase/firestore";
import { encountersCollection } from "../utils/db";
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { storageRef } from "../firebase/firebase-config";

interface NewEncounterFormProps {
  loggedInTeam: Teams;
  teams: Teams[];
  encounters: Encounters[];
  onSubmitSuccess: () => void;
}

const NewEncounterForm = ({ loggedInTeam, teams, encounters, onSubmitSuccess }: NewEncounterFormProps) => {
  const [homePoints, setHomePoints] = useState(1);
  const [guestPoints, setGuestPoints] = useState(8);
  
  const [date, setDate] = useState(new Date());

  const otherTeamsInGroup = teams.filter((team) => {
    if (team.group !== loggedInTeam.group || team.name === loggedInTeam.name) {
      return false;
    }
  
    const alreadyMatched = encounters.some(
      (encounter) =>
        (encounter.home_team === loggedInTeam.name && encounter.guest_team === team.name) ||
        (encounter.home_team === team.name && encounter.guest_team === loggedInTeam.name)
    );
  
    return !alreadyMatched;
  });

  const [guestTeam, setGuestTeam] = useState(otherTeamsInGroup.length > 0 ? otherTeamsInGroup[0].name : "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    if (image) {
      const imageRef = ref(storageRef, `${loggedInTeam.name}_${guestTeam}_${date.toISOString()}_${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // You can show the upload progress here if you want
        },
        (error) => {
          console.error("Error uploading image:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(imageRef);
          const newEncounter: Encounters = {
            date: date,
            group: loggedInTeam.group,
            home_team: loggedInTeam.name,
            guest_team: guestTeam,
            home_points: homePoints,
            guest_points: guestPoints,
            url: downloadURL,
            verified: false,
          };
          await addDoc(encountersCollection, newEncounter);
          onSubmitSuccess();
          window.location.reload();
        }
      );
    } else {
      // You can handle the case when no image is selected here
    }
  };

  const handleHomePointsChange = (val : string) => {
    const selectedPoints = parseInt(val, 10);
    setHomePoints(selectedPoints);
    setGuestPoints(9 - selectedPoints);
  };

  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  

  return (
    <Card className="m-3">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Col className="text-center">
              <Form.Group controlId="home_team">
                <Form.Label><b>Heimmannschaft</b></Form.Label>
                <Form.Control as="select" disabled>
                  <option>{loggedInTeam.name}</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="text-center">
              <Form.Group controlId="guest_team">
                <Form.Label><b>Gastmannschaft</b></Form.Label>
                <Form.Control 
                  as="select" 
                  value={guestTeam} 
                  onChange={(e) => setGuestTeam(e.target.value)}>
                  {otherTeamsInGroup.map((team) => (
                    <option key={team.name} value={team.name}>
                      {team.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="text-center">
              <Form.Group controlId="homeTeamPoints">
                <Form.Label>Punkte der Heimmannschaft</Form.Label>
                <Form.Control 
                  as="select" 
                  value={homePoints} 
                  onChange={(e) => handleHomePointsChange(e.target.value)}>
                  {Array.from({ length: 10 }, (_, i) => i ).map((point) => (
                    <option key={point} value={point}>
                      {point}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="text-center">
              <Form.Group controlId="guestTeamPoints">
                <Form.Label>Punkte der Gastmannschaft</Form.Label>
                <Form.Control as="select" disabled>
                  <option>{guestPoints}</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="text-center">
              <Form.Group controlId="date">
                <Form.Label>Datum</Form.Label>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Form.Control
                    type="date"
                    required
                    value={date.toISOString().substr(0, 10)}
                    onChange={(e) => setDate(new Date(e.target.value))}
                    style={{ width: '50%' }}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="text-center">
              <Form.Group controlId="image">
                <Form.Label>Spielbericht hochladen</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
            <Col className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Col>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewEncounterForm;
