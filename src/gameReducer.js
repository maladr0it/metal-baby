import * as ACTIONS from "./constants/actionTypes";
import { EAT, BATHE, PLAY, IDLE } from "./constants/taskTypes";
import {
  initialNeeds,
  needsDecay,
  eatEffect,
  batheEffect,
  playEffect,
  idleEffect,
  maxNeeds
} from "./gameConfig";
import { clamp } from "./utils";

export const initialState = {
  time: 1, // to allow for past events to be seen
  tasks: [IDLE, IDLE],
  needs: initialNeeds,
  playing: false,
  gameOver: false
};

const effectMap = {
  [EAT]: eatEffect,
  [BATHE]: batheEffect,
  [PLAY]: playEffect,
  [IDLE]: idleEffect
};

const checkGameOver = needs =>
  Object.entries(needs).some(([need, value]) => value <= 0);

const game = (state = initialState, action) => {
  console.log(action);

  // TODO: clean this up
  switch (action.type) {
    case ACTIONS.TICK: {
      // check for game over
      if (checkGameOver(state.needs)) {
        return {
          ...state,
          playing: false,
          gameOver: true
        };
      }

      const newTime = state.time + 1;
      let currentTask = state.tasks[newTime];

      let newTasks = [...state.tasks];
      // if no task, add IDLE block
      if (currentTask === undefined) {
        currentTask = IDLE;
        newTasks[newTime] = currentTask;
      }

      const taskEffect = effectMap[currentTask];
      // decay each need, apply the current action from the queue
      const newNeeds = Object.entries(state.needs).reduce(
        (acc, [need, value]) => {
          acc[need] = clamp(
            value - needsDecay[need] + taskEffect[need],
            0,
            maxNeeds[need]
          );
          return acc;
        },
        {}
      );
      return {
        ...state,
        needs: newNeeds,
        tasks: newTasks,
        time: newTime
      };
    }

    case ACTIONS.TASK_ADDED: {
      const { task } = action;
      return {
        ...state,
        tasks: [...state.tasks, task]
      };
    }

    case ACTIONS.GAME_STARTED: {
      return {
        ...initialState,
        playing: true
      };
    }

    default:
      return state;
  }
};

export default game;
