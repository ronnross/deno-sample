import log from "./logger.ts";

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay * 1000));

function startGame(gameData: any) {
  const scenes = gameData;
  return async function changeScene(scene: string) {
    const result = prompt(
      `
    -------------
     ${scenes[scene].message}
     ${scenes[scene].actions
       .map((x: any) => `${x.action}) ${x.message} `)
       .join("")}
    `
    );

    if (result === "exit") {
      log("exiting");
      Deno.exit(1);
    }
    if (result != null) {
      const getDelay = scenes[scene].actions.find(
        (x: any) => x.action === result
      );

      await sleep(getDelay.delay);
      changeScene(result);
    }
  };
}

export default startGame;
