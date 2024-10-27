import { Flex } from 'antd/lib';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

interface IAchievement {
  statistic: string;
  category: string;
  isCurrentStatistic?: boolean;
}

const Statistic: React.FC<IAchievement> = ({ statistic, category, isCurrentStatistic }) => {
  const textClassname = classNames(
    'flex-col items-center justify-center transition-all duration-500 ease-in-out relative',
    {
      'text-blue-600': !isCurrentStatistic,
    },
  );

  const dropLightClassname = classNames(
    'absolute top-[145px] h-[106px] w-[106px] transform rounded-full bg-white blur-lg backdrop-blur-[64px] transition-all duration-700 ease-in-out hidden lg:block',
    {
      'opacity-0': !isCurrentStatistic,
    },
  );
  return (
    <Flex className={textClassname}>
      <span className="text-heading-5 md:text-heading-3">{statistic}</span>
      <p className="text-center text-body-3-regular md:text-body-1-regular">{category}</p>
      <div className={dropLightClassname} />
    </Flex>
  );
};
const Achievements = () => {
  const achievements = [
    {
      statistic: '150+',
      category: 'Ecosystem partners',
    },
    {
      statistic: '$4.5M+',
      category: 'Raised combined',
    },
    {
      statistic: '40+',
      category: 'Startups supported',
    },
    {
      statistic: '4,000+',
      category: 'Community members',
    },
  ];

  const [currentStatistic, setCurrentStatistic] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      setCurrentStatistic((prev) => (prev + 1) % achievements.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="md:mx-8 pt-8 mb-8 bg-blue-700 rounded-3xl mx-4 flex flex-col text-neutral-1 gap-4 md:gap-8">
      <Flex className="flex-col items-center justify-center gap-2 md:gap-4 max-w-7xl mx-auto text-center">
        <span className="text-2xl md:text-heading-4 font-bold !leading-loose">
          Our numbers speak
        </span>
        <p className="text-body-3-regular md:text-body-2-regular">
          UpYouth empowers can-do youth to create real impacts, and we also do the same.
        </p>
      </Flex>
      <Flex className="mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl md:max-w-md max-w-xs flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl pb-8 lg:flex-row lg:gap-0 lg:pb-16 w-full">
        {achievements.map((achievement) => (
          <Statistic
            {...achievement}
            isCurrentStatistic={achievement.category === achievements[currentStatistic].category}
          />
        ))}
      </Flex>
    </section>
  );
};

export default Achievements;
