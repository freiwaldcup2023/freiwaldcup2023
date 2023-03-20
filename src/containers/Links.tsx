import { doc, setDoc } from "@firebase/firestore";
import { Button } from "react-bootstrap";
import { encountersCollection, teamsCollection } from "../utils/db";

const Links = () => {

    const save = async () => {
        // // await setDoc(doc(teamsCollection), { name: 'ASV Hagenberg 1', group: 'A' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Unterweißenbach 1', group: 'A' })
        // // await setDoc(doc(teamsCollection), { name: 'TC Kefermarkt 1', group: 'A' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Lasberg 1', group: 'A' })
        // // await setDoc(doc(teamsCollection), { name: 'UTV Windhaag/Freistadt', group: 'A' })
        // // await setDoc(doc(teamsCollection), { name: 'UTV Summerau', group: 'A' })

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'A', 
        // home_team: 'ASV Hagenberg 1',  guest_team: 'Union Unterweißenbach 1',
        // home_points: 1, guest_points: 8, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'A', 
        // home_team: 'TC Kefermarkt 1',  guest_team: 'Union Lasberg 1',
        // home_points: 2, guest_points: 7, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'A', 
        // home_team: 'UTV Windhaag/Freistadt',  guest_team: 'UTV Summerau',
        // home_points: 3, guest_points: 6, url: '', verified: false})
        
        // // await setDoc(doc(teamsCollection), { name: 'Union Neumarkt 1', group: 'B' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Hirschbach 1', group: 'B' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Alberndorf 1', group: 'B' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Schönau 1', group: 'B' })
        // // await setDoc(doc(teamsCollection), { name: 'UTC Reichenthal 1', group: 'B' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Leopoldschlag 1', group: 'B' })
        
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'B', 
        // home_team: 'Union Neumarkt 1',  guest_team: 'Union Hirschbach 1',
        // home_points: 1, guest_points: 8, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'B', 
        // home_team: 'Union Alberndorf 1',  guest_team: 'Union Neumarkt 1',
        // home_points: 2, guest_points: 7, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'B', 
        // home_team: 'Union Neumarkt 1',  guest_team: 'Union Schönau 1',
        // home_points: 3, guest_points: 6, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 23), group: 'B', 
        // home_team: 'UTC Reichenthal 1',  guest_team: 'Union Neumarkt 1',
        // home_points: 4, guest_points: 5, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 24), group: 'B', 
        // home_team: 'Union Neumarkt 1',  guest_team: 'Union Leopoldschlag 1',
        // home_points: 5, guest_points: 4, url: '', verified: false})

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'B', 
        // home_team: 'Union Hirschbach 1',  guest_team: 'Union Alberndorf 1',
        // home_points: 6, guest_points: 3, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'B', 
        // home_team: 'Union Schönau 1',  guest_team: 'Union Hirschbach 1',
        // home_points: 7, guest_points: 2, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'B', 
        // home_team: 'Union Hirschbach 1',  guest_team: 'UTC Reichenthal 1',
        // home_points: 1, guest_points: 2, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 23), group: 'B', 
        // home_team: 'Union Leopoldschlag 1',  guest_team: 'Union Hirschbach 1',
        // home_points: 2, guest_points: 7, url: '', verified: false})

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'B', 
        // home_team: 'Union Alberndorf 1',  guest_team: 'Union Schönau 1',
        // home_points: 3, guest_points: 6, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'B', 
        // home_team: 'UTC Reichenthal 1',  guest_team: 'Union Alberndorf 1',
        // home_points: 4, guest_points: 5, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'B', 
        // home_team: 'Union Alberndorf 1',  guest_team: 'Union Leopoldschlag 1',
        // home_points: 5, guest_points: 4, url: '', verified: false})

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'B', 
        // home_team: 'Union Schönau 1',  guest_team: 'UTC Reichenthal 1',
        // home_points: 6, guest_points: 3, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'B', 
        // home_team: 'Union Leopoldschlag 1',  guest_team: 'Union Schönau 1',
        // home_points: 7, guest_points: 2, url: '', verified: false})

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'B', 
        // home_team: 'UTC Reichenthal 1',  guest_team: 'Union Leopoldschlag 1',
        // home_points: 1, guest_points: 8, url: '', verified: false})

        // // await setDoc(doc(teamsCollection), { name: 'SC Tragwein/Kamig', group: 'C' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Waldburg 1', group: 'C' })
        // // await setDoc(doc(teamsCollection), { name: 'UTC Rainbach', group: 'C' })
        // // await setDoc(doc(teamsCollection), { name: 'TC Sandl', group: 'C' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Neumarkt 2', group: 'C' })
        // // await setDoc(doc(teamsCollection), { name: 'SV Pregarten', group: 'C' })

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'C', 
        // home_team: 'SC Tragwein/Kamig',  guest_team: 'Union Waldburg 1',
        // home_points: 1, guest_points: 8, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'C', 
        // home_team: 'UTC Rainbach',  guest_team: 'TC Sandl',
        // home_points: 2, guest_points: 7, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'C', 
        // home_team: 'Union Neumarkt 2',  guest_team: 'SV Pregarten',
        // home_points: 3, guest_points: 6, url: '', verified: false})
        
        // // await setDoc(doc(teamsCollection), { name: 'Union Alberndorf 2', group: 'D' })
        // // await setDoc(doc(teamsCollection), { name: 'TV Kronast', group: 'D' })
        // // await setDoc(doc(teamsCollection), { name: 'SPG Allerheiligen/Rechberg', group: 'D' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Hirschbach 2', group: 'D' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Unterweißenbach 2', group: 'D' })
        
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'D', 
        // home_team: 'Union Alberndorf 2',  guest_team: 'TV Kronast',
        // home_points: 1, guest_points: 8, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'D', 
        // home_team: 'SPG Allerheiligen/Rechberg',  guest_team: 'Union Hirschbach 2',
        // home_points: 2, guest_points: 7, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'D', 
        // home_team: 'Union Unterweißenbach 2',  guest_team: 'Union Alberndorf 2',
        // home_points: 3, guest_points: 6, url: '', verified: false})

        // // await setDoc(doc(teamsCollection), { name: 'ASKÖ Treffling 1', group: 'E' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Schweinbach', group: 'E' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Schönau 2', group: 'E' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Bad Zell', group: 'E' })
        // // await setDoc(doc(teamsCollection), { name: 'ASV Hagenberg 2', group: 'E' })
        
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'E', 
        // home_team: 'ASKÖ Treffling 1',  guest_team: 'Union Schweinbach',
        // home_points: 1, guest_points: 8, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'E', 
        // home_team: 'Union Schönau 2',  guest_team: 'Union Bad Zell',
        // home_points: 2, guest_points: 7, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'E', 
        // home_team: 'ASV Hagenberg 2',  guest_team: 'ASKÖ Treffling 1',
        // home_points: 3, guest_points: 6, url: '', verified: false})

        // // await setDoc(doc(teamsCollection), { name: 'Union Weitersfelden', group: 'F' })
        // // await setDoc(doc(teamsCollection), { name: 'TC Kefermarkt 2', group: 'F' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Königswiesen', group: 'F' })
        // // await setDoc(doc(teamsCollection), { name: 'UTC Reichenthal 2', group: 'F' })
        // // await setDoc(doc(teamsCollection), { name: 'ASKÖ Treffling 2', group: 'F' })

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'F', 
        // home_team: 'Union Weitersfelden',  guest_team: 'TC Kefermarkt 2',
        // home_points: 1, guest_points: 8, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'F', 
        // home_team: 'Union Königswiesen',  guest_team: 'UTC Reichenthal 2',
        // home_points: 2, guest_points: 7, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'F', 
        // home_team: 'ASKÖ Treffling 2',  guest_team: 'Union Weitersfelden',
        // home_points: 3, guest_points: 6, url: '', verified: false})

        // // await setDoc(doc(teamsCollection), { name: 'ATZ Linz', group: 'G' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Waldburg 2', group: 'G' })
        // // await setDoc(doc(teamsCollection), { name: 'Union St. Oswald', group: 'G' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Lasberg 2', group: 'G' })
        // // await setDoc(doc(teamsCollection), { name: 'Union Leopoldschlag 2', group: 'G' })

        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 20), group: 'G', 
        // home_team: 'ATZ Linz',  guest_team: 'Union Waldburg 2',
        // home_points: 1, guest_points: 8, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 21), group: 'G', 
        // home_team: 'Union St. Oswald',  guest_team: 'Union Lasberg 2',
        // home_points: 2, guest_points: 7, url: '', verified: false})
        // await setDoc(doc(encountersCollection), { date: new Date(2023, 3, 22), group: 'G', 
        // home_team: 'Union Leopoldschlag 2',  guest_team: 'ATZ Linz',
        // home_points: 3, guest_points: 6, url: '', verified: false})

    }

    return (
        <div>
            <h1>Links</h1>
            {
                // <Button onClick={save}> SAVE </Button>
            }
        </div>
    )
}

export default Links;