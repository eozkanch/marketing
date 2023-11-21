import React from 'react'
import Spacer from '../../../components/common/spacer/spacer'
import './style.scss'
import { PopulerProducts, Slider, TopComponent } from '../../../components'
import { Container, Row } from 'react-bootstrap'
import PopularCard from '../../../components/common/product-card/populer-card/populer-card'

const HomePage = () => {
  return (
 
       <>
      <Slider className="home-page-slider" />
      <PopularCard sectionTitle="Popular Products" />
      <Spacer height={100} />
      <PopulerProducts />
      
    
       
       </>
    
   
  )
}

export default HomePage