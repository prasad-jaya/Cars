import { useRef } from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import Circle from "./components/Circle";

const App = () =>{
    const pointerRef = useRef();

    const handleMove = (e) =>{
        

       setTimeout(() => {
        pointerRef.current.style.left = `${e.clientX}px`;
        pointerRef.current.style.top = `${e.clientY}px`;
       }, 100);
           
      
    }

    return(
        <div className="container is-fluid" onMouseMove={handleMove}>
            <Circle ref={pointerRef} />
            <CarForm/>
            <CarSearch/>
            <CarList/>
            <CarValue/>
        </div>
    )

}
export default App;