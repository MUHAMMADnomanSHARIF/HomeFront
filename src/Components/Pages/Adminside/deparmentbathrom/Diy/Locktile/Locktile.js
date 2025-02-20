
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Locktilecard from './Locktilecard';

const Locktile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/locktilefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Locktilecard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Locktile;

