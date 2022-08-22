import { Provider } from 'react-redux';
// import { createStore } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "../reducers/index";
// import {composeWithDevTools} from 'redux-devtools-extension'

// 컴포넌트 아님, 저장할수있는 공간만 줌
// const store = createStore(rootReducer,composeWithDevTools()) 
const store = configureStore({ 
  reducer : rootReducer, // 리듀서 들을 정의합니다.
  // middleware: [...middlewares], // 미들웨어를 정의해주도록 합니다.
  // 기본적으로 composeWithDevTools이 적용되어있음
})

const Store = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Store