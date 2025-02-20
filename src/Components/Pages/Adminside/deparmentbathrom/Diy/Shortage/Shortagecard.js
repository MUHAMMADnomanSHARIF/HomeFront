import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Shortagecard = ({ user }) => {
   const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/shortagesinglepage/id`, { state: { id: user._id } });
  };

  return (
    <div className="col-6 col-sm-2 col-md-4 col-lg-3 mt-4">
      <div className="card11212">
        <h5 className="image">
          <div onClick={handleImageClick} className="btn">
            {user.image && (
              <img
                src={`http://srv577826.hstgr.cloud:8001/${user.image}`}
                alt={user.name}
                className="img-fluid border"
                style={{ height: '60%', width: '99%' }}
              />
            )}
          </div>
        </h5>
        <h5 className="ms-2">{user.name.slice(0, 25)}</h5>
        <p dangerouslySetInnerHTML={{ __html: user.title.slice(0, 25) }}></p>
        <center>
          <button className="btn btn-success mb-2 w-100">Shop now</button>
        </center>
      </div>
    </div>

  );
};

export default Shortagecard; 
