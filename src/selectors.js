import { ticksPerYear } from "./gameConfig";

export const getAge = state => Math.floor(state.time / ticksPerYear);

export const getCurrentTask = state => state.tasks[state.time];

// for determining game-over type
export const getZeroNeed = state => {
  const [zeroNeed] = Object.entries(state.needs).find(
    ([, value]) => value <= 0
  );
  return zeroNeed;
};
