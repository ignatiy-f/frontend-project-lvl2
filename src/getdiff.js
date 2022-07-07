import { readFileSync } from 'fs';
import path from 'path';
import buildAst from './astBuilder.js';
import render from './formatters/index.js';
import parse from './parser.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fileformat1 = path.extname(filepath1).slice(1);
  const fileformat2 = path.extname(filepath2).slice(1);
  const data1 = parse(readFileSync(path.resolve(filepath1), 'utf8'), fileformat1);
  const data2 = parse(readFileSync(path.resolve(filepath2), 'utf8'), fileformat2);
  const tree = buildAst(data1, data2);
  return render(tree, formatName);
};

export default genDiff;
