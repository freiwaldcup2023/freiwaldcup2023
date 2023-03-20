import { getDocs } from "@firebase/firestore";
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Accordion, Card, Button } from 'react-bootstrap';
import { teamsCollection } from "../utils/db";
import TableComponent from "../components/TableComponent";
import EncountersComponent from "../components/EncountersComponent";
import SponsorsComponent from "../components/SponsorsComponent";

const Home = () => {

    const groups: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    return (
        <Tabs
        defaultActiveKey="tables"
        id="justify-tabs"
        className="mb-1 px-1"
        variant="pills"
        justify
      >
        <Tab eventKey="tables" title="Tabellen" className="px-1">
        <SponsorsComponent />
        <Accordion flush>
          {groups.map((g, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}> 
              <Accordion.Header>{"Group " + g}</Accordion.Header>
              <Accordion.Body>
                <TableComponent group={g}/>
              </Accordion.Body>
            </Accordion.Item>        
          ))}
        </Accordion>
        </Tab>
        <Tab eventKey="encounters" title="Matches">
          <EncountersComponent />
        </Tab>
      </Tabs>
      );
}

export default Home;