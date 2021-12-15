import { Commands } from "..";
import bucketFillCommand from "./bucketFillCommand";
import createCommand from "./createCommand";
import lineCommand from "./lineCommand";
import quitCommand from "./quitCommand";
import rectCommand from "./rectCommand";

const commands = {
  b: bucketFillCommand,
  c: createCommand,
  l: lineCommand,
  q: quitCommand,
  r: rectCommand,
} as Commands;

export default commands;
