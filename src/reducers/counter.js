const initialState = {
  number:0,
};

const counter = (state = initialState, action) => {
  const {payload} = action
  console.log(action.type)
  switch(action.type){
    case "UP":
      return{
        ...state,
        number:state.number+1
      }
    case "DOWN":
      return{
        ...state,
        number:state.number-1
      }
    default:
      return state
  }
};

module.exports = { counter };
