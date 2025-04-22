import React from 'react';
import { Provider } from 'react-redux';
// import { store } from './component/redux-tookit/store';
import CounterRTK from './component/redux-tookit/CounterRTK';
import CounterUseReducer from './component/useReducer/CounterUseReducer';
import "./App.css"
import store from './component/redux (no)/store';
import CounterRedux from './component/redux (no)/CounterRedux';
import CounterApp from './component/counterApp/CounterApp';
import TodoApp from './component/to-doList/TodoApp';
import ThemeToggle from './component/ToggleTheme/ThemeToggle';
import ShoppingCart from './component/gioHang/ShoppingCart';
import Auth from './component/quanLyUser/Auth';

export default function App() {
  return (
    
    // cau 1 useReduce
    // <Provider store={store}>
    //   <CounterRTK />
    // </Provider>

    // cau 2 redux(no)
    // <Provider store={store}>
    //   <CounterRedux />
    // </Provider>

    // cau3 redux-tookit
    // <CounterUseReducer />

    // cau 4 counterApp
    // <CounterApp />

    // cau 5 TodoApp
    // <TodoApp />

    // cau 6 ThemeToggle 
    // <ThemeToggle />

    // cau 7 ShoppingCart 
    // <ShoppingCart />

    // cau 8 QuanlyUser 
    <Auth />

    
  );
}
