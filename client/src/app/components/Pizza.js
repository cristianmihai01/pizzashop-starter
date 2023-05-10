'use client';
import { useState } from 'react';
// image
import Image from 'next/image';
// modal
import Modal from 'react-modal';
// components
import PizzaDetails from './PizzaDetails';
// icons
import { IoCloseOutline } from 'react-icons/io5';

// bind modal to body
Modal.setAppElement('body');

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const Pizza = ({ pizza }) => {
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
    <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image
        onClick={openModal}
        width={270}
        height={270}
        src={pizza.image}
        alt=''
        priority={1}
        className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer'
      />
      {/* title */}
      <div onClick={openModal}>
        <div className='text-xl font-bold mb-3 capitalize cursor-pointer'>
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className='text-sm text-[#5C6370] font-medium min-h-[60px] mb-6'>
        {pizza.description}
      </div>
      {/* price & btn */}
      <div className='mb-6 flex items-center justify-between'>
        {/* price -> hidden (sm) - visible (lg) */}
        <div className='hidden lg:flex text-xl font-semibold'>
          starts at {pizza.priceSm}
        </div>
        {/* btn -> hidden (sm) - visible (lg) */}
        <button
          onClick={openModal}
          className='hidden lg:flex text-white rounded-lg font-semibold btn-sm text-sm gradient'
        >
          Choose
        </button>
        {/* btn -> visible (sm) - hidden (lg) */}
        <button
          onClick={openModal}
          className='btn btn-sm gradient lg:hidden px-3'
        >
          starts at $9.99
        </button>
      </div>
      {/* modal */}
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
            <IoCloseOutline className='text-4xl text-red-400' />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
