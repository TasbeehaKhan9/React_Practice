

// import React from 'react' 
// import logo from '../public/vite.svg'
// import '../src/App.css'

// function App() {
//   return (
//     <>
//       <div className='div' >
//         nav bar
//     </div>
//     <div>
//         nav bar
//     </div><div>
//         nav bar
//     </div><div>
//         nav bar
//     </div>
//     <img src={logo} width="80px" />
//     </>
  
    
//   )

// }


// export default App 



import { useEffect, useState } from "react";
import Animation from "../hello";
import "./home"  


function App(){
    const [showSplash , setShowSplash] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        },2000 );
    }, []);
return<>{showSplash && <Animation /> }</>;

}
export default App

