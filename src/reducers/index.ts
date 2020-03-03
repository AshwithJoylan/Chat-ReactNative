import {persistCombineReducers, PersistConfig} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {getHomeData} from './home';

const config: PersistConfig<unknown, any, any, any> = {
  storage: AsyncStorage,
  key: 'root',
};

export default persistCombineReducers(config, {
  getHomeData,
});
