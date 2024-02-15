import { exec } from "node:child_process";

const cfg = require("./cfg/deploy.json");

const buildReactCommand = "npm run build";
const deployS3BucketCommand = `aws s3 cp ./build ${cfg.s3Bucket} --recursive`;

function execCommand(command: string, callback?: () => any) {
  exec(command, (err, stdout) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stdout);

    if(callback) {
      callback();
    }
  });
}


async function main() {
  execCommand(buildReactCommand, () => execCommand(deployS3BucketCommand));
} 

main();
