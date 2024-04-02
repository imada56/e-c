import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import {FaList} from "react-icons/fa"
function NmbrProduitSearch() {
  return (
    <div className='flex justify-between px-12'>
        
        <div className=''>
        <UnopDropdown trigger={<button className='inline-flex  gap-1'>Click <FaList className='mt-1'/> </button>}>
             <ul className='bg-slate-100 '>
                <li className=' '>Listitem1</li>
                <li >List item 2</li>
             </ul>
        </UnopDropdown>
        </div>
        <div className='font-semibold '>400 Produit ... </div>
    </div>
  )
}

export default NmbrProduitSearch