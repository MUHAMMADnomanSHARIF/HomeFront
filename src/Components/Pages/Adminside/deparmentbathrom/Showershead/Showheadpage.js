
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Showheadcard from './Showheadcard';

// const  Showheadpage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/showheadfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Showheadcard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default  Showheadpage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Showheadpage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/showheadfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/showerheadsinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Showheadpage;