import { Col, Flex, Row } from 'antd/lib';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Section from '@/components/Section';

interface ILocationInfo {
  category: string;
  images: string[];
}

const UpYouthiansLife: React.FC<ILocationInfo> = ({ category, images }) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4 rounded-lg border border-gray-300 p-8 lg:grow">
      <span className="text-primary-700 w-max text-3xl font-bold">{category}</span>
      <div className="grid w-max grid-cols-2 place-items-center gap-6 md:grid-cols-3">
        {images.map((image) => (
          <LazyLoadImage src={image} className="h-[48px]" />
        ))}
      </div>
    </div>
  );
};

const UpYouthians: React.FC = () => {
  const locations: ILocationInfo[] = [
    {
      category: 'We live at',
      images: [
        '/countries/live/Vietnam.png',
        '/countries/live/America.png',
        '/countries/live/Australia.png',
        '/countries/live/Korea.png',
        '/countries/live/Netherlands.png',
        '/countries/live/Canada.png',
        '/countries/live/Finland.png',
        '/countries/live/Hungary.png',
        '/countries/live/Czech.png',
      ],
    },
    {
      category: 'We study at',
      images: [
        '/countries/study/Frame 1263.png',
        '/countries/study/Cornell.png',
        '/countries/study/NYU.png',
        '/countries/study/Frame 1264.png',
        '/countries/study/Frame 1265.png',
        '/countries/study/FullBright.png',
        '/countries/study/BUV.png',
        '/countries/study/FTU.png',
      ],
    },
    {
      category: 'We work at',
      images: [
        '/countries/work/McKinsey.png',
        '/countries/work/BCG.png',
        '/countries/work/Frame 1266.png',
        '/countries/work/Masan.png',
        '/countries/work/Starbucks.png',
        '/countries/work/Genesia Ventures.png',
        '/countries/work/Think Zone.png',
        '/countries/work/Ericsson.png',
        '/countries/work/Dentons.png',
        '/countries/work/Nielsen IQ.png',
        '/countries/work/MOMO.png',
        '/countries/work/GIMO.png',
      ],
    },
  ];
  return (
    <section className="mt-16">
      <Section
        header="UpYouthians come from ALL"
        description="Our leadership, members, and alumni work in VCs and startups, just like you. We're young, closely connected, and understand young founders."
        highlight="parts of startup ecosystem"
      />
      <Flex className="mx-auto mt-4 flex w-fit flex-col gap-4 lg:flex-row">
        {locations.map((location) => (
          <UpYouthiansLife {...location} />
        ))}
      </Flex>
    </section>
  );
};

export default UpYouthians;
