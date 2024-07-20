import Image from 'next/image';

import Hero from './hero';
import Marquee from './marquee';
import HowToBuy from './how-to-buy';
import Tokenomics from './tokenomics';

import bg0 from './background-0.png';
import bg1 from './background-1.png';
import cat1 from './cat-1.svg';
import clsx from 'clsx';

export default function Home() {
  return (
    <>
      <div className='relative'>
        <Image
          src={bg0}
          priority
          fill
          alt=''
          placeholder='blur'
          className='object-cover opacity-65'
        />
        <Hero />
        <div className='h-20'></div>
      </div>

      <div className='relative'>
        <Image
          src={bg1}
          priority
          fill
          alt=''
          placeholder='blur'
          className='object-cover opacity-70'
        />
        <div className='relative'>
          <div className='contain-layout'>
            <Marquee />
          </div>
          <HowToBuy />
          <Tokenomics />
          <footer className='relative mx-5 mt-20 max-w-screen-3xl pb-32 contain-layout max-md:multi-[`[&>img]:w-[400px];[&>img]:opacity-30`] sm:mt-24 md:pb-40 lg:mt-36 3xl:mx-auto max-[500px]:[&_img]:w-[300px]'>
            <Image src={cat1} alt='' className='absolute -left-20 -top-32' />
            <Image
              src={cat1}
              alt=''
              className='absolute -right-20 -top-32 -scale-x-100'
            />
            <h2 className='relative text-center text-4xl text-white sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[75px]'>
              BUY $PICATSO NOW
            </h2>
            <div className='relative mt-10 flex justify-center sm:mt-5'>
              <a
                href={process.env.NEXT_PUBLIC_COIN_URL}
                target='_buy'
                className={clsx(
                  'box-shadow rotate-[-5.5deg] rounded-[25px] border-2 border-white bg-[rgba(125,193,255,0.50)] uppercase text-secondary transition',
                  'px-9 py-6 text-4xl sm:text-5xl',
                  'hover:multi-[text-primary;bg-secondary]'
                )}
              >
                Buy Now
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
