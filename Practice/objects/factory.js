const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },

    balls() {
      console.log("Balls");
    },
  };
};

const tinCan = robotFactory("P-500", true);

const rustBox = robotFactory("L-250", true);

tinCan.beep();
tinCan.balls();

rustBox.balls();
