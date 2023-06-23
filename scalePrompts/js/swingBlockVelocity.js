const getSwingBlockVelocity = (engine, time) => {
  const successCount = engine.getVariable(constant.successCount);
  const gameScore = engine.getVariable(constant.gameScore);
  const { hookSpeed } = engine.getVariable(constant.gameUserOption);
  if (hookSpeed) {
    return hookSpeed(successCount, gameScore);
  }
  let hard;
  switch (true) {
    case successCount < 1:
      hard = 0;
      break;
    case successCount < 10:
      hard = 1;
      break;
    case successCount < 20:
      hard = 0.8;
      break;
    case successCount < 30:
      hard = 0.7;
      break;
    default:
      hard = 0.74;
      break;
  }
  if (engine.getVariable(constant.hardMode)) {
    hard = 1.1;
  }
  return Math.sin(time / (200 / hard));
};
