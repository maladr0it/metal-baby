// How many seconds per game-tick
// lower is faster :S
export const initialSpeed = 2.5;
export const ticksPerSpeedup = 5;
export const speedUpPercent = 10;
export const maxSpeed = 1;
export const ticksPerYear = 5;

export const maxNeeds = {
  hunger: 100,
  hygiene: 100,
  fun: 100
};

export const initialNeeds = {
  hunger: 80,
  hygiene: 80,
  fun: 80
};

// How much your stats decay each tick
export const needsDecay = {
  hunger: 12,
  hygiene: 10,
  fun: 8
};

// How much random variance effects have on your needs
export const effectVariance = 0.3;

// The effects of each activity
export const eatEffect = {
  hunger: +50,
  hygiene: -20,
  fun: +15
};

export const batheEffect = {
  hunger: 0,
  hygiene: +50,
  fun: -20
};

export const playEffect = {
  hunger: -15,
  hygiene: -15,
  fun: +50
};

export const idleEffect = {
  hunger: 0,
  hygiene: 0,
  fun: 0
};
