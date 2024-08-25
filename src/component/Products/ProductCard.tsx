import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addArrayImg, addDscr, addId, addImg, addLiked, addPrix, addTaille, addTitle } from '../../Redux/LikeSlice/LikeSlice';
import imgv  from '../../Assets/Images/Vector.png'
import imgv1  from '../../Assets/Images/Vector1.png'
// Define the type for the component props
interface ProductCardProps {
  w?: string;
  title: string;
  prix: number;
  dscr?: string;
  taille?: string;
  arrayImg?: any[];
  imgs?: string;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  w,
  title,
  prix,
  dscr,
  taille,
  arrayImg,
  imgs,
  id
}) => {
  const {TabLike} =useSelector((state: any) => state.Liked)
  var x=false
  if(TabLike.includes(id)){
     x=true;
  }
  const [isVisible,setIsVisibol]=useState(x)
  const dispatch = useDispatch();
  const heartRef = useRef<HTMLDivElement | null>(null); // Ref type
  const Heart =useRef()
  // Handler for liking a product
  const handleClick = () => {
    dispatch(addLiked({ id }));
    // Toggle functionality if needed
  };

  // Handler for dispatching product details
  const handleDetails = () => {
    dispatch(addImg({ imgs }));
    dispatch(addTitle({ title }));
    dispatch(addPrix({ prix }));
    dispatch(addDscr({ dscr }));
    dispatch(addTaille({ taille }));
    dispatch(addArrayImg({ arrayImg }));
    dispatch(addId({ id }));
  }; 
 
  
 
  //console.log('reeeeeeeererererre ',x)
  // const dispatch = useDispatch();
  //const [TabLike,setTabLike]=useState(DataProduit[1].filter((i)=>(i.id===id)));
  
  
  const handelclick=()=>{
  dispatch(addLiked({id}))
  setIsVisibol(prev=>!prev)
 }
 


  return (
    <div 
    onClick={()=>handleDetails()} 
     className='max-h-56 min-h-56  shadow-black flex flex-col bg-[#F5F5F5] items-center justify-center shadow-md rounded-xl  w-[90%] md:w-[80%] xl:w-[70%]  '>
    <Link  to={'/detailDuProduit'} className='h-[120px]   w-[80%] '> 
    
     <div  className='h-[100%]  flex items-center justify-center  w-[100%] '>
       <img className='h-[80%] object-fill' src={imgs}/>
     </div></Link> 
            
         <div className='h- w-[100%] px-3 py-1 flex flex-col justify-around'>
           <FaHeart 
           onClick={ () => {handelclick()}} 
          className={`${isVisible ?'text-red-400':'text-gray-400'} cursor-pointer  text-2xl`} 
          />
           
           
    <Link to={'/detailDuProduit'} > 
         <p className=' font-semibold text-sm   '>{title}
         </p>
         <div className=' flex flex-row justify-between text-red-500'>
             <p className=''>$ {prix}</p>
             <div className='flex gap-1 items-center text-xs'>
       <img src={imgv} alt="" />
       <img src={imgv} alt="" />
       <img src={imgv} alt="" />
       <img src={imgv1} alt="" />
       {/* <p>(150 Reviews0)</p>
       <p className='border-l-2 border-black pl-1 text-green-400'> In Stock</p> */}
             </div> 
         </div>
         </Link> 
         </div>
     {/* <div className='flex gap-1 items-center text-xs'>
       <img src={imgv} alt="" />
       <img src={imgv} alt="" />
       <img src={imgv} alt="" />
       <img src={imgv1} alt="" />
       <p>(150 Reviews0)</p>
       <p className='border-l-2 border-black pl-1 text-green-400'> In Stock</p>
        </div> */}
    </div>
    
  );
};

export default ProductCard;
