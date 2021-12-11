import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  const browserHistory = useHistory();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = browserHistory.location;
        if (currentPathname !== nextPathname) {
          // To prevent infinite loop
          browserHistory.push(nextPathname);
        }
      },
    });
  }, []);

  return <div ref={ref} />;
};
