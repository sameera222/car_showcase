'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';



const Hero = () => {
    const handleScroll = () =>{
        const nextSection = document.getElementById("discover");

        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, rent a car — quickly and easily!
            </h1>
            <p className='hero__subtitle'>
                streamline your car rental experince with our effortless booking process.
            </p>

            <CustomButton title='Explore Cars' containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}/>
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                 <Image alt='hero'
                  fill className='object-contain'
                   src='/hero.png'/>
                 
            </div>
            <div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero;
