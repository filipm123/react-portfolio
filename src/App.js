import "./App.css";
import { TiTime } from "react-icons/ti";
import { TiClipboard } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import avatar from "./avatar.jpg";
import markdownPreviewImage from "./markdown-preview.png";
import quoteGeneratorImage from "./quote-generator.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useRef } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjectDisplayer, setShowProjectDisplayer] = useState(false);
  const ref = useRef(null);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("filipmiedlar801@gmail.com");

    toast.success("Email saved in clipboard!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });
  };

  const handleClickProjects = () => {
    setShowProjects(!showProjects);
  };
  const handleClickSkills = () => {
    setShowSkills(!showSkills);
  };
  const handleProjectDisplayClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setShowProjectDisplayer(!showProjectDisplayer);
  };

  return (
    <div className="portfolio-container">
      <div className="info-container">
        <div className="info-top-bar">
          <div className="web-developer-text">&lt;Portfolio/&gt;</div>
          <div className="available-text">
            <TiTime /> Available for work!
          </div>
        </div>
        <div class="hello-container">
          <div className="hello-text">
            Hello!👋
            <p
              style={{
                fontSize: "18px",
                color: "grey",
              }}
            >
              My name is <b>Filip Międlar!</b>
              <br />
              Web developer from Kraków looking to get experience.
            </p>
          </div>
          <img className="avatar" src={avatar} alt="Avatar"></img>
        </div>
        <span className="avatar-buttons" style={{ display: "flex" }}>
          <button onClick={handleEmailCopy} className="copy-email-btn">
            <TiClipboard /> Copy Email
          </button>
          <ToastContainer autoClose={2000} />
          <a href="https://github.com/filipm123">
            <button className="copy-email-btn">
              <TiSocialGithubCircular /> Github
            </button>
          </a>
        </span>

        <div className="card">
          <div className="projects-card-top-bar">
            <div
              style={{
                cursor: "grab",
              }}
              onClick={handleClickProjects}
            >
              &gt; Projects{" "}
            </div>
            <div>
              <button
                onClick={handleProjectDisplayClick}
                className="seeall-btn"
              >
                See all <TiArrowRight className="arrow" />
              </button>
            </div>
          </div>
          {showProjects && (
            <div className="item-container">
              <span
                onClick={handleProjectDisplayClick}
                style={{ cursor: "grab" }}
                className="item"
              >
                <div>Bums: a work in progress music album helper</div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TiArrowRight className="arrow" />
                </div>
              </span>
              <span
                onClick={handleProjectDisplayClick}
                style={{ cursor: "grab" }}
                className="item"
              >
                <div>Github flavoured markdown preview</div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TiArrowRight className="arrow" />
                </div>
              </span>
              <span
                onClick={handleProjectDisplayClick}
                style={{ cursor: "grab" }}
                className="item"
              >
                <div>Random quote generator</div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TiArrowRight className="arrow" />
                </div>
              </span>
            </div>
          )}
        </div>

        <div className="card">
          <div className="projects-card-top-bar">
            <div style={{ cursor: "grab" }} onClick={handleClickSkills}>
              &gt; Skills{" "}
            </div>
          </div>
          {showSkills && (
            <div className="item-container">
              <span className="item">
                <div className="language-icon-text">
                  <img
                    style={{ width: "50px" }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="img"
                  />
                  HTML
                </div>
              </span>

              <span className="item">
                <div className="language-icon-text">
                  <img
                    style={{ width: "50px" }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="img"
                  />
                  CSS
                </div>
              </span>

              <span className="item">
                <div className="language-icon-text">
                  <img
                    style={{ width: "50px" }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="img"
                  />
                  Javascript
                </div>
              </span>
              <span className="item">
                <div className="language-icon-text">
                  <img
                    style={{ width: "50px" }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="img"
                  />
                  React
                </div>
              </span>
              <span className="item">
                <div className="language-icon-text">
                  <img
                    style={{ width: "50px" }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="img"
                  />
                  Python
                </div>
              </span>
              <span className="item">
                <div className="language-icon-text">
                  <img
                    style={{ width: "50px" }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="img"
                  />
                  Figma
                </div>
              </span>
            </div>
          )}
        </div>
      </div>

      {showProjectDisplayer && (
        <div className="animate__animated animate__fadeInLeft">
          <div ref={ref} className="projects-displayer-container">
            <div className="item-container">
              <div
                className="item"
                style={{
                  padding: "30px",
                  flexDirection: "column",
                  backgroundColor: "rgb(228, 230, 236)",
                  boxShadow: "none",
                }}
              >
                <b className="projectName">Bums</b>
                <span className="item">
                  <div
                    style={{ width: "408px" }}
                    className="language-icon-text"
                  >
                    Bums is a full-stack web application using React,
                    TailwindCSS, Next.js and Firebase.
                    <br></br>
                    <br></br>
                    This app uses Firebase Authentication, every authenticated
                    user can create an album whose data is stored on the
                    Firebase Firestore.
                    <br></br>
                    <br></br>
                    Artists can also add notes "wip" and upload audio files for
                    created album tracks. 
                    <br></br>
                    <br></br>
                    Bums allows artists to easily manage
                    work in progress albums by keeping everything organized.
                  </div>
                </span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://bums.vercel.app/"
                  className="live-preview-btn"
                >
                  <TiSocialGithubCircular /> Live Preview
                </a>
              </div>
              <div
                className="item"
                style={{
                  padding: "30px",
                  flexDirection: "column",
                  backgroundColor: "rgb(228, 230, 236)",
                  boxShadow: "none",
                }}
              >
                <img
                  className="project-image"
                  src={markdownPreviewImage}
                  alt="img"
                />
                <b>Github flavoured markdown previewer</b>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://react-markdown-preview-theta.vercel.app/"
                  className="live-preview-btn"
                >
                  <TiSocialGithubCircular /> Live Preview
                </a>
              </div>

              <div
                className="item"
                style={{
                  padding: "30px",
                  flexDirection: "column",
                  backgroundColor: "rgb(228, 230, 236)",
                  boxShadow: "none",
                }}
              >
                <img
                  className="project-image"
                  src={quoteGeneratorImage}
                  alt="img"
                />
                <b>Random quote generator</b>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://react-randomquote-generator.vercel.app/"
                  className="live-preview-btn"
                >
                  <TiSocialGithubCircular /> Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
