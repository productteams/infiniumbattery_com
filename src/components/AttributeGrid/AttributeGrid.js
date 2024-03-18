import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'we delivery worldwide'}
        subtitle={'Click to learn more'}
      />
      <Attribute
        icon={'cycle'}
        title={'5 YEAR WARRANTY'}
        subtitle={'Increases to 8 years with Certified Installer'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop safely'}
      />
    </div>
  );
};

export default AttributeGrid;
