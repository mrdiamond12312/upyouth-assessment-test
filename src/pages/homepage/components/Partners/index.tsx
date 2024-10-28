import { Carousel, Flex } from 'antd/lib';
import React, { Fragment } from 'react';

import Section from '@/components/Section';

const Partners: React.FC = () => {
  const sponsors = [
    [
      '/sponsors/Advertising Vietnam.svg',
      '/sponsors/Ái Việt Ventures.svg',
      '/sponsors/Airtable.svg',
      '/sponsors/Antler.svg',
      '/sponsors/AWS.svg',
      '/sponsors/Brands Vietnam.svg',
      '/sponsors/Builtfirst.svg',
      '/sponsors/Elsa.svg',
      '/sponsors/Genestory.svg',
      '/sponsors/HubSpot.svg',
      '/sponsors/Indochine Counsel.svg',
    ],
    [
      '/sponsors/infina.svg',
      '/sponsors/mixpanel.svg',
      '/sponsors/Notion.svg',
      '/sponsors/pre.dev.svg',
      '/sponsors/Singapore Global Network.svg',
      '/sponsors/Startup Wheel.svg',
      '/sponsors/Stucolab.svg',
      '/sponsors/The Sentry P.svg',
      '/sponsors/Timo Bank.svg',
      '/sponsors/TopCV.svg',
    ],
  ];
  return (
    <Fragment>
      <Section
        header="We partnered with the best"
        highlight="to create the best"
        description="Our elite partners in startup ecosystems help you build real ventures and grow them far beyond."
      />
      <Flex className="flex-col gap-8 mb-8">
        {sponsors.map((sponsorRow, index) => (
          <Carousel
            rootClassName="max-w-7xl w-full mx-auto"
            infinite
            autoplay
            draggable
            slidesToShow={3}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  centerPadding: '120px',
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  centerPadding: '70px',
                },
              },
            ]}
            centerMode
            centerPadding="140px"
            dots={false}
            key={['carousel-sponsor', index].join('-')}
          >
            {sponsorRow.map((sponsor) => (
              <div className="items-center justify-center text-center" key={sponsor}>
                <div className="!flex !h-[60px] rounded-lg border border-gray-300 md:!h-[90px] lg:!h-[140px] !w-fit m-auto">
                  <img
                    src={sponsor}
                    className="mx-6 w-[80px] md:w-[140px] lg:w-[200px]"
                    alt={sponsor}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        ))}
      </Flex>
    </Fragment>
  );
};

export default Partners;
