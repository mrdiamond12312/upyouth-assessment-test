import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Button, Flex } from 'antd/lib';
import React from 'react';
import { Link } from 'react-router-dom';

import { path } from '@/constants/path';

interface ISocialLinkButton {
  icon: React.ReactNode;
  link: string;
  aria: string;
}

const Footer: React.FC = () => {
  const socialLinkItems: ISocialLinkButton[] = [
    {
      icon: <FacebookLogo size={24} weight="bold" />,
      link: 'https://www.facebook.com/upyouth.org',
      aria: 'Visit UpYouth Facebook',
    },
    {
      icon: <LinkedinLogo size={24} weight="bold" />,
      link: 'https://www.linkedin.com/company/upyouth/',
      aria: 'Visit UpYouth LinkedIn',
    },
    {
      icon: <EnvelopeSimple size={24} weight="bold" />,
      link: 'mailto:info@upyouth.org',
      aria: 'Email to UpYouth',
    },
    {
      icon: <InstagramLogo size={24} weight="bold" />,
      link: 'https://www.instagram.com/_upyouth/#',
      aria: 'Visit UpYouth Instagram',
    },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 text-gray-500 shadow-md">
      <div className="flex w-full flex-col px-8">
        <Link className="flex items-end gap-2" to={path.HOMEPAGE}>
          <img src="/brand-icon.png" className="w-5 md:w-[30px]" />
          <img src="/brand-name.png" className="w-[69px] md:w-[100px]" />
        </Link>
        <Flex className="pt-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <span>© Copyright 2024, All Rights Reserved by UpYouth Social Company</span>
          <Flex className="flex-row gap-2">
            {socialLinkItems.map((link) => (
              <Link to={link.link} target="_blank" key={link.link}>
                <Button
                  type="primary"
                  className="bg-white text-gray-900 shadow-lg rounded-full !p-2.5 w-auto h-auto custom-button-swipe"
                >
                  <div className="z-10">{link.icon}</div>
                </Button>
              </Link>
            ))}
          </Flex>
        </Flex>
      </div>
    </footer>
  );
};

export default Footer;
