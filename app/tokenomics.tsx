import Image from 'next/image';

import circleImg from './circle.png';
import clsx from 'clsx';

export default function Tokenomics() {
  return (
    <div className='mx-5 mt-14 max-w-screen-3xl pb-20 sm:mt-24 lg:mt-32 3xl:mx-auto'>
      <h2 className='text-center text-4xl uppercase text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
        PICATSONOMIC
      </h2>
      <div className='mt-10 text-center text-4xl sm:mt-14 sm:text-5xl md:text-5xl lg:text-[64px]'>
        CA:{' '}
        <span className='break-all'>
          {process.env.NEXT_PUBLIC_COIN_ADDRESS}
        </span>
      </div>
      <div
        className={clsx(
          'flex flex-wrap items-center justify-between text-white',
          'gap-x-10 gap-y-28',
          'mt-24',
          '*:multi-[flex;flex-col;items-center;relative]',
          '[&_ing]:multi-[size-[278px];aspect-square]',
          '[&_h3]:multi-[text-5xl;mt-5]',
          '[&_p]:multi-[font-mali;text-[40px];font-light;absolute;-bottom-16]',
          'max-[635px]:multi-[`[&>*]:w-full`]'
        )}
      >
        <article>
          <Image src={circleImg} quality={100} alt='' />
          <h3>Total Supply</h3>
          <p>420,690,000,000</p>
        </article>
        <article>
          <Image src={circleImg} quality={100} alt='' />
          <h3>Liquidity</h3>
          <p>Locked</p>
        </article>
        <article>
          <Image src={circleImg} quality={100} alt='' />
          <h3>Taxes</h3>
          <p>0/0</p>
        </article>
        <article>
          <Image src={circleImg} quality={100} alt='' />
          <h3>Contract</h3>
          <p>Renounced</p>
        </article>
      </div>
    </div>
  );
}
