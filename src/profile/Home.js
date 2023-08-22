import Typed from 'typed.js';
import React,{ useEffect, useRef } from 'react';
import './index.css';
import Bg2 from './Bg2.png';
import Resume from './Resume.docx';
const TypedTitle = () => {  
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Backend Developer",
        "C++ Developer",
        "Web Developer",
      ], typeSpeed: 200,
      loop: true,
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <h3 className='=h3'>
      <span ref={el}></span>{" "}
    </h3>
    </>
    
  );
};
function Home() {
  return (<>

    <h1>Portfolio</h1>
    <section>
      <blockquote><strong ><supscript className="supscript">"</supscript>Experience in Programming is the name that everyone gives to their mistakes.<supscript className="supscript">"</supscript></strong> </blockquote>
      <div className="intro">

        <pre> <div className='firt-intro-line'><h3 className='h3'>Hello, My Name is  </h3><h2 className='h2'>Devesh Shukla</h2></div></pre>
        <pre><div className='second-intro-line'><h3 className='i-am'> I am A </h3><h2 className='h2  typed' id="typed-element">{TypedTitle()}</h2></div></pre>
      </div>
      <a className='btn'  href={Resume}  download="Resume.docx">Resume <i className='bi bi-download'></i></a>
      <img src={Bg2} alt="Profile" className='home-image'></img>
      </section>
  </>)
}
export default Home;