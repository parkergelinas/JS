function robotFactory1(model, mobile) {
  return {
    model, /// <--- Shorthand
    mobile, /// <--- Shorthand
    beep() {
      console.log("Beep Boop");
    },
  };
}

const newRobot1 = robotFactory("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

function robotFactory2(model, mobile) {
  return {
    model: model, /// <--- Longhand
    mobile: mobile, /// <--- Longhand
    beep() {
      console.log("Beep Boop");
    },
  };
}

const newRobot2 = robotFactory("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);
