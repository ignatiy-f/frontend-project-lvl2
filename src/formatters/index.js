import stylish from './stylish.js';
import plain from './plain.js';
import makeJson from './json.js';

const toFormatAst = (data, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(data);
    }
    case 'plain': {
      return plain(data);
    }
    case 'json': {
      return makeJson(data);
    }
    default: {
      throw new Error(`formatter "${format}" is not defined`);
    }
  }
};

export default toFormatAst;
