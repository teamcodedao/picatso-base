import Image from 'next/image';

import Hero from './hero';

import bg0 from './background-0.png';

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
          className='object-cover 2xl:object-[0_-180px]'
        />
        <Hero />
      </div>
    </>
  );
}
