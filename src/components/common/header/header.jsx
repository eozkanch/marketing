import React from 'react'
import TopMenu from './top-menu/top-menu'
import MiddleMenu from './middle-menu/middle-menu'
import BottomMenu from './bottom-menu/bottom-menu'
import Spacer from '../spacer/spacer'

const Header = () => {
  return (
    <div>
        <TopMenu />
        <Spacer height={20} />
        <MiddleMenu />
        <BottomMenu />
    </div>
    

  )
}

export default Header