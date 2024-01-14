import * as fs from "fs";
import bfj from "bfj";
import process from "process";

var urlNode = process.cwd();

export async function readFileModel(filename) {
  let resultJson = [];
  try {
    resultJson = await bfj
      .read(`${urlNode}/src/databases/${filename}.json`)
      .then((config) => {
        return config;
      });

    return  ;
  } catch (error) {
    console.log(error);
  }
}

export async function writeFileModel(filename, config) {
  try {
    fs.writeFile(`${urlNode}/src/databases/${filename}.json`, config, (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });
    // file written successfully
    return true;
  } catch (error) {
    console.log(error);
  }
}
