import React from 'react';
import { FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import Qrcode from '../../Assets/Images/footer/Qrcode 1.png';
import download_appstore from '../../Assets/Images/footer/download-appstore.png';
import g_play from '../../Assets/Images/footer/g_play.png';

const Footer2: React.FC = () => {
  return (
    <section className='mt-28 min-h-[250px] bg-black'>
      <div className='flex flex-col gap-10 justify-center'>
        <div className='h-[80%] flex justify-around px-7'>
          <div className='w-[20%] flex flex-col gap-2'>
            <h1 className='font-semibold text-base md:text-lg text-white'>Exclusive</h1>
            <p className='text-base md:text-lg text-white'>Subscribe</p>
            <p className='text-sm text-white'>Subscribe</p>
            <input placeholder='Enter your email' className='inline-flex font-extralight px-5 bg-black border-2' />
          </div>

          <div className='w-[25%] flex flex-col gap-2'>
            <h1 className='font-semibold text-white text-base md:text-lg'>Support</h1>
            <p className='text-xs md:text-sm text-white'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className='text-xs md:text-sm text-white'>exclusive@gmail.com</p>
            <p className='text-xs md:text-sm text-white'>+88015-88888-9999</p>
          </div>

          <div className='w-[10%] flex flex-col gap-2'>
            <h1 className='font-semibold text-base md:text-lg text-white'>Account</h1>
            <p className='text-xs md:text-sm text-white'>My Account</p>
            <p className='text-xs md:text-sm text-white'>Login / Register</p>
            <p className='text-xs md:text-sm text-white'>Cart</p>
            <p className='text-xs md:text-sm text-white'>Wishlist</p>
            <p className='text-xs md:text-sm text-white'>Shop</p>
          </div>

          <div className='w-[15%] flex flex-col gap-2'>
            <h1 className='font-semibold text-base md:text-lg text-white'>Quick Link</h1>
            <p className='text-xs md:text-sm text-white'>Privacy Policy</p>
            <p className='text-xs md:text-sm text-white'>Terms Of Use</p>
            <p className='text-xs md:text-sm text-white'>FAQ</p>
            <p className='text-xs md:text-sm text-white'>Contact</p>
          </div>

          <div className='w-[20%] flex flex-col gap-2'>
            <h1 className='font-semibold text-base md:text-lg text-white'>Download App</h1>
            <div className='flex gap-2'>
              <img className='w-[40%]' src={Qrcode} alt="QR Code" />
              <div className='flex flex-col gap-2'>
                <img className='w-[100%]' src={download_appstore} alt="Download from App Store" />
                <img className='w-[100%]' src={g_play} alt="Download from Google Play" />
              </div>
            </div>
            <div className='flex justify-around w-[80%]'>
              <FaYoutube className="text-white mt-1" />
              <FaFacebook className="text-white mt-1" />
              <FaTwitter className="text-white mt-1" />
            </div>
          </div>
        </div>
        <div className='h-[5%] font-extralight text-base md:text-lg text-center text-white'>
          Copyright Rimel 2022. All rights reserved
        </div>
      </div>
    </section>
  );
};

export default Footer2;
