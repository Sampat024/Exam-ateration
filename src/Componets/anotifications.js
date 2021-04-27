import {Button,Card,Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../firebase';
import { useState,useEffect } from 'react';
import './exam_slot_assigning.css';
import './anotifications.css';
function App() {
    const db = firebase.firestore();
    // const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
    const [notif,setnotif]=useState([]);
    useEffect(() =>{
        db.collection('AdminDetails').onSnapshot(snapshot =>{
          setnotif(snapshot.docs.map(doc => doc.data().Notifications))
        })
      })
      console.log(notif.length)
    return(
        <span>
        <div className="rrt">
            <Button variant="primary" href="/ahome" className="ff" id="Home">Home</Button>
        <div className="uut">
            {console.log(notif)}
        {notif.map((row,index) => {
            console.log(row)
            return (
                
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Alteration request {index+1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{row}
                <br></br><br></br>
                <Button variant="success">Accept</Button>&nbsp;
                <Button variant="danger">Decline</Button>&nbsp;
                {/* <Button variant="danger" onClick={add_details(index)}>Delete</Button> */}
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>)
        })
        }  
        </div>
        </div>
        </span>

    )
}
export default App;
