import React from 'react'

import Weather from '@components/Weather'
import MainLayout from '@layout/main'

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Weather />
    </MainLayout>
  )
}

export default Home
