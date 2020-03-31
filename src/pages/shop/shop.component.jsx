import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => { //match location and history are passed as props through route
    console.log(match)
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`}component={CollectionsOverview} />
        <Route path ={`${match.path}/:categoryID`} component={CollectionPage}/>
      </div>
    )
  }
  

export default ShopPage
