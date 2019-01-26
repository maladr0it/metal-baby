import ACTIONS from "./constants/actionTypes";

export const initialState = {
  time: 2, // to allow for past events to be seen
  tasks: ["NULL", "NULL", "EAT", "BATHE"],
  needs: {
    hunger: 10,
    hygeine: 10,
    fun: 10
  }
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TICK: {
      return {
        ...state,
        time: state.time + 1
      };
    }
    default:
      return state;
  }
};

export default game;
