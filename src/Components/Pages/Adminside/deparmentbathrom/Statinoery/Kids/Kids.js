
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Kidscard from './Kidscard';

// const  Kids = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/kidssfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Kidscard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Kids;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Kids = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/kidssfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/kids" />
        ))}
      </div>
    </div>
  );
}

export default Kids;