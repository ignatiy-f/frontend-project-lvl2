import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/getdiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const formats = [
  ['json', 'plain'],
  ['json', 'stylish'],
  ['yml', 'stylish'],
  ['json', 'json'],
];

const getExpectedPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getExpectedPath(filename), 'utf-8');

test.each(formats)('Compare files', (extension, format) => {
  const expected = readFile(`result-${format}.txt`);
  const path1 = getExpectedPath(`file1.${extension}`);
  const path2 = getExpectedPath(`file2.${extension}`);
  const actual = genDiff(path1, path2, format);
  expect(actual).toEqual(expected);
});

test('toThrow', () => {
  const path1 = getExpectedPath('file1.json');
  const path2 = getExpectedPath('file2.pdf');
  expect(() => genDiff(path1, path2, 'json')).toThrowError();
});
