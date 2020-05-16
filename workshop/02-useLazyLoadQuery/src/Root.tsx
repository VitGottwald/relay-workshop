import React, { Suspense } from 'react';

import Providers from './Providers';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

const Root = () => {
  /**
   * @TODO
   * Add Suspense to suspend when using useLazyLoadQuery
   * Add ErrorBoundary to catch errors in useLazyLoadQuery
   */

  return (
    <Providers>
      <ErrorBoundary>
        <Suspense fallback='loading'>
          <App />
        </Suspense>
      </ErrorBoundary>
    </Providers>
  );
};

export default Root;
