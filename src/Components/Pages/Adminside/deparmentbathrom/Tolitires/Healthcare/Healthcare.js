
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Healthcarecards from './Healthcarecard';

// const Healthcare = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/healthfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Healthcarecards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Healthcare;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Healthcare = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/healthfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/healthsinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Healthcare;