import Image from 'next/image';
import clsx from 'clsx';
import BaseMarquee from 'react-fast-marquee';

import cat from './cat-0.png';

export default function Marquee() {
  return (
    <div className='bg-linear -ml-5 -mt-12 w-[105vw] rotate-[3.5deg]'>
      <BaseMarquee autoFill>
        <div
          className={clsx(
            'flex items-center gap-10',
            'mx-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px]',
            'py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7'
          )}
        >
          <Image
            src={cat}
            priority
            alt=''
            className='w-[90px] object-contain sm:w-[150px]'
          />
          <span>PICATSO</span>
        </div>
      </BaseMarquee>
    </div>
  );
}
