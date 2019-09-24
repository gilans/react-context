import otherReducer from "./otherReducer";
import cargaStaffReducer from "./cargaStaff/reducer";

const actions = {
  ...cargaStaffReducer,
  ...otherReducer,
  default: _ => null
};
const logReducer = (state, actionType, changeState) => {
  console.log(`Action: [${actionType}]`);
  console.log("[previous state]", state);
  console.log("[changed state]", changeState);
};
export default (state, action) => {
  const { type } = action;
  const resp = actions[type] ? actions[type](state) : actions["default"](state);
  logReducer(state, action.type, resp);
  return resp;
};
