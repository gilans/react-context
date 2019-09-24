import ActionTypes from "../ActionTypes";

const reducers = {
  [ActionTypes.GET_PARAMS]: state => {
    return { parameters: ["gilberto", "suarez", "sofia"] };
  }
};

export default reducers;
