import { useState } from 'react';
import './App.css';
import Card from './component/Card.jsx';
import NevSearch from './component/NevSearch.jsx';
import Slider from './component/Slider.jsx';
import { data } from './component/Data.jsx';
import Card2 from './component/Card2.jsx';




function App() {
  
  const [tableau,serTableau]=useState(data)
  //data=[ {id:'0',imgs:'iphone-1.png'},{id:'1',imgs:'iphone-2.png'},{id:'2',imgs:'pc-1.png'},{id:'3',imgs:'pc-2.webp'}]
 

  return (
    <div className="">
      <NevSearch/>
      <Slider/>
      <div className=' flex flex-col justify-center items-center gap-3'>
      <div className='m-2 border-2 p-2 h-48 flex justify-between gap-1'>
      {tableau.map((i)=>(
        <Card img={i.imgs}/>
      ))}
      </div>
      </div>
      <Card2/>
    </div>
  );
}

export default App;
