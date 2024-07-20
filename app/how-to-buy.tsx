import Image from 'next/image';
import clsx from 'clsx';

import cat from './cat-0.png';

export default function HowToBuy() {
  return (
    <div className='mt-20'>
      <div className='flex items-center justify-center sm:gap-x-5'>
        <h2 className='text-heading'>HOW TO BUY</h2>
        <Image src={cat} alt='' className='w-32 object-contain sm:w-40' />
      </div>
      <div
        className={clsx(
          'max-w-screen-3xl rounded-[45px] bg-[rgba(1,44,155,0.80)]',
          '[&_h3]:multi-[text-secondary;uppercase;text-center]',
          '[&_div]:multi-[`text-white;[&_span]:text-secondary;mt-8;flex;gap-x-9;items-baseline`] ',
          '[&_div]:before:multi-[size-2;rounded-full;bg-secondary;shrink-0;aspect-square;-translate-y-1]',
          'sm:[&_div]:before:multi-[size-3;-translate-y-2]',
          'mx-5 mt-5 px-5 py-8 lg:px-10 lg:py-14 xl:px-16 xl:py-20 3xl:mx-auto',
          'space-y-5 sm:space-y-10 xl:space-y-20',
          'text-2xl sm:text-3xl xl:text-4xl'
        )}
      >
        <article>
          <h3>1. ADD BASE TO METAMASK</h3>
          <div>
            <p>
              You can set up the Metamask Wallet by downloading it from your
              phone&apos;s app store or adding the browser extension for desktop
              use.
            </p>
          </div>
        </article>
        <article>
          <h3>2. Bridge ETH network to BASE.</h3>
          <div>
            <p>
              Select the amount of ETH you wish to bridge from the ERC20 network
              to Base. Ensure to retain sufficient funds for covering gas fees.
            </p>
          </div>
        </article>
        <article>
          <h3>3. BUY $PICATSO</h3>
          <div>
            <p>
              You can then go to Uniswap and import the contract address for{' '}
              <span>$PICATSO</span> to exchange your ETH.
            </p>
          </div>
        </article>
        <article>
          <h3>4. ADD TO WALLET</h3>
          <div>
            <p>
              Simply include the <span>$PICATSO</span> contract address in your
              Metamask Wallet to display your <span>$PICATSO</span> tokens.
              welcome!!!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
