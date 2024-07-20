import Image from 'next/image';
import clsx from 'clsx';

import bg from './think.svg';

interface SocialProps extends React.ComponentProps<'div'> {
  image: string;
  href: string;
}

export default function Social({image, href, className}: SocialProps) {
  return (
    <div className={clsx(className, 'relative')}>
      <Image src={bg} priority alt='' />
      <a
        href={href}
        target={href}
        className='absolute left-8 top-[45%] -translate-y-1/2 sm:left-9'
      >
        <img
          src={image}
          alt=''
          className='w-[45px] rotate-[6.7deg] object-contain max-[415px]:w-[35px] sm:w-[55px]'
        />
      </a>
    </div>
  );
}
