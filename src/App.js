import './App.css';
import { TiTime } from "react-icons/ti";
import { TiClipboard }  from 'react-icons/ti'
import { TiArrowRight }  from 'react-icons/ti'
import avatar from './avatar.jpg'
import markdownPreviewImage from './markdown-preview.png'
import quoteGeneratorImage from './quote-generator.png'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills,setShowSkills] = useState(false);
  const [showProjectDisplayer, setShowProjectDisplayer] = useState(false);
  
  const handleEmailCopy = () => {
    navigator.clipboard.writeText('filipor123@gmail.com');
    
    toast.success('Email saved in clipboard!',
    {position: toast.POSITION.TOP_CENTER,
    className:'toast-message'});
  }
  
  const handleClickProjects = () => {
    setShowProjects(!showProjects);
  }
  const handleClickSkills = () => {
    setShowSkills(!showSkills);
  }
  const handleProjectDisplayClick = () => {
    setShowProjectDisplayer(!showProjectDisplayer)
  }

  
  return (
   <div className="portfolio-container">
    <div className='info-container'>
        <div className='info-top-bar'> 
          <div className='web-developer-text'>&gt; Web Developer</div>
          <div className='available-text'><TiTime /> Available for work!</div>
        </div>
        <div class='hello-container'>
          <div className='hello-text'>
            Hello!👋
            <p 
            style={{
              fontSize:'18px', 
              color:'grey',
            
              }}>
              My name is <b>Filip Międlar!</b>
              <br />
              Web developer from Kraków 
              <br />
              looking to get experience.
            </p>
          </div>
        <img className='avatar' src={avatar} alt='Avatar'></img>
        </div>    
        <button onClick={handleEmailCopy} className='copy-email-btn'><TiClipboard /> Copy Email</button>  
        <ToastContainer 
        autoClose={2000}/>
        
        <div className='card'>
            <div className='projects-card-top-bar'>
                <div style={{
                  cursor:'grab'

                }}
                onClick={handleClickProjects}>&gt; Projects </div>
                <div><button  onClick={handleProjectDisplayClick} className='seeall-btn'>See all <TiArrowRight className='arrow' /></button></div>
            </div>
            {showProjects && (
               
              <div className='item-container'>
                <span onClick={handleProjectDisplayClick} style={{cursor:'grab'}} className='item'><div>Github flavoured markdown preview</div><div style={{display:'flex', justifyContent:'center',}}><TiArrowRight className='arrow' /></div></span>
                <span onClick={handleProjectDisplayClick} style={{cursor:'grab'}} className='item'><div>Random quote generator</div><div style={{display:'flex', justifyContent:'center',}}><TiArrowRight className='arrow' /></div></span>
                
                </div>
            )}
        </div>
        
          <div className='card'>
            <div className='projects-card-top-bar'>
                <div style={{cursor:'grab'}} onClick={handleClickSkills}>&gt; Skills </div>
                
            </div>
            {showSkills && (
            <div className='item-container'>
              
              <span className='item'>
                    <div className='language-icon-text'>
                      <img style={{width:'50px'}}src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='img'/>
                      HTML
                    </div>  
                    
              </span>
             
              <span className='item'>
                    <div className='language-icon-text'>
                      
                        <img style={{width:'50px'}}src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='img'/>
                        CSS
                    </div>
                    
              </span>

              
              <span className='item'>
                    <div className='language-icon-text'>
                      
                        
                        <img style={{width:'50px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='img'/>
          
                        Javascript
                    </div>
                    
              </span>
              <span className='item'>
                    <div className='language-icon-text'>
                      
                        
                        
                        <img style={{width:'50px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='img'/>
          
          
                        React
                    </div>
                    
              </span>
              <span className='item'>
                    <div className='language-icon-text'>
                      
                        
                        
                        
                        <img style={{width:'50px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt='img'/>
          
          
                        Python
                    </div>
                    
              </span>
              <span className='item'>
                    <div className='language-icon-text'>
                      
                        
                        
                        
                        
                       <img style={{width:'50px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='img' />
          
          
          
                        Figma
                    </div>
                    
              </span>
              </div>
              )}
        </div>

            
        

            
        
    </div>

    {showProjectDisplayer && (
    <div className='animate__animated animate__fadeInLeft'> 
        
        <div className='projects-displayer-container'>Projects
          <div className='item-container'> 
            
            <div className='item' style={{padding:'30px',flexDirection:'column', backgroundColor:'rgb(228, 230, 236)',boxShadow:'none'}}>Github flavoured markdown previewer
            <img className='project-image' src={markdownPreviewImage} alt='img'/>
            <a rel="noreferrer" target='_blank' href='https://react-markdown-preview-theta.vercel.app/' className='live-preview-btn'>Live Preview</a>
            </div>


            <div className='item' style={{padding:'30px',flexDirection:'column', backgroundColor:'rgb(228, 230, 236)',boxShadow:'none'}}>Random quote generator
            <img className='project-image' src={quoteGeneratorImage} alt='img'/>
            <a rel="noreferrer" target='_blank' href='https://react-randomquote-generator.vercel.app/' className='live-preview-btn'>Live Preview</a>
            </div>
            
          </div>
        </div>
    
    </div>)}
    


   </div>
  );
}

export default App;
