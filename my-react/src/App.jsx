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




