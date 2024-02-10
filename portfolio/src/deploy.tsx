import { exec } from "node:child_process";
import { Client } from "node-scp";

import cfg from "./cfg/deploy.json";

const buildReactCommand = "npm run build";

function buildApp() {
  // run the `ls` command using exec
  exec(buildReactCommand, (err: string, output: string) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err);
      return;
    }
    // log the output received from the command
    console.log("Output: \n", output);
    deployStaticWebsite();
  });
}

async function deployStaticWebsite() {
  try {
    const client = await Client({
      host: cfg.host,
      port: cfg.port,
      username: cfg.username,
      password: cfg.password,
    });

    await client.uploadDir(cfg.source, cfg.destination);
    client.close();
  } catch (e) {
    console.log(e);
  }
}

function main() {
  buildApp();
}

main();
