import React from 'react';

import Section from '@/components/Section';

const Advisors: React.FC = () => {
  return (
    <section className="bg-blue-700 relative mx-4 overflow-hidden rounded-3xl pb-16 pt-8">
      <Section
        header="Our Advisors"
        description="UpYouth is closely supported by high-level advisors, serial entrepreneurs, and seasoned investors."
        neutral
      />
    </section>
  );
};

export default Advisors;
