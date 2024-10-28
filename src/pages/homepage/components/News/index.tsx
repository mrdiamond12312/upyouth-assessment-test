import React from 'react';

import Section from '@/components/Section';

const News: React.FC = () => {
  return (
    <div className="mx-4 rounded-3xl bg-primary-700 py-4 text-center md:py-8">
      <Section
        header="UpYouth is proud to spread entrepreneurial mindset"
        description="Read our stories in Vietnamese news, and stay tuned for our global impacts."
        neutral
      />
    </div>
  );
};

export default News;
