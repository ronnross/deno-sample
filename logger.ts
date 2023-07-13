interface ON {
  type: "on";
}

interface OFF {
  type: "off";
}

type logSwitch = ON | OFF;

const log =
  (isActive: logSwitch) =>
  (log: string): void => {
    switch (isActive.type) {
      case "on":
        console.log(`%c>>> ${log}`, "color: rgb(255, 192, 203)");
        break;

      default:
        break;
    }
  };

export default log({ type: "on" });
