import React, { Fragment } from 'react';

import Achievements from '@/pages/homepage/components/Achievements';
import Community from '@/pages/homepage/components/Community';
import LandingSection from '@/pages/homepage/components/LandingSection';
import Partners from '@/pages/homepage/components/Partners';
import Pros from '@/pages/homepage/components/Pros';

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <LandingSection />
      <Achievements />
      <Community />
      <Pros />
      <Partners />
    </Fragment>
  );
};

export default HomePage;
