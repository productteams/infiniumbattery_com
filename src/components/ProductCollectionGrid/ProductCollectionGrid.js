import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Marine Batteries'}
        text={'SHOP MARINE'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Energy Storage Systems'}
        text={'SHOP ESS'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Charging Systems'}
        text={'SHOP CHARGERS'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'System Connections'}
        text={'SHOP PARTS'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
