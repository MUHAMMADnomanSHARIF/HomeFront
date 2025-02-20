
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Stvcards from './Stvcards';

// const Stv = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/stvfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Stvcards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stv;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Tissuepaper = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/stvfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/stv" />
        ))}
      </div>
    </div>
  );
}

export default Tissuepaper;