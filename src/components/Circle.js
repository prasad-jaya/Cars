import { forwardRef } from "react";

const Circle = forwardRef (({}, ref) => {
    console.log(ref.current);
    return(
        <div ref={ref} className="circle" style={{left:0, top:0}}></div>
    )
})

export default Circle;