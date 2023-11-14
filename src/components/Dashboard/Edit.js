import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore";
import { db } from '../../config/firestore'




const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing, getEmployees }) => {
  const id = selectedEmployee.id;

  const [Candidate, setCandidate] = useState(selectedEmployee.Candidate);
  const [diagnosis, setdiagnosis] = useState(selectedEmployee.diagnosis);

  const [gurdName, setgurdName] = useState(selectedEmployee.gurdName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [Age, setAge] = useState(selectedEmployee.Age);
  const [date, setDate] = useState(selectedEmployee.date);
  const [sessions, setSession] = useState(selectedEmployee.sessions);
  const [caregiver, setCaregiver] = useState(selectedEmployee.caregiver);
  const [contact, setcontact] = useState(selectedEmployee.contact);
  const [CG_contact, setCG_contact] = useState(selectedEmployee.CG_contact);


  



  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!Candidate || !gurdName || !email || !Age || !date || !diagnosis || !sessions || !caregiver || !contact || !CG_contact) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      Candidate,
      Age,
      date,
      diagnosis,
      gurdName,
      contact,
      email,
      caregiver,
      CG_contact,
      sessions,
      
    };

    // TODO: Update document
    // Add a new document in collection "cities"
    setDoc(doc(db, "employees", id), {
      ...employee
    });

    setEmployees(employees);
    setIsEditing(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.Candidate} ${employee.gurdName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1 style={{ fontStyle: 'italic', color:'#1E4D92' }}>Edit Patient</h1>
        <label htmlFor="Candidate">Name</label>
        <input
          id="Candidate"
          type="text"
          name="Candidate"
          value={Candidate}
          onChange={e => setCandidate(e.target.value)}
        />

        
        <label htmlFor="Age">Age (yrs)</label>
        <input
          id="Age"
          type="number"
          name="Age"
          value={Age}
          onChange={e => setAge(e.target.value)}
        />

        <label htmlFor="date">Date_of_Birth</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />


        <label htmlFor="diagnosis">HealthRecord</label>
        <input
          id="new_Name"
          type="text"
          name="new_Name"
          value={diagnosis}
          onChange={e => setdiagnosis(e.target.value)}
        />



  
        <label htmlFor="gurdName">Guardian</label>
        <input
          id="gurdName"
          type="text"
          name="gurdName"
          value={gurdName}
          onChange={e => setgurdName(e.target.value)}
        />

        <label htmlFor="gurdName">G-Contact</label>
        <input
          id="gurdName"
          type="text"
          name="gurdName"
          value={contact}
          onChange={e => setcontact(e.target.value)}
        />

        <label htmlFor="email">E-address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        
       
        
        <label htmlFor="Candidate">CareGiver</label>        
        <input
          id="caregiver"
          type="text"
          name="Caregiver"
          value={caregiver}
          onChange={e => setCaregiver(e.target.value)}
        />

        <label htmlFor="gurdName">CG-Contact</label>
        <input
          id="gurdName"
          type="text"
          name="gurdName"
          value={CG_contact}
          onChange={e => setCG_contact(e.target.value)}
        />


        <label htmlFor="email"> Schedul_Session </label>
        <input
          id="sessions"
          type="text"
          name="sessions"
          value={sessions}
          onChange={e => setSession(e.target.value)}
        />




        


        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
