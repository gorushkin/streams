import fs from 'fs';
import path from 'path';

const getPath = (dirname, filename) => path.join(dirname, filename);

export const getFileContent = async (name) => {
  const userPath = process.cwd();
  const filePath = getPath(userPath, name);
  try {
    if (fs.existsSync(filePath)) {
      console.log('file exist');
      const data = await fs.promises.readFile(filePath, 'utf-8');
      return data;
    }
  } catch (error) {
    console.log("file doesn't exist");
    return '';
  }
};
