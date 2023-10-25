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
import { useRef } from 'react';

function Navbar() {
 
  return (
    <div className='navbar-container'>
        <div className='navbar'><TiSocialGithubCircular /></div>
    </div>
  );
}

export default Navbar;
