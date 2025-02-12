import { useState, useEffect } from 'react'

export default function HeaderStyleRef() {
    const [color, setColor] = useState("#ffffff");
    const [height, setHeight] = useState(50);

    // Box Shadow
    const [horizontalOffset, setHorizontalOffset] = useState(0);
    const [verticalOffset, setVerticalOffset] = useState(0);
    const [spread, setSpread] = useState(0);
    const [boxShadowColor, setboxShadowColor] = useState("#ffffff");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleHeightChange = (e) => {
        if(e.target.value >= 50) {
            setHeight(e.target.value);
        }
    }
    const handleHorizontalOffsetChange = (e) => {
        setHorizontalOffset(e.target.value);
    }
    const handleVerticalOffsetChange = (e) => {
        setVerticalOffset(e.target.value);
    }
    const handleSpreadChange = (e) => {
        setSpread(e.target.value);
    }
    const handleBoxShadowColorChange = (e) => {
        setboxShadowColor(e.target.value);
    }
    return(
        <div className='header' style={{
            backgroundColor: `${color}`, 
            height: `${height}px`,
            boxShadow: ` ${horizontalOffset}px ${verticalOffset}px ${spread}px ${boxShadowColor}`
            }}>
            <input type="color" value={color} onChange={handleColorChange}/>
            <p>Height: </p>
            <input type="number" value={height} onChange={handleHeightChange}/>
            <p>Box Shadow: </p>
            <p>ho: </p>
            <input type="number" value={horizontalOffset} onChange={handleHorizontalOffsetChange}/>
            <p>vo: </p>
            <input type="number" value={verticalOffset} onChange={handleVerticalOffsetChange}/>
            <p>s: </p>
            <input type="number" value={spread} onChange={handleSpreadChange}/>
            <p>c: </p>
            <input type="color" value={boxShadowColor} onChange={handleBoxShadowColorChange}/>
        </div>
    );
}