import yaml from 'js-yaml';

const customParse = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error('Error: invalid file format');
  }
};

export default customParse;
