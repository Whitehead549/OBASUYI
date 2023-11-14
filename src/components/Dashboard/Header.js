import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  const h1Style = {
    color: '#1E4D92', // Dark blue color for a professional look
    fontStyle: 'italic', // Italic style
    // You can add other CSS properties here, such as font-size, text-align, etc.
  };

  return (
    <header>
      <h1 style={h1Style}>OBASUYI StepHaineE Database</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Patient</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;

