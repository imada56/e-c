import React, { useState } from 'react';

interface NewTypeProduct {
  id: string;
  arrayImg?:any[]
  imgs?: string;
  categorie: string;
  dscr?: string;
  prix: number;
  title:string;
  taille?: string;
  quantite: number;
  subTotal: number
}

interface CartProductProps {
  imgs?: string;
  title: string;
  prix: number;
  product: NewTypeProduct[]; // Update to use Product interface
  setProduct: React.Dispatch<React.SetStateAction<NewTypeProduct[]>>;
  id: string;
}

const CartProduct: React.FC<CartProductProps> = ({ imgs, title, prix, product, setProduct, id }) => {
  const [quantite, setQuantite] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantite = parseInt(e.target.value);
    setQuantite(newQuantite);

    // Update the product array with the new quantity and calculate subtotal
    setProduct(prevProducts => {
      const updatedProducts = prevProducts.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantite: newQuantite,
            subTotal: newQuantite * prix
          };
        }
        return item;
      });
      return updatedProducts;
    });
  };

  // Find the current quantity for this product
  const currentProduct = product.find(item => item.id === id);
  const Q = currentProduct ? currentProduct.quantite : 0;

  return (
    <div className='flex justify-around items-center w-[100%] shadow-sm mb-2 shadow-slate-500'>
      <div className='flex flex-col md:flex-row gap-2 items-center mr-6 w-[9%] md:w-[7%]'>
        <img className='object-contain h-[20%]' src={imgs} alt='' />
        <p className='text-xs md:text-base'>{title}</p>
      </div>
      <p className='text-sm md:text-base'>${prix}</p>
      <div className='w-[10%] text-center'>
        <input
          onChange={handleChange}
          className='border-2 w-9 md:w-12 px-1'
          placeholder='0'
          type='number'
          min={0}
          value={quantite}
        />
      </div>
      <p className='text-sm md:text-base'>{prix * Q}</p>
    </div>
  );
};

export default CartProduct;
