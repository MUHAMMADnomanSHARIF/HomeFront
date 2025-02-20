
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Teacard from './Teacard';

// const Tea = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/teafreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Teacard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tea;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const KitchenACC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/teafreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/tea" />
        ))}
      </div>
    </div>
  );
}

export default KitchenACC;
