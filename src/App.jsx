import { useState } from 'react';
import './App.css';
// import Card from './component/Card.jsx';
// import NevSearch from './component/NevSearch.jsx';

import { data } from './Data/ProduitData.jsx';
// import Card2 from './component/Card2.jsx';
// import Home from './component/Home.jsx';
import HomePage from './Pages/Home/HomePage.jsx';
import {BrowserRouter,Route, Router, Routes} from 'react-router-dom'
import DetailDuProduit from './Pages/Home/DetailDuProduit.jsx';
import Login from './Pages/Auth/Login.jsx';
import Footer from './component/Uitily/Footer.jsx';
import NevbarLogin from './component/Uitily/NevbarLogin.jsx';
import NouvelleInscription from './Pages/Auth/NouvelleInscription.jsx';
import AllCategoryPage from './Pages/Category/AllCategoryPage.jsx';
import AllProductsPage from './Pages/Products/AllProductsPage.jsx';




function App() {
  
  const [tableau,serTableau]=useState(data)
  //data=[ {id:'0',imgs:'iphone-1.png'},{id:'1',imgs:'iphone-2.png'},{id:'2',imgs:'pc-1.png'},{id:'3',imgs:'pc-2.webp'}]
 
const imgss= 'iphone-2.png';
  return (
    <div className="">
      
      <BrowserRouter>
      <NevbarLogin/>

        <Routes>

         <Route index element={<HomePage/>}></Route>
         <Route path='/detailDuProduit'element={<DetailDuProduit imgs={'pc-2.webp'} />}></Route> 
         <Route path='/login'element={<Login imgs={'pc-2.webp'} />}></Route> 
         <Route path='/nouvelleInscription'element={<NouvelleInscription/>}></Route>
         <Route path='/allCategoryPage'element={<AllCategoryPage/>}></Route>
         <Route path='/allProductsPage'element={<AllProductsPage/>}></Route>
        </Routes>    
                          
         
     </BrowserRouter>
     <Footer/>
    </div> 
  );
}

export default App;
