import React, { useContext, useState } from 'react';
// icons
import { IoCloseOutline } from 'react-icons/io5';
// components
import CheckoutDetails from './CheckoutDetails';
// modal
import Modal from 'react-modal';
// context
import { CartContext } from '../context/CartContext';

// bind modal to body
Modal.setAppElement('body');

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const CartBottom = () => {
  const { setIsOpen, cart, cartTotal } = useContext(CartContext);
  // modal state
  const [modal, setModal] = useState(false);

  // open modal
  const openModal = () => {
    setModal(true);
  };

  // close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {cart.length >= 1 ? (
        <div className='px-6 py-3 lg:py-6 mt-auto'>
          {/* clear cart btn & price cart price */}
          <div className='flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed'>
            <div>Total:</div>
            <div>${parseFloat(cartTotal).toFixed(2)}</div>
          </div>
          <div className='flex flex-col gap-y-3'>
            <button
              className='btn btn-lg gradient font-semibold flex justify-center'
              onClick={() => {
                setIsOpen(false), openModal(true);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className='absolute top-0 w-full h-full flex justify-center items-center -z-10'>
          <div className='font-semibold'>Your cart is empty</div>
        </div>
      )}
      {modal && (
        <Modal
          className={
            'bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none'
          }
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel='Pizza Modal'
        >
          {/* close modal icon */}
          <div
            className='absolute z-30 right-2 top-2 text-2xl hover:scale-110 duration-200 cursor-pointer'
            onClick={closeModal}
          >
            <IoCloseOutline className='text-4xl text-orange' />
          </div>
          <CheckoutDetails setModal={setModal} />
        </Modal>
      )}
    </>
  );
};

export default CartBottom;
