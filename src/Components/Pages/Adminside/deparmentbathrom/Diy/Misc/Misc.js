
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Misccard from './Misccard';

const Misc = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/lynwoodfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Misccard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Misc;
