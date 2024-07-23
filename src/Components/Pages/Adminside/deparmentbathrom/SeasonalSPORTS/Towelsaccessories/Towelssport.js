
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Towelaccesscards from '../../Textileaccessories/Towel&accessories/Towelaccesscard';

// const Towelssport = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/umbrellafreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Towelaccesscards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Towelssport;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Towelssport = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/umbrellafreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/umbrellasinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Towelssport;