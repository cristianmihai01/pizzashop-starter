import React, { useContext, useEffect, useState } from 'react';
// next image
import Image from 'next/image';
// context
import { CartContext } from '../context/CartContext';

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);

  // counter
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  // close modal after 5 seconds
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        // set successMsg to default
        setSuccessMsg(false);
        // clear the cart
        setCart([]);
        // close the modal
        setModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  return (
    <div>
      {successMsg ? (
        <div className='flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6'>
          <h2 className='text-2xl font-semibold text-center'>
            Thank you! The order has been placed!
          </h2>
          <Image src={'/success-1.gif'} width={150} height={150} alt='' />
          <div className='text-lg text-center'>
            This window will close in <span className='font-bold'>{count}</span>{' '}
            seconds
          </div>
        </div>
      ) : (
        <div className='lg:gap-x-8 h-full lg:px-12 lg:py-8'>
          <h2 className='mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0'>
            Shipping & Checkout
          </h2>
          <div className='h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4'>
            {/* box 1 */}
            <div className='h-full flex-1 overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0'>
              {/* firstname & lastname */}
              <div className='flex flex-col gap-4 h-full'>
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input
                    className='w-full input'
                    type='text'
                    placeholder='First Name'
                  />
                  <input
                    className='w-full input'
                    type='text'
                    placeholder='Last Name'
                  />
                </div>
                {/* phone & email address */}
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input
                    className='w-full input'
                    type='text'
                    placeholder='Phone'
                  />
                  <input
                    className='w-full input'
                    type='text'
                    placeholder='Email Address'
                  />
                </div>
                {/* street & no. */}
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                  <input
                    className='input w-full'
                    type='text'
                    placeholder='Street Name'
                  />
                  <input
                    className='w-full lg:max-w-[140px] input'
                    type='text'
                    placeholder='Street No.'
                  />
                </div>
                {/* block, floor & apartment */}
                <div className='flex justify-between gap-x-4'>
                  <input
                    className='w-full input'
                    type='text'
                    placeholder='Block'
                  />
                  <input
                    className='w-full input'
                    type='text'
                    placeholder='Floor'
                  />
                  <input
                    className='w-full input'
                    type='text'
                    placeholder='Apt. No.'
                  />
                </div>
                {/* textarea */}
                <div className='flex-1 h-full'>
                  <textarea
                    className='textarea w-full h-full'
                    placeholder='Mentions (optional)'
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='h-full flex-1 lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0'>
              <div className='border rounded-lg flex flex-col mb-4 p-4 h-full'>
                <h3 className='text-base font-extrabold uppercase mb-4 border-b pb-4'>
                  Your order
                </h3>
                {/* items */}
                <div className='overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2'>
                  {cart.map((pizza, index) => {
                    return (
                      <div
                        className='flex justify-between text-[#767676] text-[15px]'
                        key={index}
                      >
                        <div className='flex gap-x-2'>
                          <div className='capitalize'>{pizza.name}</div>
                          <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          $ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* total */}
                <div className='mt-auto border-t pt-4 flex justify-between font-semibold uppercase font-robotoCondensed'>
                  <div>Total</div>
                  <div>$ {parseFloat(cartTotal).toFixed(2)}</div>
                </div>
              </div>
              {/* place order button */}
              <button
                onClick={() => setSuccessMsg(true)}
                className='btn btn-lg gradient grad w-full'
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutDetails;
