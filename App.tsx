import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigator from './src/main_navigator';
import {store, persistor} from './src/store';
import {CustomRoot} from './src/utils';

const loading = null;

export default () => {
  return (
    <Provider {...{store}}>
      <PersistGate {...{persistor, loading}}>
        <CustomRoot>
          <MainNavigator />
        </CustomRoot>
      </PersistGate>
    </Provider>
  );
};
