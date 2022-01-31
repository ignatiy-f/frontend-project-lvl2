import { readFileSync } from 'fs';
import path from 'path';

const customParse = (data, format) => {
    if (format === '.json') {
      return JSON.parse(readFileSync(data));
    };
  };

const parseData = (filepath) => {
    const fileData = path.resolve(filepath);
    const fileFormat = path.extname(fileData).toLowerCase();
    return customParse(fileData, fileFormat);
  };

  export default parseData;