import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'USD',
    // minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Candidate</th>
            <th>age</th>
            <th>DateofBirth</th>
            <th>HealthRecord</th> {/* New column header */}    
            <th>Guardian</th>
            <th>G_Contact</th>                 
            <th className="email-header">E.address</th>         
             <th>CareGiver</th>
             <th>CG_Contact</th>
            <th>Session_Schedule</th> {/* Add a new column header */}
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                {/* <td>{employee.id}</td> */}
                <td>{employee.Candidate}</td>
                <td>{formatter.format(employee.Age)}</td>
                <td>{employee.date}</td>
                <td>{employee.diagnosis}</td> {/* Corresponding data cell */}  
                <td>{employee.gurdName}</td>
                <td>{employee.contact}</td>
                <td>{employee.email}</td>              
                <td>{employee.caregiver}</td>
                <td>{employee.CG_contact}</td>
                <td>{employee.sessions}</td>
                
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9}>Please wait loading...</td> {/* Adjust the colspan to match the number of columns */}
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
