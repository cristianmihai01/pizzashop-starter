'use client';
// next image
import Image from 'next/image';
// parallax
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

const Banner = () => {
  return (
    <section className='bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16'>
      <div className='container mx-auto min-h-[768px] flex items-center justify-center'>
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className='w-full flex flex-col lg:flex-row justify-between items-center'
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6'>
              {/* text */}
              <div className='flex-1'>
                <div className='font-bangers text-[32px] text-white uppercase tracking-[0.03em]'>
                  Best pizza in town
                </div>
                <h1 className='text-6xl lg:text-8xl font-bangers text-white drop-shadow-md'>
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          {/* images */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className='relative'>
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6'>
              {/* image */}
              <div className='flex-1 flex justify-end max-w-sm lg:max-w-max'>
                <Image
                  src={'/pizza-banner.png'}
                  width={550}
                  height={558}
                  alt=''
                  priority={'lazy'}
                />
              </div>
            </div>
            {/* chilli 1 */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className='absolute top-6 left-4 hidden xl:flex'
            >
              <Image
                src={'/chilli-1.png'}
                width={160}
                height={84}
                alt=''
                priority={'lazy'}
              />
            </MouseParallaxChild>
            {/* chilli 2 */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className='absolute top-16 -left-4 hidden xl:flex'
            >
              <Image
                src={'/chilli-2.png'}
                width={130}
                height={84}
                alt=''
                priority={'lazy'}
              />
            </MouseParallaxChild>
            {/* garlic 1 */}
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.6}
              className='absolute top-80 -left-24 hidden xl:flex'
            >
              <Image
                src={'/garlic-1.png'}
                width={84}
                height={72}
                alt=''
                priority={'lazy'}
              />
            </MouseParallaxChild>
            {/* garlic 2 */}
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className='absolute top-[22rem] -left-8 hidden xl:flex'
            >
              <Image
                src={'/garlic-2.png'}
                width={100}
                height={72}
                alt=''
                priority={'lazy'}
              />
            </MouseParallaxChild>
            {/* garlic 3 */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={1}
              className='absolute top-96 -left-20 hidden xl:flex'
            >
              <Image
                src={'/garlic-3.png'}
                width={100}
                height={72}
                alt=''
                priority={'lazy'}
              />
            </MouseParallaxChild>
            {/* leaves */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              className='absolute top-96 left-12 hidden xl:flex'
            >
              <Image
                src={'/leaves.png'}
                width={180}
                height={72}
                alt=''
                priority={'lazy'}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
