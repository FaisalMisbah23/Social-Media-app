import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaHome } from "react-icons/fa";
import './friend.css'

const Friends = (props) => {
    document.title="Friend List"
    return (
        <>
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 text-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                style={{ marginBottom: "0.4rem" }}
                fill="currentColor"
                className="bi bi-dribbble"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
                />
              </svg>
              <span className="h3 fw-bold mb-0"> Social Hub</span>
            </a>
    
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <Link className="nav-link" to='/home'><FaHome /></Link>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-camera-reels-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" />
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
              <Link className="nav-link" to="/addfriend">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-rss-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                 
                </a>
              </li>
            </ul>
    
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
    
            <input
              className="form-control form-control-dark w-100"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-dots-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg> */}
                  <Link to="/profilepage">
                    <img
                      src={
                        props.profileImage
                          ? URL.createObjectURL(props.profileImage)
                          : "https://bootdey.com/img/Content/avatar/avatar2.png"
                      }
                      alt="Profile"
                      style={{ width: "25px", borderRadius: "100px" }}
                    />
                  </Link>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
    
          
    
          <div className="container-fluid">
            <div className="row">
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div
                  className="sidebar-sticky sticky-top"
                  style={{ marginTop: "4rem", position: "fixed" }}
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="#">
                        <Link to="/profilepage">
                          {" "}
                          <img
                            src={
                              props.profileImage
                                ? URL.createObjectURL(props.profileImage)
                                : "https://bootdey.com/img/Content/avatar/avatar2.png"
                            }
                            alt="Profile"
                            style={{
                              width: "22px",
                              borderRadius: "100px",
                              marginBottom: "0.3rem",
                            }}
                          />
                        </Link>
                        <Link to="/profilepage">
                          {" "}
                          <p
                            style={{
                              color: "#0d6efd",
                              marginLeft: "0.3rem",
                              marginBottom: "0px",
                            }}
                          >
                            {props.name}{" "}
                          </p>
                        </Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-bar-chart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                        </svg>{" "}
                        Ads Manager
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-megaphone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                        </svg>{" "}
                        Ads Center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-briefcase-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                        </svg>{" "}
                        Business Suite
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-file-bar-graph-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
                        </svg>{" "}
                        Dashboard
                      </a>
                    </li>
                  </ul>
                  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Suggested</span>
                    <a
                      className="d-flex align-items-center text-muted"
                      href="#"
                    ></a>
                  </h6>
                  <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-fire"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                        Trending
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>{" "}
                        Groups
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-floppy-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5v-13Z" />
                          <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V16Zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V0ZM9 1h2v4H9V1Z" />
                        </svg>{" "}
                        Save Post
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="#">
                        <svg
                          style={{ marginTop: "0.3rem" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                          />
                        </svg>{" "}
                        <Link to="/">
                          {" "}
                          <p style={{ color: "#0d6efd", marginLeft: "0.3rem" }}>
                            {" "}
                            Log Out
                          </p>
                        </Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div
                  className="chartjs-size-monitor"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: -1,
                  }}
                >
                  <div
                    className="chartjs-size-monitor-expand"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      pointerEvents: "none",
                      visibility: "hidden",
                      zIndex: -1,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "1000000px",
                        height: "1000000px",
                        left: 0,
                        top: 0,
                      }}
                    />
                  </div>
                  <div
                    className="chartjs-size-monitor-shrink"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      pointerEvents: "none",
                      visibility: "hidden",
                      zIndex: -1,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "200%",
                        height: "200%",
                        left: 0,
                        top: 0,
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <div className="container">
                    <div className="col-md-12">
                      <div id="content" className="content content-full-width">
                        {/* begin profile */}
                        <div className="profile">
                          <div className="profile-header">
                            {/* BEGIN profile-header-cover */}
                            <div className="profile-header-cover" />
                            {/* END profile-header-cover */}
                            {/* BEGIN profile-header-content */}
                            <div className="profile-header-content">
                              {/* BEGIN profile-header-img */}
                              <div className="profile-header-img">
                                <img
                                  src={
                                    props.profileImage
                                      ? URL.createObjectURL(props.profileImage)
                                      : "https://bootdey.com/img/Content/avatar/avatar2.png"
                                  }
                                  alt=""
                                />
                              </div>
                              {/* END profile-header-img */}
                              {/* BEGIN profile-header-info */}
                              <div className="profile-header-info">
                                <h4 className="m-t-10 m-b-5">{props.name}</h4>
                                <p className="m-b-10">{props.userName}</p>
                                <a
                                  href="/createprofie"
                                  className="btn btn-sm btn-info mb-2"
                                >
                                  <Link to='/createprofie'>Edit Profile </Link>
                                </a>
                                <button onClick={props.handleFollow} className="btn btn-sm btn-info mb-2 ms-2" >
                                  {props.manageFollow}
                                </button>
                              </div>
                              {/* END profile-header-info */}
                            </div>
                            {/* END profile-header-content */}
                            {/* BEGIN profile-header-tab */}
    
                            <ul className="profile-header-tab nav nav-tabs">
                            <li className="nav-item">
                           
                           <Link className="nav-link_" to='/profilepage'>POSTS</Link>
                       
                       </li>
                              <li className="nav-item">
                                <a
                                  href="https://www.bootdey.com/snippets/view/bs4-profile-about"
                                  target="__blank"
                                  className="nav-link_"
                                >
                                  ABOUT
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="https://www.bootdey.com/snippets/view/profile-photos"
                                  target="__blank"
                                  className="nav-link_"
                                >
                                  PHOTOS
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="https://www.bootdey.com/snippets/view/profile-videos"
                                  target="__blank"
                                  className="nav-link_"
                                >
                                  VIDEOS
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="https://www.bootdey.com/snippets/view/bs4-profile-friend-list"
                                  target="__blank"
                                  className="nav-link"
                                >
                                  FRIENDS
                                </a>
                              </li>
                            </ul>
                            {/* END profile-header-tab */}
    
                            {/* BEGIN PROFILE */}
                          </div>
                        </div>
                        {/* end profile */}
    
                        <div className="profile-section-main">
                          {/* /.nav-tabs */}
                          {/* Tab panes */}
                          <div className="profile-container">
  <div className="row row-space-20">
    <div className="col-md-8">
      <div className="tab-content p-0">
        <div className="tab-pane fade active show" id="profile-friends">
          <div className="m-b-10"><b>Friend List (9)</b></div>
          <ul className="friend-list clearfix">
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Sancho Aldo</h4>
                  <p>392 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Jonty Augusto</h4>
                  <p>128 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Androkles Allen</h4>
                  <p>12 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Ithamar Silvio</h4>
                  <p>1,923 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Denzel Annas</h4>
                  <p>893 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Kamil Cree</h4>
                  <p>983 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Fritjof Inderjit</h4>
                  <p>3,321 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Sushil Trygve</h4>
                  <p>921 friends</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                <div className="friend-info">
                  <h4>Frans Gebhard</h4>
                  <p>944 friends</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div></div>

                        </div>
    
  
                    {/* end profile-content */}
                       
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </main>
            </div>
          </div>
        </>
      );
}

export default Friends
