import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { adminsCollection } from "../utils/db";
import { getDocs, query, where } from "firebase/firestore";
import MatchesComponent from "../components/MatchesComponent";

const Matches = () => {
  const { signOut, currentUser } = useAuth();
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      if (currentUser) {
        const q = query(adminsCollection, where("uid", "==", currentUser.uid));
        const adminSnapshot = await getDocs(q);
        adminSnapshot.docs.forEach((adminDoc) => {
          setTeamName(adminDoc.data().team);
        });
      }
    };
    fetchAdminData();
  }, [currentUser]);

  return (
    <>
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            {teamName && <h1>{teamName}</h1>}
          </Col>
          <Col className="d-flex justify-content-end">
            <Button onClick={signOut}>Sign Out</Button>
          </Col>
        </Row>
      </Container>
      <MatchesComponent team={teamName} />
    </>
  );
};

export default Matches;