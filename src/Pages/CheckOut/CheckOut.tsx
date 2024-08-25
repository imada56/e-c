import React from 'react';
import { useSelector } from 'react-redux';
import img30 from '../../Assets/Images/image 30.png';
import img31 from '../../Assets/Images/image 31.png';
import img32 from '../../Assets/Images/image 32.png';
import img33 from '../../Assets/Images/image 33.png';
import g1 from '../../Assets/Images/g1.png';
import g2 from '../../Assets/Images/g2.png';
import { Product } from '../../Firebase/types';

interface CheckoutProps {
  Products: Product[];
}

const CheckOut: React.FC<CheckoutProps> = ({ Products }) => {
  const { TabCart, stotal } = useSelector((state: any) => state.Liked);

  const ArrayCart = Products.filter((item) => TabCart.includes(item.id));
  
  return (
    <section className='min-h-[320px] mt-[140px]'>
      <div className='container m-auto'>
        <div className='font-extralight flex justify-around md:w-[80%] m-auto px-4 md:px-10 my-6'>
          <a className='hover:font-semibold' href=''>
            Account{' '}
          </a>
          <span> / </span>
          <a className='hover:font-semibold' href=''>
            My Account{' '}
          </a>
          <span> / </span>
          <a className='hover:font-semibold' href=''>
            Product{' '}
          </a>
          <span> / </span>
          <a className='hover:font-semibold' href=''>
            View Cart{' '}
          </a>
          <span> / </span>
          <a className='hover:font-semibold' href=''>
            CheckOut
          </a>
        </div>

        <div className='container m-auto md:w-[80%] flex justify-around'>
          <div className='w-[45%]'>
            <h1 className='font-bold'>Billing Details</h1>
            <form className='flex flex-col gap-2 mt-2 ' action=''>
              <label className='font-extralight' htmlFor=''>
                First Name*
              </label>
              <input className='bg-[#F5F5F5] border-2' type='text' />
              <label className='font-extralight' htmlFor=''>
                Company Name
              </label>
              <input className='bg-[#F5F5F5] border-2' type='text' />
              <label className='font-extralight' htmlFor=''>
                Street Address*
              </label>
              <input className='bg-[#F5F5F5] border-2' type='text' />
              <label className='font-extralight' htmlFor=''>
                Apartment, floor, etc. (optional)
              </label>
              <input className='bg-[#F5F5F5] border-2' type='text' />
              <label className='font-extralight' htmlFor=''>
                Town/City*
              </label>
              <input className='bg-[#F5F5F5] border-2' type='text' />
              <label className='font-extralight' htmlFor=''>
                Phone Number*
              </label>
              <input className='bg-[#F5F5F5] border-2' type='text' />
              <label className='font-extralight' htmlFor=''>
                Email Address*
              </label>
              <input className='bg-[#F5F5F5] border-2 ' type='text' />
              <div>
                <input className='border-2 mr-2' type='checkbox' name='' id='' />
                <span>Save this information for faster check-out next time</span>
              </div>
            </form>
          </div>
          <div className='w-[35%] flex flex-col gap-1 py-6'>
            <div className='w-[100%] max-h-[20%] overflow-auto flex flex-col gap-1'>
              {ArrayCart.map((item, index) => (
                <div key={item.id} className='flex w-[100%] border-b-2 justify-between items-center px-2'>
                  <div className='flex gap-2 items-center mr-3 w-[15%]'>
                    <img className='object-contain h-[20%]' src={item.imgs} alt='' />
                    <p className='text-xs'>{item.title}</p>
                  </div>
                  <p className='text-sm md:text-base'>${stotal.subTotal[index]}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-col justify-around py-2 h-[20%] text-sm md:text-base'>
              <div className='flex justify-between w-[100%] px-2 border-b-2 border-black'>
                <p>Subtotal</p>
                <p className='text-red-500'>${stotal.Total}</p>
              </div>
              <div className='flex justify-between w-[100%] px-2 border-b-2 border-black'>
                <p>Shipping:</p>
                <p className='text-red-500'>${stotal.Shipping}</p>
              </div>
              <div className='flex justify-between w-[100%] px-2'>
                <p>Total:</p>
                <p className='text-green-600'>${stotal.Total + stotal.Shipping}</p>
              </div>
            </div>
            <div className='h-[5%] items-center px-2 flex justify-between'>
              <div className='flex gap-1'>
                <input className='' type='radio' name='' id='' />
                <p className='font-semibold text-sm md:text-base'>Bank</p>
              </div>
              <div className='flex justify-around w-[60%]'>
                <img className='w-[22%] object-contain' src={img33} alt='' />
                <img className='w-[22%] object-contain' src={img30} alt='' />
                <img className='w-[22%] object-contain' src={img32} alt='' />
                <img className='w-[22%] object-contain' src={img31} alt='' />
              </div>
            </div>
            <div className='flex gap-1 px-2'>
              <input type='radio' name='' id='' />
              <p className='text-sm md:text-base font-semibold'>Cash on delivery</p>
            </div>
            <div className='flex flex-col gap-1 md:flex-row md:justify-between px-2 w-[100%]'>
              <input
                type='search'
                className='border-2 text-sm md:text-base py-2 px-3 md:w-[55%]'
                name=''
                id=''
                placeholder='Coupon Code'
              />
              <button className='md:w-[40%] px-2 py-2 text-sm md:text-base border-2 text-white bg-red-500'>
                Apply Coupon
              </button>
            </div>
            {/* <button className='md:w-[40%] mx-2 text-sm md:text-base px-2 py-2 border-2 text-white bg-red-500'>
              Apply Coupon 
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
