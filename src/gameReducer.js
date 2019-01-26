import * as ACTIONS from './constants/actionTypes';
import { initialNeeds, needsDecay } from './gameConfig';

export const initialState = {
  time: 2, // to allow for past events to be seen
  tasks: [
    'NULL',
    'NULL',
    'EAT',
    'BATHE',
    'EAT',
    'BATHE',
    'EAT',
    'BATHE',
    'EAT',
    'BATHE'
  ],
  needs: initialNeeds
};

const game = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ACTIONS.TICK: {
      // decay each need
      // let newNeeds = { ...state.needs };
      const newNeeds = Object.entries(needsDecay).reduce(
        (acc, [need, value]) => {
          acc[need] -= value;
          return acc;
        },
        { ...state.needs }
      );
      console.log(newNeeds);

      return {
        ...state,
        needs: newNeeds,
        time: state.time + 1
      };
    }
    default:
      return state;
  }
};

export default game;
