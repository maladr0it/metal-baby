import * as ACTIONS from './constants/actionTypes';
import { EAT, BATHE, PLAY, IDLE } from './constants/activityTypes';
import {
  initialNeeds,
  needsDecay,
  eatEffect,
  batheEffect,
  playEffect,
  idleEffect
} from './gameConfig';

export const initialState = {
  time: 2, // to allow for past events to be seen
  tasks: [IDLE, IDLE, IDLE, EAT, EAT, BATHE, EAT, BATHE, EAT, BATHE],
  needs: initialNeeds
};

const effectMap = {
  [EAT]: eatEffect,
  [BATHE]: batheEffect,
  [PLAY]: playEffect,
  [IDLE]: idleEffect
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TICK: {
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
          acc[need] = value - needsDecay[need] + taskEffect[need];
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
    default:
      return state;
  }
};

export default game;
