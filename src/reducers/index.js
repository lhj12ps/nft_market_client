//모든 리듀서를 연결해주는 연결다리
const { combineReducers } = require("redux");
const { user } = require("./user");
const { counter } = require("./counter");

const rootReducer = combineReducers({
  user,
  counter,
});

module.exports = rootReducer
