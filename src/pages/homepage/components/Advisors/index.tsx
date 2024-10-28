import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import React, { createRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import Section from '@/components/Section';

interface IAdvisorInfo {
  name: string;
  position: string;
  image: string;
  companyPosition: string;
  company: string;
  linkedIn: string;
}

const AdvisorInfo: React.FC<IAdvisorInfo> = ({
  name,
  company,
  companyPosition,
  image,
  linkedIn,
  position,
}) => {
  return (
    <Link
      to={linkedIn}
      target="_blank"
      className="mx-auto flex flex-col items-center text-center text-white"
    >
      <LazyLoadImage
        src={image}
        alt={name}
        className="mb-2 h-[100px] w-[100px] rounded-full md:h-[200px] md:w-[200px]"
      />
      <div>
        <p className="text-base font-semibold md:text-2xl">{name}</p>
        <p className="mt-1.5 text-xs md:text-base">{position}</p>
        <p className="mt-1.5 text-xs text-white md:text-base">{companyPosition}</p>
        <p className="text-xs text-white md:text-base">{company}</p>
      </div>
    </Link>
  );
};

const Advisors: React.FC = () => {
  const advisors: IAdvisorInfo[] = [
    {
      name: 'Brian Minh Tran',
      position: 'Co-founder',
      image: '/advisor1.png',
      companyPosition: '',
      company: 'Forbes 30U30 Asia',
      linkedIn: 'https://www.linkedin.com/in/dr-cuong-nguyen-huu-miro-24844583/',
    },
    {
      name: 'Nam Doan',
      position: 'Co-founder',
      image: '/advisor4.png',
      companyPosition: 'Accelerator Program Manager',
      company: '@ThinkZone Venture',
      linkedIn: 'https://www.linkedin.com/in/nam-doan-705102158/',
    },
    {
      name: 'Huong Tran',
      position: 'Board Advisor',
      image: '/advisor2.png',
      companyPosition: 'Venture Partner',
      company: "@Monk's Hill Ventures",
      linkedIn: 'https://www.linkedin.com/in/thienhuongtran/',
    },
    {
      name: 'Nguyen Huu Cuong',
      image: '/advisor3.png',
      position: 'Board Advisor',
      companyPosition: 'Global KOL & Partnership Director',
      company: 'Vinfast',
      linkedIn: 'https://www.linkedin.com/in/dr-cuong-nguyen-huu-miro-24844583/',
    },
    {
      name: 'Thao Ha',
      position: 'Board Advisor',
      image: '/advisor5.png',
      companyPosition: 'Venture Partner',
      company: '@Integra Partners',
      linkedIn: 'https://www.linkedin.com/in/thaoha57/',
    },
  ];
  const carouselRef = createRef<CarouselRef>();
  return (
    <section className="bg-blue-700 relative mx-4 overflow-hidden rounded-3xl pb-16 pt-8">
      <Section
        header="Our Advisors"
        description="UpYouth is closely supported by high-level advisors, serial entrepreneurs, and seasoned investors."
        neutral
      />
      <Carousel
        ref={carouselRef}
        slidesToShow={3}
        rootClassName="max-w-7xl mx-auto custom-carousel"
        autoplay
        arrows
        responsive={[
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '200px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {advisors.map((advisor) => (
          <AdvisorInfo {...advisor} key={advisor.linkedIn} />
        ))}
      </Carousel>
    </section>
  );
};

export default Advisors;
