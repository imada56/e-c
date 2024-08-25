import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase } from '../../Firebase/UseFirebase';
//import CartProduct from '../../component/Uitily/CartProduct';
//import { ValueConntext } from '../../component/Context';
import { subTotal } from '../../Redux/LikeSlice/LikeSlice';
import { RootState } from '../../Redux/Store/Store'
import CartProduct from '../../component/Uitily/CartProduct';
import { Product } from '@/Firebase/types';

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

interface CartProps {
  Products: Product[];
}

const Cart: React.FC<CartProps> = ({ Products }) => {
  const Shipping = 500;
  const { TabCart } = useSelector((state: RootState) => state.Liked);
  const ArrayCart = Products.filter((item) => TabCart.includes(item.id));
  const [products, setProducts] = useState<NewTypeProduct[]>(ArrayCart.map((item) => ({ ...item, quantite: 0, subTotal: 0 })));

  const getTotale = (products: NewTypeProduct[]) => {
    let Total = 0;
    products.forEach((item) => {
      Total += item.prix * item.quantite;
    });
    return Total;
  };

  const dispatch = useDispatch();
  
  const T = getTotale(products);
  const Total = T + Shipping;

  const [stotal, setStotal] = useState({
    id: products.map((item) => item.id),
    Shipping: Shipping,
    Total: T,
    quantite: products.map((item) => item.quantite),
    subTotal: products.map((item) => item.subTotal),
  });

  useEffect(() => {
    setStotal({
      id: products.map((item) => item.id),
      Shipping: Shipping,
      Total: T,
      quantite: products.map((item) => item.quantite),
      subTotal: products.map((item) => item.subTotal),
    });
  }, [products]);

 
  dispatch(subTotal({ stotal }));

  return (
    <section className='min-h-[320px] mt-[140px]'>
      <div className='container m-auto flex flex-col gap-2 w-[70%] border-2 p-2'>
        <div className=''>
          <div className='flex justify-around items-center shadow-sm mb-2 shadow-slate-500'>
            <p>Product</p>
            <p>Prix</p>
            <p>Quqntite</p>
            <p>Subtotal</p>
          </div>
          <div className='w-[100%] h-36 overflow-auto flex flex-col gap-2'>
            {ArrayCart.map((item) => (
              <CartProduct key={item.id} product={products} setProduct={setProducts} id={item.id} imgs={item.imgs} title={item.title} prix={item.prix} />
            ))}
          </div>
        </div>
        <div className='h-[50%] md:h-[45%] pt-2 flex flex-col gap-5 md:flex-row px-2 md:justify-between'>
          <div className='md:h-[15%] flex justify-between md:w-[35%]'>
            <input type='search' className='border-2 px-3' name='' id='' placeholder='Coupon Code' />
            <button className='px-2 py-2 border-2 text-white bg-red-500'> Apply Coupon</button>
          </div>
          <div className='border-2 flex flex-col gap-4 items-center md:h-[90%] md:w-[40%] px-4 py-2'>
            <h2>Cart Total</h2>
            <div className='flex justify-between w-[100%] px-2 border-b-2 border-black'>
              <p>Subtotal</p>
              <p className='text-red-400'>${T}</p>
            </div>
            <div className='flex justify-between w-[100%] px-2 border-b-2 border-black'>
              <p>Shipping:</p>
              <p className='text-red-400'>${Shipping}</p>
            </div>
            <div className='flex justify-between w-[100%] px-2'>
              <p>Total:</p>
              <p className='text-green-600'>${Total}</p>
            </div>
            <Link to={'/checkOut'}>
              <button className='px-2 py-2 border-2 text-white bg-red-500 w-[70%]'>Proceed to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
