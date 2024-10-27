import Achievements from '@/pages/homepage/components/Achievements'
import LandingSection from '@/pages/homepage/components/LandingSection'
import React, { Fragment } from 'react'

const HomePage: React.FC = () => {
  return (
    <Fragment>
        <LandingSection />
        <Achievements />
    </Fragment>
  )
}

export default HomePage