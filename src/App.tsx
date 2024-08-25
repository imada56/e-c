import React, { useEffect, useState } from 'react';
import Footer2 from './component/Uitily/Footer2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useFirebase } from './Firebase/UseFirebase';
import { Product, Marque } from './Firebase/types'; // Relative to src/Firebase
import ProductCard from './component/Products/ProductCard';
import ContinerProductCard from './component/Products/ContinerProductCard';
import { AuthProvider } from './ContexAuth/ContexAuth';
import DetailDuProduit from './Pages/Home/DetailDuProduit';
import HomePage from './Pages/Home/HomePage';
import { DataProduitPlus } from './Data/ProduitData';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Auth/Login';
import RequireAuth from './ContexAuth/RequireAuth';
import Compts from './Pages/Auth/Compts';
import UpdateProfil from './Pages/Auth/UpdateProfil';
import NouvelleInscription from './Pages/Auth/NouvelleInscription';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Wishlist from './Pages/Wishlist/Wishlist';
import CheckOut from './Pages/CheckOut/CheckOut';
import AllCategoryPage from './Pages/Category/AllCategoryPage';
import Cart from './Pages/Cart/Cart';
import AllProductsPage from './Pages/Products/AllProductsPage';
import AllMarquePage from './Pages/Marque/AllMarquePage';
import NevbarLogin from './component/Uitily/NevbarLogin';







//const marque= UseFirebase();


const App: React.FC = () => {
    const prudact= useFirebase();
    const marque = useFirebase();
    
   

    const [filtr, setFiltr] = useState<Product[]>(prudact.product);
    const [filtrMq, setFiltrMq] = useState<Marque[]>(marque.marque);

     const onRecherch = (word: string) => {
        if (word !== '') {
          const newTab = prudact.product.filter(j => j.title.includes(word));
          setFiltr(newTab);
         const newTabMq = marque.marque.filter(j => j.categorie.includes(word));
         setFiltrMq(newTabMq);
        } else {
          setFiltr(prudact.product);
          setFiltrMq(marque.marque);
        }
      };
   // console.log('filtr==== ',prudact.product)

   useEffect(() => {
    setFiltr(prudact.product);
    setFiltrMq(marque.marque);
    }, [(prudact.product )||(marque.marque)]);
    
    //onsole.log('prudact.product ==',prudact.product)
    // useEffect(() => {
    //   setFiltr(prudact.product)
    //   setFiltrMq(DataMarque[1])
    //  });
    
      //console.log('nbr ttttttt = '+filtr );
       
      //const [TitleP ,setTitleP]=useState(DataProduit[1]);
      const [currentPage, setCurrentPage] = useState(0);
      const itemsPerPage = 4; // Adjust as needed
      //console.log('prudact.=',prudact.product)
    
      // Calculate the total number of pages
      
      const pageCount = Math.ceil(((filtr).length)/itemsPerPage);
      const pageCountMq = Math.ceil(((filtrMq).length)/itemsPerPage);
      //console.log('pageCount ==',(prudact.product).length)
      // Get current items
      const currentItems = filtr.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      const currentItemsMq = filtrMq.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
     
      //Define a function to handle page changes
      const handlePageChange = (selectedPage:number) => {
        setCurrentPage(selectedPage);
      };
       const TitlePrdct=[prudact.product.map((i)=>(i.title))]
    //    const tblCategorie  =['touts', ...new Set((prudact.product).map((i)=>(i.categorie)))];
       const uniqueCategories: Set<string> = new Set(prudact.product.map((i) => i.categorie));
       const tblCategorie: string[] = ['touts', ...Array.from(uniqueCategories)];
       
       // Extract unique categories from marque
       const uniqueCategoriesMq: Set<string> = new Set(marque.marque.map((i) => i.categorie));
       const tblCategorieMq: string[] = ['touts', ...Array.from(uniqueCategoriesMq)];
       console.log('tblCategorie ==>',tblCategorie)
    //    const tblCategorieMq =['touts', ...new Set(marque.marque.map((i)=>(i.categorie)))];
       console.log('tblCategorieMq222 ==>',tblCategorieMq)
      ///console.log('v==',v)
      
      
     
      const filtercategoier =(cat: string)=>{ 
        if (cat==='touts'){setFiltr(prudact.product); setFiltrMq(marque.marque);}else{
        const newTab =(prudact.product).filter((i)=>(i.categorie===cat))
        //console.log('newTabCategorie ==',newTab)
        setFiltr(newTab);
        const newTabMq =marque.marque.filter((i)=>(i.categorie===cat))
        setFiltrMq(newTabMq);}
      }
      

  return (
    <div>
         
        <BrowserRouter>
       
        <NevbarLogin fct_rech={onRecherch}/>
       {/* <ContinerProductCard w={'nn'} titlePrdct={'imad'} tb={filtr} Produits={'Produits :'} Ajouter={'Ajouter'}/>
      */}
      <AuthProvider> 
          <Routes> 
          <Route index element={<HomePage currentItems={currentItems}  titlePrdct={TitlePrdct} tb1={filtr} tb3={DataProduitPlus} tb2={filtrMq}/>}></Route>
         <Route path='/detailDuProduit'element={<DetailDuProduit />}></Route> 
         {/* <Route path='/login'element={<Login imgs={'pc-2.webp'} />}></Route> 
         <Route path='/compts'
           element={<RequireAuth><Compts/></RequireAuth>}>
         </Route> */}
         <Route path='/detailDuProduit'element={<DetailDuProduit/>}></Route> 
         <Route path='/login'element={<Login imgs={'pc-2.webp'} />}></Route> 
         <Route path='/compts'element={<RequireAuth><Compts/></RequireAuth>}></Route>
        <Route path='/update'element={<UpdateProfil/>}></Route> 
          <Route path='/forgot_password'element={<ForgotPassword />}></Route> 
         <Route path='/nouvelleInscription'element={<NouvelleInscription/>}></Route>
         <Route path='/allCategoryPage'element={<AllCategoryPage Data={prudact.product} itemsPerPage={itemsPerPage} pageCount={pageCount} onPageChange={handlePageChange}  tb={filtr} currentItems={currentItems} categorie={tblCategorie} fct={filtercategoier}/>}></Route>
         <Route path='/allProductsPage'element={<AllProductsPage Data={prudact.product} itemsPerPage={itemsPerPage} pageCount={pageCount} onPageChange={handlePageChange}  tb={filtr} currentItems={currentItems} categorie={tblCategorie} fct={filtercategoier}/>}></Route>
          <Route path='/allMarquePage'element={<AllMarquePage Data={marque.marque} itemsPerPage={itemsPerPage} pageCount={pageCountMq} onPageChange={handlePageChange}  tb={filtrMq} currentItems={currentItemsMq} categorie={tblCategorieMq} fct={filtercategoier}/>}></Route>
         <Route path='/cartPage'element={<Cart Products={prudact.product }/>}></Route>
         <Route path='/checkOut'element={<CheckOut Products={prudact.product }/>}></Route>
         <Route path='/about'element={<About/>}></Route>
         <Route path='/contact'element={<Contact/>}></Route>
         <Route path='/wishlist'element={<Wishlist/>}></Route> 
         </Routes>
          </AuthProvider> 
      </BrowserRouter>
      
      <Footer2 />
    </div>
  );
};

export default App;
