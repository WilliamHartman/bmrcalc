import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducer';

export default createStore(reducer, applyMiddleware());