import React, {useState} from "react";
import './App.css';
import data from './mock-data.json'

function App() {

  const [contacts, setContacts] = useState(data);
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr className="head-info">
            <th>First name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Place of Birth</th>
            <th>Adress</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) =>(
          <tr>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.idNumber}</td>
            <td>{contact.gender}</td>
            <td>{contact.dateOfBirth}</td>
            <td>{contact.placeOfBirth}</td>
            <td>{contact.address}</td>
          </tr>))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
