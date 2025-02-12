import { useState, useEffect } from 'react';

export default function WindowSizeRef() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [color, setColor] = useState("#ffffff");
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    return(
        <div className='window-info' style={{backgroundColor: `${color}`}}>
            <p>Window size (px)</p>
            <p>{width} x {height}</p>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}