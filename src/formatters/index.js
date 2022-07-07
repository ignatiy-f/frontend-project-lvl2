import stylish from './stylish.js';
import plain from './plain.js';
import inJson from './json.js';

const parseData = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return inJson(data);
    default:
      throw new Error(`formatter "${format}" is not defined`);
  }
};

export default parseData;
