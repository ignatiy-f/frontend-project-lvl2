import path from 'path';
import toBuildAst from './astBuilder.js';
import toFormatAst from '../formatters/index.js';
import parseData from './src/parser.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const firstObject = parseData(filepath1);
  const secondObject = parseData(filepath2);
  const data = toBuildAst(firstObject, secondObject);
  return toFormatAst(data, formatName);
};

export default genDiff;