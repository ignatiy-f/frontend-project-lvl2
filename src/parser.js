import { readFileSync } from 'fs';

const customParse = (data, format) => {
    if (format === '.json') {
      return JSON.parse(readFileSync(data));
    }
  };

  export default customParse;