import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firestore'

const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {
  const [Candidate, setCandidate] = useState('');
  const [diagnosis, setdiagnosis] = useState('');
  const [gurdName, setgurdName] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setEmail] = useState('');
  const [Age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [sessions, setSession] = useState('');
  const [caregiver, setCaregiver] = useState('');
  const [CG_contact, setCG_contact] = useState('');



  const handleAdd = async (e) => {
    e.preventDefault();

    if (!Candidate || !gurdName || !email || !Age || !date || !diagnosis || !sessions || !contact || !CG_contact) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      Candidate,
      Age,
      date,
      diagnosis,
      gurdName,
      contact,
      email,   
      caregiver,
      CG_contact,
      sessions
    };

    employees.push(newEmployee);



    try {
      await addDoc(collection(db, "employees"), {
        ...newEmployee
      });

    } catch (error) {
      console.log(error)

    }



    setEmployees(employees);
    setIsAdding(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${Candidate} ${gurdName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1 style={{ fontStyle: 'italic', color:'#1E4D92' }}>Add Patient</h1>
        <label htmlFor="Candidate">Candidate</label>
        <input
          id="Candidate"
          type="text"
          name="Candidate"
          value={Candidate}
          onChange={e => setCandidate(e.target.value)}
        />

        <label htmlFor="Age">Age</label>
        <input
          id="Age"
          type="number"
          name="Age"
          value={Age}
          onChange={e => setAge(e.target.value)}
        />

        <label htmlFor="date">Date of Birth</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />


        <label htmlFor="diagnosis">Health record</label>
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
          id="Gcontact"
          type="text"
          name="Gcontact"
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

        

        <label htmlFor="date">Session_Schedule</label>
        <input
          id="sessions"
          type="text"
          name="sessions"
          value={sessions}
          onChange={e => setSession(e.target.value)}
        />

       


        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
