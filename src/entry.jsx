import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import thunkMiddleware  from 'redux-thunk'
//引入reducer
import rootReducer from './reducers';
//引入样式文件
import './styles/index.scss';
import {Router , Route , hashHistory} from "react-router";
//引入组件
import HellowW from "./containers/HelloWorldCont";
import MyTable from "./components/myTable";
import MyNav from "./components/myNav"

//存储state
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware ));
// 配置路由

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={MyNav}></Route>
            <Route component={MyNav}>
                <Route path="/table" component={MyTable}></Route>
                <Route path="/hello" component={HellowW}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('bodycontext')
);
