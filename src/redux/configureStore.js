import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './stats';

const rootReducer = combineReducers({
  covidData: reducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
