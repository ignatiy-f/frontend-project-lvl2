import { cwd } from 'process';
import toBuildAst from './astBuilder.js';
import toFormatAst from './formatters/index.js';
import customParse from './parser.js';
import path from 'path';


const parseData = (filepath) => {
  const fileData = path.resolve(cwd(), filepath);
  const fileFormat = path.extname(fileData).toLowerCase();
  return customParse(fileData, fileFormat);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const firstObject = parseData(filepath1);
  const secondObject = parseData(filepath2);  
  const data = toBuildAst(firstObject, secondObject);
  return toFormatAst(data, formatName);
};

export default genDiff;

