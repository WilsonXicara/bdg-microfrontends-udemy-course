import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  const browserHistory = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: browserHistory.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = browserHistory.location;
        if (currentPathname !== nextPathname) {
          // To prevent infinite loop
          browserHistory.push(nextPathname);
        }
      },
    });
    browserHistory.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
