import { ArrowRight } from '@phosphor-icons/react';
import { Button, Carousel, Flex } from 'antd/lib';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import Section from '@/components/Section';
import { OPTIMAL_SIZES } from '@/constants/image-sizes';
import { getImageByQuality } from '@/utils/getImage';

interface ICommunityInfo {
  title: string;
  description: string;
  url: string;
  images: string[];
  btnText: string;
  index: number;
}

const CommunityInfoCard: React.FC<ICommunityInfo> = ({
  title,
  description,
  url,
  images,
  btnText,
  index,
}) => {
  const cardClassname = classNames(
    'gap-4 text-center flex-col lg:items-center lg:justify-between lg:gap-16 lg:text-left max-w-[100vw] lg:w-full w-min',
    {
      'lg:flex-row-reverse': index % 2 === 0,
      'lg:flex-row': index % 2 !== 0,
    },
  );
  return (
    <Flex className={cardClassname}>
      <Flex className="flex-1 justify-center items-center ">
        <Carousel rootClassName="w-[500px] max-w-[calc(100vw-32px)]" autoplay infinite draggable>
          {images.map((image) => {
            const srcSet = OPTIMAL_SIZES.map(
              (width) => `${getImageByQuality({ url: image, width })} ${width}w`,
            ).join(', ');
            return (
              <div className="px-2">
                <LazyLoadImage
                  src={getImageByQuality({ url: image, quality: 30 })}
                  srcSet={srcSet}
                  placeholderSrc={getImageByQuality({ url: image, quality: 30 })}
                  alt={image}
                  className="rounded-xl object-cover cursor-grab"
                />
              </div>
            );
          })}
        </Carousel>
      </Flex>
      <Flex className="mt-4 flex-col items-center gap-2 md:mt-16 md:gap-4 lg:mt-0 lg:items-start lg:gap-8 flex-1">
        <span className="text-lg leading-8 sm:text-3xl lg:text-2xl font-bold text-blue-700">
          {title}
        </span>
        <p className="text-xs leading-6 sm:text-base">{description}</p>
        <Link to={url}>
          <Button
            icon={<ArrowRight />}
            iconPosition="end"
            className="custom-button-swipe text-body-3-medium rounded-full"
          >
            {btnText}
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

const Community: React.FC = () => {
  const communities = [
    {
      title: 'TechYouth Incubator',
      description:
        'A startup program helping 40+ startups gain over 4500+ users combined and raise money from top VCs like Antler and Iterative, through a package of AWS credits, recruitment support, and close mentorship from 50+ industry leaders and successful founders.',
      url: 'https://docs.google.com/presentation/d/1aT6MXV_LUXPcURcq6Bmm5YOUD2lHDElhQO5wqqd34kw/edit',
      images: [
        '/projects/techyouth/ty1.JPG',
        '/projects/techyouth/ty2.JPG',
        '/projects/techyouth/ty3.JPG',
        '/projects/techyouth/ty4.JPG',
      ],
      btnText: 'Visit TechYouth Incubator',
    },
    {
      title: 'Ecosystem community events',
      description:
        "Exclusive networking events uniting the startup ecosystem's top minds, with 130+ high-level guests from the US, Singapore, and Vietnam (e.g. Antler, Singapore Global Network, etc.) and 200+ young talents from MBB, Momo, Shopee, etc.",
      url: 'https://www.facebook.com/upyouth.org/posts/pfbid0RacN8D7Umgraz6ruijf6HTh62uBPkr1fA1r5gBp83TsBvHCogCZhURMYZst2cvYql?rdid=XXOOCOYFSu0ToKjN',
      images: [
        '/projects/events/TYSD1.jpg',
        '/projects/events/TYSD2.jpg',
        '/projects/events/TYSD3.jpg',
        '/projects/events/TYSD4.jpg',
      ],
      btnText: 'Visit our recap',
    },
    {
      title: 'Build Street',
      description:
        'A community for all builders (scientists, engineers, artists, film makers,...) with weekly 4-hour co-working sessions to bring ideas from 0 to 1 together.',
      url: 'https://www.buildstreet.xyz/',
      images: ['/buildstreet.png'],
      btnText: 'Visit Build Street',
    },

    {
      title: 'HackYouth',
      description:
        'A 2-day hackathon with HackMIT as a technical advisor, offering a 300-million-VND prize for future entrepreneurs to solve real social challenges by Elsa, Timo, VinaCapital Ventures, and more.',
      url: 'https://www.buildstreet.xyz/',
      images: [
        '/projects/hackyouth/HY1.jpg',
        '/projects/hackyouth/HY2.jpg',
        '/projects/hackyouth/HY3.jpg',
        '/projects/hackyouth/HY4.jpg',
      ],
      btnText: 'Visit HackYouth',
    },
  ];

  return (
    <Fragment>
      <Section
        header="Our community nurtures"
        highlight="Young founders from 0 to 1"
        description="Vietnamese youth often get stuck in ideation stage due to critical lack of resources. UpYouth's here to offer the right resources, direction, and connections you need."
      />
      <Flex className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-col gap-16">
        {communities.map((community, index) => (
          <CommunityInfoCard {...community} key={community.title} index={index} />
        ))}
      </Flex>
    </Fragment>
  );
};

export default Community;
