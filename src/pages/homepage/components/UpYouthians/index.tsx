import React from 'react';

import Section from '@/components/Section';

const UpYouthians: React.FC = () => {
  const locations = [
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
  ];
  return (
    <section className="mt-16">
      <Section
        header="UpYouthians come from ALL"
        description="Our leadership, members, and alumni work in VCs and startups, just like you. We're young, closely connected, and understand young founders."
        highlight="parts of startup ecosystem"
      />
    </section>
  );
};

export default UpYouthians;
