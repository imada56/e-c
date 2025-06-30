import React from 'react'

interface CardCategoryType {
  img :string | undefined,
  title:string,
  background?:string,
  promotion?:number | undefined,
  prix?:number | undefined

}

const CardCategory :React.FC<CardCategoryType>=({
  img,
  title,
  background,
  promotion,
  prix 
  
  })=> {
  return (
    
      <div className='  h-[100%] flex flex-col justify-center items-center gap-2'>
        <div className=' h-[150px] w-[150px] p-2 rounded-full flex justify-center items-center  bg-[#F5F5F5]'>
            <img className='h-[60%]   object-fill'  src={img} alt="" />
        </div>
      <p className='h-[10%] font-mono text-center text-xl text-red-600  line-through'>
  {prix} 
</p>
<p className='h-[10%] font-mono text-center text-xl text-green-600'>
  {(prix ?? 0) - (((prix ?? 0) * (promotion ?? 0)) / 100)}
</p>

      </div>
 
  )
}

export default CardCategory