const { Chromeless } = require("chromeless");

async function run() {
  const chromeless = new Chromeless();

  const screenshot = await chromeless
    .goto("http://localhost:3000")
    .mousedown('input[name="btnI"]')
    .mouseup('input[name="btnI"]')
    .wait(".latest-doodle")
    .screenshot();

  console.log(screenshot);

  await chromeless.end();
}

run().catch(console.error.bind(console));
