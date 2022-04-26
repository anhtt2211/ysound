import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './slices/userSlice';
import playListReducer from './slices/play-list.slice';
import rootSaga from './rootSaga';

const rootReducers = combineReducers({
  users: userReducer,
  playLists: playListReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
