import React, {useState} from 'react';
const Slider = () => {
    const [x,setX]=useState('0');
    const[y,setY]=useState('0');
    const[z,setZ]=useState('0');
    return (
        <>
            <div className="slideBlock">
            <div className="strack"></div>
            <div className="slideProgress" style={{"width": (50/400*100) + "%"}}></div>
                <input
                    onChange={() => 
                        {
                       if(x<100) {
                            setX(x+ 1)
                            setY(100-x-2)
                             setZ(1)  
                        }
                    }
                }
                    value={x}
                    type="range"
                    name="range"
                    id="range"
                    min="0" max="100" />
<input     onChange={() =>
                    {
                        if(y<100){
                            setY(y+ 1)
                            setZ(100-y-2)
                             setX(1)
                        }
                    }
        
                }
                    value={y}
                    type="range"
                    name="range"
                    id="range"
                    min="0" max="100" />
                    <input
                    onChange={() => 
                    {
                        if(z<100){
                            setZ(z+ 1)
                            setX(100-z-2)
                             setY(1)
                        }
                    }
                    }
                    value={z}
                    type="range"
                    name="range"
                    id="range"
                    min="0" max="100" />


                <div className="Price">{x}</div>
                <div className="Price">{y}</div>
                <div className="Price">{z}</div>
            </div>
            <div className="imput_fields custom-imput-fields">
                <label className="price_prod">X: <small>Y:</small> Z:<br />
                    <input type="text" onChange={(e) => setX(e.target.value >=0 && e.target.value <= 100 ? e.target.value : '100')} id="price_prod" name="price_prod" value={x}/>
                    <input type="text" onChange={(e) => setY(e.target.value >=0 && e.target.value <= 100 ? e.target.value : '100')} id="price_prod" name="price_prod" value={y}/>
                    <input type="text" onChange={(e) => setZ(e.target.value >=0 && e.target.value <= 100 ? e.target.value : '100')} id="price_prod" name="price_prod" value={z}/>
                </label>
            </div>
            <br /><br />
        </>
    );
}

export default Slider;