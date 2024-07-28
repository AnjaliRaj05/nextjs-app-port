"use client";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="about"
      className="py-5"
      style={{
        padding: "150px 0 200px",
        backgroundColor: "#1d1b19",
        color: "#888",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="text-left">
              <h3 className="subtitle mb-3">About Me</h3>
              <h3 className="title mb-4">Biography</h3>
              <p className="desc mb-4">
                I'm a Freelancer Front-end Developer with over 12 years of
                experience. I'm from San Francisco. I code and create web
                elements for amazing people around the world. I like working
                with new people. New people are new experiences.
              </p>
            </div>

            <div
              className="about_info"
              style={{
                backgroundColor: "#1d1b19",
                color: "#888",
              }}
            >
              <table className="">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Bruce Wilson</td>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <td>4th April 1990</td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>31 years</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>San Francisco</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>
                      <a href="tel:+3846923442364" style={{ color: "#fff" }}>
                        (+38) 469 2344 2364
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>
                      <a
                        href="mailto:trendycoder.com@gmail.com"
                        style={{ color: "#fff" }}
                      >
                        trendycoder.com@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Skype</th>
                    <td>
                      <a href="skype:brucewilson.90" style={{ color: "#fff" }}>
                        brucewilson.90
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4 mb-4 d-flex flex-column justify-content-end align-items-end me-6">
            <div
              className="position-absolute border d-flex flex-column justify-content-center align-items-center"
              style={{ width: "250px", height: "200px" }}
            >
              <i className="fas fa-arrow-down mb-2"></i>
              <h3>Download CV</h3>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <button
            className={`btn ${
              activeTab === "experience" ? "btn-primary" : "btn-secondary"
            } mx-2`}
            onClick={() => handleTabClick("experience")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#888",
            }}
          >
            Experience
          </button>
          <button
            className={`btn ${
              activeTab === "education" ? "btn-primary" : "btn-secondary"
            } mx-2`}
            onClick={() => handleTabClick("education")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#888",
            }}
          >
            Education
          </button>
          <button
            className={`btn ${
              activeTab === "skills" ? "btn-primary" : "btn-secondary"
            } mx-2`}
            onClick={() => handleTabClick("skills")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#888",
            }}
          >
            Skills
          </button>
        </div>

        <div className="container-fluid p-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {activeTab === "experience" && (
                <div className="boxed-list">
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <div
                        className="card"
                        style={{
                          backgroundColor: "#181715",
                          color: "#888",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5>Frenify LLC</h5>
                          <span>(2018 — Today)</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Sr. Front-end Engineer</h5>
                          <p className="card-text">
                            Adipisicing Lorem ipsum dolor sit amet, consectetur
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div
                        className="card"
                        style={{
                          backgroundColor: "#181715",
                          color: "#888",
                          
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5>Google LLC</h5>
                          <span>(2016 — 2018)</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Front-end Developer</h5>
                          <p className="card-text">
                            Adipisicing Lorem ipsum dolor sit amet, consectetur
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div
                        className="card"
                        style={{
                          backgroundColor: "#181715",
                          color: "#888",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5>Twitter LLC</h5>
                          <span>(2011 — 2016)</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Graphic Designer</h5>
                          <p className="card-text">
                            Adipisicing Lorem ipsum dolor sit amet, consectetur
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "education" && (
                <div className="boxed-list">
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <div
                        className="card"
                        style={{
                          backgroundColor: "#181715",
                          color: "#888",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5>University of San Francisco</h5>
                          <span>(2008 — 2012)</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">
                            Bachelor of Science in Computer Science
                          </h5>
                          <p className="card-text">
                            Adipisicing Lorem ipsum dolor sit amet, consectetur
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "skills" && (
                <div>
                  <h3 className=""> Adobe Photo </h3>
                  <div className="progress" style={{ height: "1px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div>
                    <h3> HTML5 & CSS3 </h3>
                    <div className="progress" style={{ height: "1px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <h3> WordPress </h3>
                    <div className="progress" style={{ height: "1px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "96%" }}
                        aria-valuenow="99"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <p>
                      {" "}
                      A freelance creative designer with a love for minimal
                      design, clean typography and well-written code, located in
                      San Francisco. Provide high quality and cost effective
                      offshore web and software development services. Wide range
                      of web and software development services across the world.{" "}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
