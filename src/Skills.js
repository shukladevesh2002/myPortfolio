import React from 'react';
function Skills(){
    return(
        <>
              <div className='skills'>
     <span className="skill-heading">Skills</span>           
    <span className="skill-subheadings">Here are my skills</span>
        <div  className="skills-label">
          <label for="html" className='h5'>HTML</label>
          <input type="range" name="points" id="html" max={5.6} min={0} disabled></input>
        </div>
        <div className="skills-label">
          <label for="css" className='h5'>CSS</label>
          <input type="range" name="points" id="css" max={6.2} min={0} disabled></input>
        </div>
        <div className="skills-label">
          <label for="javascript" className='h5'>Javascript</label>
          <input type="range" name="points" id="javascript" max={5.2} min={0} disabled></input>

        </div>
        <div className="skills-label">
          <label for="php" className='h5'>PHP</label>
          <input type="range" name="points" id="php" max={5.8} min={0} disabled></input>
        </div>
        <div className="skills-label">

          <label for="react" className='h5'>React</label>
          <input type="range" name="points" id="react" max={9} min={0} disabled></input>
        </div>
        <div className="skills-label">
          <label for="cplus" className='h5'>C++</label>
          <input type="range" id="cplus" name="points" max={5.2} min={0} disabled></input>
        </div>
        <div className="skills-label">
          <label for="json" className='h5'>JSON</label>
          <input type="range" name="points" id="json" max={5.5} min={0} disabled></input>

        </div>
        <div className="skills-label">
          <label for="bootstrap" className='h5'>Bootstrap</label>
          <input type="range" name="points" id="bootstrap" max={8.6} min={0} disabled></input>

        </div>

      </div>

        </>
    )
}
export default Skills;