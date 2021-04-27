//toast
//modal
import { Form,Button,Card,Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../firebase';
import { useState,useEffect } from 'react';
import './exam_slot_assigning.css';

function App() {
    const db = firebase.firestore();
    const [notif,setnotif]=useState([]);
    const [not,setnot]=useState([]);
    const [email,setemail]=useState([]);
    useEffect(() =>{
        db.collection('FacultyDetails').onSnapshot(snapshot =>{
          setnotif(snapshot.docs.map(doc => doc.data()))
        })
        db.collection('Extra').onSnapshot(snapshot =>{
            setemail(snapshot.docs.map(doc => doc.data().email))
          })
      })
      //console.log(notif);
    for(var i=0;i<notif.length;i++){
        if(notif[i].Email==email){
            console.log("hello")
            not=notif[i].notify;
            break;
        }
    }
    console.log(not);

    return(
        <span>
        <div className="rrt">
            <Button variant="primary" href="/ahome" className="ff" id="Home">Home</Button>
        <div>
        <Accordion defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>notif[0]</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
        </div>
        </div>
        </span>

    )
}
export default App;
