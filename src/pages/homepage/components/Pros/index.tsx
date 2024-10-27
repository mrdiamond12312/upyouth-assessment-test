import { Col, Flex, Row } from 'antd/lib';
import React from 'react';

const Pros = () => {
  const pros = [
    {
      title: 'Elite network',
      description:
        'UpYouth is backed by 150+ experienced founders, top VCs, C-level executives from Homebase, Genesia Ventures, Base.vn,... to help deliver hands-on support to young technopreneurs.',
    },
    {
      title: 'Like-minded community',
      description:
        'UpYouth puts community at the heart of everything we do, from peer-sharing sessions, offline meetups, to online coding weekends.',
    },
    {
      title: 'Access to talents',
      description:
        'UpYouth grows a strong network of young talents from top firms like Ericsson, McKinsey, and top global universities like NUS, UPenn, all committed to supporting startup growth.',
    },
    {
      title: 'Founder-centric mindset',
      description:
        "At UpYouth, founders back founders. We move fast, fail fast, learn fast like a startup to best understand and solve young founders' biggest painpoints.",
    },
  ];
  return (
    <section className="md:mx-8 p-8 md:p-16 mb-8 bg-blue-700 rounded-3xl mx-4 flex flex-col text-neutral-1 gap-4 md:gap-8 items-center relative overflow-clip my-8 lg: my-16">
      <Flex className="flex-col items-center justify-center gap-2 md:gap-4 max-w-7xl mx-auto text-center">
        <span className="text-2xl md:text-heading-4 font-bold !leading-loose">
          What makes us different?
        </span>
        <p className="text-body-3-regular md:text-body-2-regular">
          We strive to become a go-to startup community by youth, for youth.
        </p>
      </Flex>
      <Row
        gutter={{ xs: 16, md: 16, lg: 32 }}
        className="max-w-7xl mx-auto gap-y-4 lg:gap-y-8 px-4"
      >
        {pros.map((pro) => (
          <Col span={24} md={12}>
            <div className="p-4 bg-white h-full rounded-lg">
              <h1 className="font-text-primary-700 text-xl font-bold md:text-3xl mb-4 text-blue-700">
                {pro.title}
              </h1>
              <p className="text-xs leading-6 md:text-base lg:h-[72px] text-gray-900">
                {pro.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
      <img
        src="/arcs/arc1.png"
        className="absolute -left-[150px] top-[35px] z-10 w-[190px] rotate-[150] lg:-left-[300px] lg:-top-[70px] lg:w-[384px]"
      />
      <img
        src="/arcs/arc1.png"
        className="absolute -right-[150px] bottom-[35px] z-10 w-[190px] rotate-[150] lg:-bottom-[70px] lg:-right-[300px] lg:w-[384px]"
      ></img>
    </section>
  );
};

export default Pros;
