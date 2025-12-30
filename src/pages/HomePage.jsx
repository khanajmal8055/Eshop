import React from 'react'
import Hero from '../components/Hero'
import ProductsSection from './ProductsSection'
import CategorySection from './CategorySection'
import FeatureSection from './FeatureSection'
import WhyChosseUs from '../components/WhyChosseUs'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <CategorySection/>
        <FeatureSection/>
        <WhyChosseUs/>
        {/* <ProductsSection /> */}

      </>
  )
}

export default HomePage