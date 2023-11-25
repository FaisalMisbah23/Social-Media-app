import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import './profile.css'


const Profile = (props) => { 

    document.title = "Create Your Profile";

   
 

    const handleImageChange = (e) => {
      

      // Update the state with the selected image file
    //   props.setProfileImage(file);
    props.setProfileImage(e.target.files[0]);
    };
    const handleNameChange = (e) => {
      props.setName(e.target.value);
    }
    const handleuserChange = (e) => {
       props.setUserName(e.target.value);
      }
      const handlebioChange = (e) => {
        props.setBio(e.target.value);
      }
      const handleemailChange = (e) => {
        props.setEmail(e.target.value);
      }
      const handlecityChange = (e) => {
        props.setCity(e.target.value);
      }
      const handlecountryChange = (e) => {
        props.setCountry(e.target.value);
      }
      const handlerelationshipChange = (e) => {
        props.setRelationShip(e.target.value);
      }
    const handleAddressChange = (e) => {
        props.setAddress(e.target.value);
    }
  return (
    <div>
    <div className="container">
      <div className="py-5 text-center">
        

      {/* Input for selecting a new profile image */}
        <h2>Create Your Profile</h2>
        <p className="lead">Your information will be displayed on your profile for others to see. You can edit or change this information at any time in your profile settings.</p>
      </div>
      <div className="row">
      <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your Profile</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                {/* Display the current profile image */}
      {props.profileImage && (
        <img
          className="d-block mx-auto ms-5 mb-4"
          src={props.profileImage ? URL.createObjectURL(props.profileImage) : 'https://bootdey.com/img/Content/avatar/avatar2.png'}
          alt="Profile"
          style={{ maxWidth: '200px', maxHeight: '200px' , borderRadius: "1000px" }}
        />
      )}
                <h6 class="ms-5 text-center">{props.name}</h6>
                <h6 class="ms-5 text-center text-muted ">{props.userName? ("@" + props.userName): null }</h6>
              </div>


            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <small class="text-muted">{props.bio}</small>
                <h6 class="my-2"> <MdEmail /> {props.email}</h6>
                <h6 class="my-2"><FaHeart/> {props.RelationShip} </h6>
                <h6 class="my-2"><FaHome/> {props.address} </h6>
                <h6 class="my-2"><CiLocationOn /> {props.city}{props.country? ("," + props.country): null }</h6>
              </div>
            
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Enter Your Information</h4>
          
          <div className="mb-3">
                <label htmlFor="firstName">Enter your profile picture</label><br />
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </div>
          <form className="needs-validation was-validated" noValidate/>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="firstName">Name</label>
                <input onChange={handleNameChange} type="text" className="form-control" id="firstName" placeholder defaultValue required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              
            </div>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input onChange={handleuserChange} type="text" className="form-control" id="username" placeholder="Username" required />
                <div className="invalid-feedback" style={{width: '100%'}}>
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address2">Write Your Bio<span className="text-muted">(Optional)</span></label>
              <input onChange={handlebioChange}  type="text" className="form-control" id="bio" placeholder="I'm a ..." />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input onChange={handleemailChange} type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input onChange={handleAddressChange} type="text" className="form-control" id="address" placeholder="1234 Main St" required />
              <div className="invalid-feedback">
                Please enter your address.
              </div>
            </div>
            <div className="mb-3">
            <label htmlFor="country">RelationShip Status</label>
                <select onChange={handlerelationshipChange} className="custom-select d-block w-100" id="country" required>
                  <option value>Choose...</option>
                  <option  >Single</option>
                  <option>Married</option>
                  <option>In a RelationShip</option>

                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
            </div>
            <div className="row">
                
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select onChange={handlecountryChange} className="custom-select d-block w-100" id="country" required>
                  <option value>Choose...</option>
                  <option >Pakistan</option>
                  <option>India</option>
                  <option>Dubai</option>

                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select onChange={handlecityChange}  className="custom-select d-block w-100" id="state" required>
                  <option value>Choose...</option>
                  <option >Lahore</option>
                  <option>Karachi</option>
                  <option>Multan</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder required />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit"> <Link to='/home'>Continue</Link></button>
            </div>
            <hr className="mb-4" /> 
      <footer className="my-1 pt-2 text-muted text-center text-small">
        <p className="mb-1">© 2022-2023 Social Hub</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  </div></div></div>
  )
}

export default Profile
