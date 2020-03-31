import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './collections-overview.styles.scss';

import {selectCollections} from '../../redux/shop/shop.selector'
import PreviewCollection from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    { collections.map(({id, ...otherCollectionProps}) => (
    <PreviewCollection key={id} {...otherCollectionProps} />
          ))
          }
  </div>
)

const mapStateToProps= createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)