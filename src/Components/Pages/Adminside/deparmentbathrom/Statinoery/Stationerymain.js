import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Stationerymain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/art&craft"><img src="/Images/stationary/1.jpg" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/books"><img src="/Images/stationary/2.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/diaries"> <img src="/Images/stationary/3.jpg" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/kids'><img src="/Images/stationary/4.jpg" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/mailing'><img src="/Images/stationary/5.jpg" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/office/home'><img src="/Images/stationary/6.jpg" alt className="img" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Stationerymain
