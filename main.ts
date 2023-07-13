import startGame from "./engine.ts";

const scenes = {
  start: {
    message: "you are starting",
    actions: [
      { action: "backwards", message: "run backwards", delay: 1 },
      { action: "forwards", message: "charge forward", delay: 10 },
    ],
  },
  backwards: {
    message: "you are moving backwards",
    actions: [
      { action: "backwards", message: "run backwards", delay: 2 },
      { action: "forwards", message: "charge forward", delay: 5 },
    ],
  },
  forwards: {
    message: "you are moving backwards",
    actions: [
      { action: "backwards", message: "run backwards", delay: 3 },
      { action: "forwards", message: "charge forward", delay: 8 },
    ],
  },
};

const run = startGame(scenes);
run("start");
