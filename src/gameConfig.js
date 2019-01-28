// How many ms per game-tick
// lower is faster :S
export const initialSpeed = 2;
export const ticksPerSpeedup = 2;
export const speedUpPercent = 10;
export const maxSpeed = 0.7;
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
  hunger: 10,
  hygiene: 8,
  fun: 6
};

// How much random variance effects have on your needs
export const effectVariance = 0.5;

// The effects of each activity
export const eatEffect = {
  hunger: +30,
  hygiene: -8,
  fun: 0
};

export const batheEffect = {
  hunger: 0,
  hygiene: +30,
  fun: -8
};

export const playEffect = {
  hunger: -8,
  hygiene: 0,
  fun: +30
};

export const idleEffect = {
  hunger: 0,
  hygiene: 0,
  fun: 0
};
