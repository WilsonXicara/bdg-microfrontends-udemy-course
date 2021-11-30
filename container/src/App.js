import React from 'react';

import { mount as mountMarketingApp } from 'marketing/MarketingApp';

console.log('>>>> container: mountMarketingApp=', mountMarketingApp);

export default () => {
  return (
    <h1>Hi there!</h1>
  );
};
