import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaHeart}from 'react-icons/fa'
import imgv  from '../../Assets/Images/Vector.png'
import imgv1  from '../../Assets/Images/Vector1.png'
import { useDispatch, useSelector } from "react-redux";
import { addImg, addLiked } from '../../Redux/LikeSlice/LikeSlice'
import { DataProduit } from '../../Data/ProduitData'
import { useEffect } from 'react'

function ProductCard({imgs ,titlePrdct,id,w}) {
  const {TabLike} =useSelector(state =>state.Liked)
  var x=false
  if(TabLike.includes(id)){
     x=true;
  }
  const [isVisible,setIsVisibol]=useState(x)
  //console.log('reeeeeeeererererre ',x)
  const dispatch = useDispatch();
  //const [TabLike,setTabLike]=useState(DataProduit[1].filter((i)=>(i.id===id)));
  const Heart =useRef()
  
  const handelclick=()=>{
  dispatch(addLiked({id}))
  setIsVisibol(prev=>!prev)

 }
const fct =()=>{
  dispatch(addImg({imgs}))
}
 
  return (
  <div onClick={()=>fct()}  className='max-h-56 min-h-56  shadow-black flex flex-col bg-[#F5F5F5] items-center justify-center shadow-md rounded-xl  w-[90%] md:w-[80%] xl:w-[70%]  '>
   <Link to={'/DetailDuProduit'} className='h-[120px]   w-[80%] '> 
    <div  className='h-[100%]  flex items-center justify-center  w-[100% '>
      <img className='h-[80%] object-fill' src={imgs}/>
    </div></Link> 
           
        <div className='h- w-[100%] px-3 py-1 flex flex-col justify-around'>
          <FaHeart  onClick={ () => {handelclick()}} 
          className={`${isVisible ?'text-red-400':'text-gray-400'} cursor-pointer  text-2xl`} />
          
          
<Link to={'/DetailDuProduit'} > 
        <p className=' font-semibold text-sm   '>{titlePrdct}
        </p>
        <div className=' flex flex-row justify-between text-red-500'>
            <p className=''>546$</p>
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

  )
}

export default ProductCard