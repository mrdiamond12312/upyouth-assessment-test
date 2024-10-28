import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import Section from '@/components/Section';
import { OPTIMAL_SIZES } from '@/constants/image-sizes';
import { getImageByQuality, getSrcSet } from '@/utils/getImage';

interface INewsInfo {
  url: string;
  image: string;
}

const NewsInfo: React.FC<INewsInfo> = ({ url, image }) => {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <LazyLoadImage
        src={image}
        effect="blur"
        className="max-w-[250px] lg:max-w-[500px]"
        srcSet={getSrcSet(OPTIMAL_SIZES, image)}
        placeholderSrc={getImageByQuality({ url: image, quality: 10 })}
      />
    </Link>
  );
};

const News: React.FC = () => {
  const news: INewsInfo[] = [
    {
      url: 'https://vneconomy.vn/upyouth-khoi-dong-techyouth-incubator-2024.htm',
      image: '/VnEconomy.png',
    },
    {
      url: 'https://vnexpress.net/vuon-uom-khoi-nghiep-cong-nghe-cho-sinh-vien-viet-4478515.html',
      image: '/VnExpess.png',
    },
    {
      url: 'https://dantri.com.vn/giao-duc/gia-toc-khoi-nghiep-cho-sinh-vien-ngay-tu-nam-nhat-khat-vong-vuon-tam-quoc-te-20220627174352460.htm',
      image: '/dantri.png',
    },
    {
      url: 'https://vtv4.vtv.vn/video/ban-tin-tieng-viet/-41430.html',
      image: '/vtv.png',
    },
  ];
  return (
    <div className="mx-4 rounded-3xl bg-blue-700 py-4 text-center md:py-8 mt-16">
      <Section
        header="UpYouth is proud to spread entrepreneurial mindset"
        description="Read our stories in Vietnamese news, and stay tuned for our global impacts."
        neutral
      />
      <div className="mx-auto grid w-fit grid-cols-1 gap-8 md:grid-cols-2">
        {news.map((info) => (
          <NewsInfo {...info} key={info.url} />
        ))}
      </div>
    </div>
  );
};

export default News;
