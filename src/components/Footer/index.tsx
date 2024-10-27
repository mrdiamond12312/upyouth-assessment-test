import { path } from '@/constants/path'
import { Button, Flex } from 'antd/lib'
import React from 'react'
import { Link } from 'react-router-dom';
import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

interface ISocialLinkButton {
  icon: React.ReactNode,
  link: string,
}

const Footer: React.FC = () => {
  const socialLinkItems: ISocialLinkButton[] = [
    {icon: <FacebookLogo size={24}/>, link: 'https://www.facebook.com/upyouth.org'},
    {icon: <LinkedinLogo size={24}/>, link: 'https://www.linkedin.com/company/upyouth/'},
    {icon: <EnvelopeSimple size={24}/>, link: 'mailto:info@upyouth.org'},
    {icon: <InstagramLogo size={24}/>, link: 'https://www.instagram.com/_upyouth/#'},
  ]
  return (
    <footer className='w-full border-t border-gray-200 bg-white py-6 text-gray-500 shadow-md'>
      <div className='flex w-full flex-col px-8'>
        <Link className='flex items-end gap-2' to={path.HOMEPAGE}>
          <img src="/brand-icon.png" className="w-5 md:w-[30px]"/>
          <img src="/brand-name.png" className="w-[69px] md:w-[100px]"/>
        </Link>
        <Flex className='pt-8 flex flex-col items-start justify-between md:flex-row md:items-center'>
          <span>© Copyright 2024, All Rights Reserved by UpYouth Social Company</span>
          <Flex className='flex-row gap-2'>
            {socialLinkItems.map(link => <Link to={link.link} target='_blank'>
              <Button type='primary' className='bg-white text-gray-900 shadow-lg rounded-full !p-2.5 w-auto h-auto'>{link.icon}</Button>
            </Link>)}
          </Flex>
        </Flex>
      </div>
    </footer>
  )
}

export default Footer