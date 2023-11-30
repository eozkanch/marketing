import React from 'react'
import Spacer from '../../../components/common/spacer/spacer'
import './style.scss'
import { PopulerProducts, Slider, SoldesProducts, TopComponent } from '../../../components'
import { Container, Row } from 'react-bootstrap'
import PopularCard from '../../../components/common/product-card/populer-card/populer-card'
import CategoriesPopulers from '../../../components/common/home/categories-populers/categories-populers'

const HomePage = () => {
  return (
 
       <>
      <Slider className="home-page-slider" />
      <TopComponent />
      <Spacer height={100} />
      <PopularCard sectionTitle="Popular Products" />
      <Spacer height={100} />
      <PopulerProducts />
      <Spacer height={10} />
      <SoldesProducts />
      <Spacer height={100} />
      <CategoriesPopulers />
      <Spacer height={100} />
      
    
       
       </>
    
   
  )
}

export default HomePage