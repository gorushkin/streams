import prompt from 'prompt';
import fs from 'fs';
import { getFileContent } from './utils.js';
import { pipeline } from 'stream';

export const info = async (args) => {
  const name = args.n || 'test.txt';
  console.log('name: ', name);

  const outputStream = process.stdout;
  const inputStream = process.stdin;

  // const fileContent = await getFileContent(name);
  // const fileStream = fs.createReadStream(name);
  const fileStream2 = fs.createWriteStream(name);

  // fileStream.pipe(process.stdout);

  inputStream.pipe(fileStream2)


  // prompt.start();

  // prompt.get(['text'], async (err, result) => {
  //   console.log('  text: ' + result.username);
  //   const fileContent = await getFileContent(name);
  //   console.log('fileContent: ', fileContent);
  //   const file = fs.createWriteStream(name);
  //   file.end(fileContent + '\n' + result.text);
  // });
};
