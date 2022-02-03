import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const customParse = (data, format) => {
  if (format === '.json') {
    return JSON.parse(readFileSync(data));
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(readFileSync(data, 'utf8'));
  }
  throw new Error('Error: invalid file format');
};
  export default customParse;