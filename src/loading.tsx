import { Flex, Spin } from "antd/lib";
import { LoadingOutlined } from '@ant-design/icons';
import React from "react";

const Loading: React.FC = () => {
  return (
    <Flex className="w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 flex-col gap-2">
      <Flex className = 'flex-row items-end gap-2'>
        <img src="/brand-icon.png" className="w-5 md:w-[30px]"/>
        <img src="/brand-name.png" className="w-[69px] md:w-[100px]"/>
      </Flex>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 200 }} spin />} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </Flex>
  );
};

export default Loading;
