const SPLASH_DURATION = 5000;
const startTime = Date.now();

export const getSplashShown = () => {
  return Date.now() - startTime > SPLASH_DURATION;
};

export const markSplashDone = () => {};