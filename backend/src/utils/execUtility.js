import util from "node:util";
import child_process, { exec } from "node:child_process";

//the exec function takes callback the util module helps to convert callback into promise
//exec function help to run any terminal cmd
export const execPromisified = util.promisify(child_process.exec);
