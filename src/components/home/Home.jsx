import React from 'react'

import NavBar from '../navBar/NavBar'
import Banner from '../Banner/Banner'
import RowPost from '../Row Post/RowPost'
import { originals,actions, romance } from '../../urls';
function Home() {
  return (
    <div>
       <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Actions' isSmall/>
      <RowPost url={romance} title='Romance Movies' isSmall/>
      
    </div>
  )
}

export default Home