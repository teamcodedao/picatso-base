import Image from 'next/image';

import Hero from './hero';
import Marquee from './marquee';

import bg0 from './background-0.png';
import bg1 from './background-1.png';

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
        <div className='relative contain-layout'>
          <Marquee />
        </div>
      </div>
    </>
  );
}
