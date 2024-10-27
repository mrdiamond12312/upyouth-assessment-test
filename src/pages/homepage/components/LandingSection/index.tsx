import FlushReveal from '@/components/animation/FlushReveal';
import { ArrowRight } from '@phosphor-icons/react';
import { Button, Flex } from 'antd/lib';
import React from 'react';

const LandingSection: React.FC = () => {
  return (
    <Flex className='min-h-[calc(100vh-72px)] mx-8 relative flex-col justify-center gap-8 overflow-hidden'>
      <Flex className='flex-col items-start gap-8 lg:flex-row lg:items-center'>
        <Flex className='flex-col w-full'>
          <h1 className='text-heading-5 md:text-heading-1'>Do like a</h1>
          <FlushReveal>
            <span className='text-heading-5 md:text-heading-1 bg-blue-700 text-neutral-1 px-2 !leading-loose'>Real Founder</span>
          </FlushReveal>
        </Flex>
        <p className="w-full text-lg text-gray-500 md:text-xl"> We are a youth-focused tech startup ecosystem providing the best resources for Vietnamese entrepreneurs to found REAL ventures. </p>
      </Flex>

      <Flex className='flex-row gap-2 justify-center sm:justify-start'>
        <Button type='primary' className='bg-blue-700 hover:bg-blue-900 custom-button-primary text-body-2-medium rounded-full'>Read out Ecosystem Reports</Button>
        <Button icon={<ArrowRight size={24}/>} iconPosition='end' className='custom-button-swipe text-body-2-medium rounded-full'>Discover more</Button>
      </Flex>

      <img src="/arcs/arc1.png" className="absolute -bottom-[105px] right-[70px] z-10 w-[190px] lg:-bottom-[220px] lg:w-[384px]"/>
      <img src="/arcs/arc2.png" className="absolute -bottom-[100px] right-[145px] w-[190px] -rotate-90 lg:-bottom-[220px] lg:right-[200px] lg:w-[384px]"/>
    </Flex>
  )
}

export default LandingSection