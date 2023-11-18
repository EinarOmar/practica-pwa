import * as React from 'react';
import ProductCategories from './ProductCategories';
import ProductSmokingHero from './ProductSmokingHero';

import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';

import withRoot from '../../styles/withRoot';

function Index() {
  return (
    <React.Fragment>
      
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      
    </React.Fragment>
  );
}

export default withRoot(Index);
