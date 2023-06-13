import Image from 'next/image';
import React from 'react';
import IgImg1 from '../public/1.jpeg';
import IgImg2 from '../public/2.jpeg';
import IgImg3 from '../public/3.jpeg';
import IgImg4 from '../public/4.jpeg';
import IgImg5 from '../public/5.jpeg';
import IgImg6 from '../public/6.jpeg';
import IgImg7 from '../public/7.jpeg';
import IgImg8 from '../public/8.jpeg';
import IgImg9 from '../public/9.jpeg';
import IgImg10 from '../public/10.jpeg';

const Photos = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center'>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src={IgImg1}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg2}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg3}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg4}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg5}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src={IgImg7}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg6}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg8}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg9}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={IgImg10}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
       
      </div>
    </div>
  );
};

export default Photos;
