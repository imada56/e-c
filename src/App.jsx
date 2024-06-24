import { useContext, useEffect, useState } from 'react';
import './App.css';
// import Card from './component/Card.jsx';
// import NevSearch from './component/NevSearch.jsx';

//import { data } from './Data/ProduitData.jsx';
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
import { DataMarque, DataProduit, DataProduitPlus } from './Data/ProduitData.jsx';
import { ValueConntext } from './component/Context.jsx';
import {AuthProvider} from './ContexAuth/ContexAuth.jsx';
import Compts from './Pages/Auth/Compts.jsx';
import RequireAuth from './ContexAuth/RequireAuth.jsx';
import ForgotPassword from './Pages/Auth/ForgotPassword.jsx';
import UpdateProfil from './Pages/Auth/UpdateProfil.jsx';
import AllMarquePage from './Pages/Marque/AllMarquePage.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import CheckOut from './Pages/CheckOut/CheckOut.jsx';
import About from './Pages/About/About.jsx';
import Footer2 from './component/Uitily/Footer2.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import Wishlist from './Pages/Wishlist/Wishlist.jsx';




function App() {
  const {imgs} =useSelector(state =>state.Liked)
  const {data,onChange} = useContext(ValueConntext)
 const v=data[0];
 const mot=data[1];
 
  //console.log('nbr ttttttt = '+ v);
   const [filtr ,setFiltr]=useState(DataProduit[v]);
   const [filtrMq ,setFiltrMq]=useState(DataMarque[v]);
  //const [TitleP ,setTitleP]=useState(DataProduit[1]);
   const TitlePrdct=[DataProduit[1].map((i)=>(i.titel))]
   const tblCategorie =['touts', ...new Set(DataProduit[v].map((i)=>(i.categorie)))];
   const tblCategorieMq =['touts', ...new Set(DataMarque[v].map((i)=>(i.categorie)))];
  //console.log(tblCategorie)
  //console.log('ana '+DataProduit[v])

   
   useEffect(() => {
   setFiltr(DataProduit[v]);
  //  console.log(filtr)
   setFiltrMq(DataMarque[v]);
  }, [v]);
  
  const onRecherch=(word)=>{
    if (word!==''){ 
       const newTab =(DataProduit[v].filter((j)=>(j.titel.includes(word.toLowerCase()))))
       setFiltr(newTab);
       const newTabMq =(DataMarque[v].filter((j)=>(j.categorie.includes(word.toLowerCase()))))
       setFiltrMq(newTabMq);
      // console.log('imadou')
    }else{
        setFiltr(DataProduit[v])
        setFiltrMq(DataMarque[v])
      }
  }
 
  const filtercategoier =(cat)=>{ 
    if (cat==='touts'){setFiltr(DataProduit[v]); setFiltrMq(DataMarque[v]);}else{
    const newTab =DataProduit[v].filter((i)=>(i.categorie===cat))
    setFiltr(newTab);
    const newTabMq =DataMarque[v].filter((i)=>(i.categorie===cat))
    setFiltrMq(newTabMq);}
  }
  //console.log('newTb de'+DataProduit[v])
//const imgss= 'iphone-2.png';

  return (
    <div className="">
      
      <BrowserRouter>
      <NevbarLogin fct_rech={onRecherch}/>
        <AuthProvider>
        <Routes>
         
         <Route index element={<HomePage titlePrdct={TitlePrdct} tb1={filtr} tb3={DataProduitPlus} tb2={filtrMq}/>}></Route>
         <Route path='/detailDuProduit'element={<DetailDuProduit imgs={imgs} />}></Route> 
         <Route path='/login'element={<Login imgs={'pc-2.webp'} />}></Route> 
         <Route path='/compts'
           element={<RequireAuth><Compts/></RequireAuth>}>
         </Route>
         
         <Route path='/update'element={<UpdateProfil/>}></Route> 
         <Route path='/forgot_password'element={<ForgotPassword />}></Route> 
         <Route path='/nouvelleInscription'element={<NouvelleInscription/>}></Route>
         <Route path='/allCategoryPage'element={<AllCategoryPage/>}></Route>
         <Route path='/allProductsPage'element={<AllProductsPage data={v} tb={filtr} categorie={tblCategorie} fct={filtercategoier}/>}></Route>
         <Route path='/allMarquePage'element={<AllMarquePage data={v} tb={filtrMq} categorie={tblCategorieMq} fct={filtercategoier}/>}></Route>
         <Route path='/cartPage'element={<Cart/>}></Route>
         <Route path='/checkOut'element={<CheckOut/>}></Route>
         <Route path='/about'element={<About/>}></Route>
         <Route path='/contact'element={<Contact/>}></Route>
         <Route path='/wishlist'element={<Wishlist/>}></Route>
         
         
        </Routes>    
                     
        </AuthProvider> 
     </BrowserRouter>
      
     <Footer2/>
    </div> 
  );
}

export default App;
