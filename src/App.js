import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    FirstName: "",
    LastName: "",
    Adress: "",
    PlaceOfBirth: "",
    IdNumber: "",
    Gender: "",
    DateOfBirth: "",
  });

  const [editFormData, setEditFormData] = useState({
    FirstName: "",
    LastName: "",
    Adress: "",
    PlaceOfBirth: "",
    IdNumber: "",
    Gender: "",
    DateOfBirth: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      FirstName: addFormData.FirstName,
      LastName: addFormData.LastName,
      Adress: addFormData.Adress,
      PlaceOfBirth: addFormData.PlaceOfBirth,
      IdNumber: addFormData.IdNumber,
      Gender: addFormData.Gender,
      DateOfBirth: addFormData.DateOfBirth,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      FirstName: editFormData.FirstName,
      LastName: editFormData.LastName,
      Adress: editFormData.Adress,
      PlaceOfBirth: editFormData.PlaceOfBirth,
      IdNumber: editFormData.IdNumber,
      Gender: editFormData.Gender,
      DateOfBirth: editFormData.DateOfBirth,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      FirstName: contact.FirstName,
      LastName: contact.LastName,
      Adress: contact.Adress,
      PlaceOfBirth: contact.PlaceOfBirth,
      IdNumber: contact.IdNumber,
      Gender: contact.Gender,
      DateOfBirth: contact.DateOfBirth,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
 
  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>ID</th>
              <th>Gender</th>
              <th>Date of birth</th>
              <th>Place of Birth</th>
              <th>Adress</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form className="user-input" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="FirstName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="LastName"
          required="required"
          placeholder="Enter Last name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="IdNumber"
          required="required"
          placeholder="Enter Id..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Gender"
          required="required"
          placeholder="Gender..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="DateOfBirth"
          required="required"
          placeholder="Date of birth..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="PlaceOfBirth"
          required="required"
          placeholder="Place of birth..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Adress"
          required="required"
          placeholder="Adress..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
