import React, { Fragment } from 'react';

import Achievements from '@/pages/homepage/components/Achievements';
import Advisors from '@/pages/homepage/components/Advisors';
import Community from '@/pages/homepage/components/Community';
import LandingSection from '@/pages/homepage/components/LandingSection';
import News from '@/pages/homepage/components/News';
import Partners from '@/pages/homepage/components/Partners';
import Pros from '@/pages/homepage/components/Pros';
import UpYouthians from '@/pages/homepage/components/UpYouthians';

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <LandingSection />
      <Achievements />
      <Community />
      <Pros />
      <Partners />
      <Advisors />
      <UpYouthians />
      <News />
    </Fragment>
  );
};

export default HomePage;
