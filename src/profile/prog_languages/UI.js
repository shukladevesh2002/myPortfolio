import '../index.css';
import UI from './logos/Ui.jpg';
import React from 'react';
function Css(){
    return(
        <>
        <div className="css language-container">
          <img src={UI} alt="Ui Developer"></img>
            <p>
                <h5>UI Developemnt</h5>
                The Bootstrap And CSS increase my Interset Towards the UI Development.
                The Classes in Bootstrap helps lot to make a better UI Designs for the 
                Clients.The CSS selectors provides a way to access very and each element 
                of HTML and Change its properties. CSS animation helps to add animated things in The User Interface.
            </p>
        </div> 
        </>
    )
}
export default Css;