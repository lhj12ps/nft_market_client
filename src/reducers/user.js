const initialState = {
  login:false,
  admin:false
};

const user = (state = initialState, action) => {
  const {payload} = action

  switch(action.type){
    default:
      return state
  }
};

module.exports = { user };