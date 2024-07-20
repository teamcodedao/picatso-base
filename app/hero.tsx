import Image from 'next/image';
import clsx from 'clsx';

import Social from './social';

import cat0 from './cat-0.png';

export default function Hero() {
  return (
    <div className='relative'>
      <div className='inset-0 flex justify-between gap-10 pt-10 md:multi-[absolute;pt-10]'>
        <div className='left-0 top-10 md:absolute'>
          <Social
            href={process.env.NEXT_PUBLIC_DEXS_URL}
            image='/dexs.png'
            className=''
          />
        </div>
        <div className='right-5 top-10 md:absolute'>
          <Social
            href={process.env.NEXT_PUBLIC_DEX_URL}
            image='/dex.png'
            className=''
          />
        </div>
      </div>
      <div className='mx-auto max-w-screen-3xl px-5 pb-5 pt-10 3xl:px-10'>
        <h1
          className={clsx(
            'text-center uppercase leading-none text-primary [-webkit-text-stroke:var(--stroke)_white]',
            '[--stroke:4px] 3xl:[--stroke:6px]',
            'text-7xl sm:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[180px] 3xl:text-[230px]',
            'md:mt-40 lg:mt-32 xl:mt-24'
          )}
        >
          PICATSO
        </h1>
        <div className='mt-10 flex items-center xl:mt-0'>
          <Image
            src={cat0}
            quality={100}
            priority
            alt=''
            className='absolute left-1/2 w-[670px] max-w-[min(50%,670px)] shrink-0 -translate-x-1/2 object-contain opacity-40 md:multi-[opacity-100;static;translate-x-0]'
          />
          <article
            className={clsx(
              'relative text-center text-white 2xl:leading-[4.2rem]',
              'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px]'
            )}
          >
            <p>
              Picatso - Modern day Picasso, is a fictional meme coin created
              from random and meaningless doodles.
            </p>
            <p>Picatso exists solely for entertainment and satire.</p>
          </article>
        </div>

        <div className='flex justify-between gap-5'>
          <Social
            href={process.env.NEXT_PUBLIC_TWITTER_URL}
            image='/x.png'
            className=''
          />
          <Social
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
            image='/tele.png'
            className=''
          />
        </div>
      </div>
    </div>
  );
}
