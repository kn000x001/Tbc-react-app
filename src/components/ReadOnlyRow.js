import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.FirstName}</td>
      <td>{contact.LastName}</td>
      <td>{contact.IdNumber}</td>
      <td>{contact.Gender}</td>
      <td>{contact.DateOfBirth}</td>
      <td>{contact.PlaceOfBirth}</td>
      <td>{contact.Adress}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;