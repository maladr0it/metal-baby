// How many ms per game-tick
export const tickPeriod = 1;

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
  hygiene: 5,
  fun: 4
};

// The effects of each activity
export const eatEffect = {
  hunger: +20,
  hygiene: -15,
  fun: 0
};

export const batheEffect = {
  hunger: 0,
  hygiene: +10,
  fun: -10
};

export const playEffect = {
  hunger: 0,
  hygiene: -20,
  fun: +30
};

export const idleEffect = {
  hunger: 0,
  hygiene: 0,
  fun: 0
};
