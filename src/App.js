import './App.css';
import {CheckboxSVGMap } from 'react-svg-map';
import India from '@svg-maps/india'
import Slider from './Slider';
function App() {

  return (
    <div className="App">
        <CheckboxSVGMap onChange={(e)=>{
            console.log(e)
        }} 
        locationClassName="location" className="mysvg" map={India} 
        
        />
        <Slider/>
    </div>
  );                                                      
}

export default App;