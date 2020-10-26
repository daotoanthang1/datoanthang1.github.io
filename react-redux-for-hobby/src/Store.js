const { createStore } = require("redux");
const { default: rootReducer } = require("./Reducer");

const store = createStore(rootReducer)
export default store;