import '../index.css';
import react from './logos/react.jpg';
function React(){
    return(
        <>
        <div className="react language-container">
         <img src={react} alt="react"></img>      
    <p>
       <h5>React Developement</h5>
         I use React when I required to make a single-page Applications.React uses Component Based 
         Architecture means react containes evrything as a Container and render it on one page

          </p>
        </div>
        </>
    )
}
export default React;