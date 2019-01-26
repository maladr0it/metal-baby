import * as ACTIONS from "./constants/actionTypes";

export const gameTicked = () => {
  return {
    type: ACTIONS.TICK
  };
};

export const taskAdded = task => {
  return {
    type: ACTIONS.TASK_ADDED,
    task
  };
};

export const gameStarted = () => {
  return {
    type: ACTIONS.GAME_STARTED
  };
};
