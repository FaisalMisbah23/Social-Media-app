import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'

document.title = 'login Page'
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checkEmail, setCheckEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [linkValue,setLinkValue]=useState("/");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (email && email.endsWith("@gmail.com")) {
      setCheckEmail(`Email is valid` );
    } else {
      setCheckEmail("Enter a valid Email");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (password.length >= 8) {
      setCheckPassword("Password is valid");
    }if (email && email.endsWith("@gmail.com") && password.length >= 8){
       
        setLinkValue("/createprofie");
    } else {
      setCheckPassword("Password is too short");
    }
  };

  const checkedLogin = () => {
    if (email && email.endsWith("@gmail.com") && password.length >= 8) {
      // Perform login logic here
      console.log("Login successful");
     setShowSuccessAlert(true);
     setTimeout(() => {
       setShowSuccessAlert(false);
      
     }, 2000); 
     setIsLoggedIn(true);
    } else {
      // Handle invalid login
      console.log("Invalid login");
      setShowDangerAlert(true);
      setTimeout(() => {
        setShowDangerAlert(false);
      }, 1000); 
    }

    
  };


  return (
    <>
    

    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          {showSuccessAlert ? (
            <div className="alert alert-success" role="alert">
              Login Success
            </div>
          ) : null}
          {showDangerAlert ? (
            <div className="alert alert-danger" role="alert">
              Login Failed
            </div>
            
          ) : null}

          <div
            className="col-sm-6 text-black"
            style={{
              marginTop: "5rem"}}
          >
            <div className="px-5 ms-xl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                style={{ marginBottom: "0.8rem" }}
                fill="currentColor"
                class="bi bi-dribbble"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
                />
              </svg>

              <span className="h1 fw-bold mb-0"> Social Hub</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n9">
              <form style={{ width: "23rem"}}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>
                <div className="form-outline mb-4">
                  <input
                    onChange={handleEmailChange}
                    type="email"
                    id="form2Example18 Email"
                    className="form-control form-control-lg"
                  />
                  <label
                    className="form-label Password"
                    aria-required
                    htmlFor="form2Example18"
                  >
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    onChange={handlePasswordChange}
                    type="password"
                    id="form2Example28 Pass"
                    className="form-control form-control-lg"
                  />
                  <label
                    className="form-label Email"
                    aria-required
                    htmlFor="form2Example28"
                  >
                    Password
                  </label>
                  <h6>
                    {" "}
                    <p>{checkEmail}</p>
                  </h6>
                  <h6>
                    {" "}
                    <p>{checkPassword} </p>
                  </h6>
                </div>
                <div className="pt-1 mb-4">
                  <button
                    onClick={checkedLogin}

                    className="btn btn-info btn-lg btn-block"
                    type="button"
                  >
                    <Link  onClick={checkedLogin } to={linkValue}>Login</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section></>
  );
};

export default LoginPage;
