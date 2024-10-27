import classNames from 'classnames';
import React from 'react';

import FlushReveal from '@/components/animation/FlushReveal';

export interface ISectionInfo {
  header: string;
  highlight?: string;
  description: string;
  neutral?: boolean;
}

const Section: React.FC<ISectionInfo> = ({ header, description, highlight, neutral }) => {
  const sectionClassname = classNames(
    'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center items-center justify-center',
    {
      'text-white': neutral,
    },
  );
  return (
    <section className={sectionClassname}>
      <h1 className="text-2xl font-bold md:text-6xl">{header}</h1>
      {highlight && (
        <FlushReveal rootClassName="w-full">
          <span className="text-2xl font-bold md:text-6xl bg-blue-700 text-neutral-1 !leading-loose">
            {highlight}
          </span>
        </FlushReveal>
      )}
      <p className="my-4 text-center text-xs md:my-10 md:text-base">{description}</p>
    </section>
  );
};

export default Section;
