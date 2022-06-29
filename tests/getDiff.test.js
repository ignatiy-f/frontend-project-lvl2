import { test, expect } from '@jest/globals';
import genDiff from '../src/getdiff.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { getStylishResult, getPlainResult , getJSformatResult} from '../__fixtures__/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getExpectedPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('diffStylishJson', () => {
    const expectedPath1 = getExpectedPath('file1.json');
    const expectedPath2 = getExpectedPath('file2.json');
    expect(genDiff(expectedPath1, expectedPath2)).toEqual(getStylishResult());
});

test('diffStylishYaml', () => {
    const expectedPath1 = getExpectedPath('file1.yml');
    const expectedPath2 = getExpectedPath('file2.yml');
    expect(genDiff(expectedPath1, expectedPath2)).toEqual(getStylishResult());
});

test('diffPlainJson', () => {
    const expectedPath1 = getExpectedPath('file1.json');
    const expectedPath2 = getExpectedPath('file2.json');
    expect(genDiff(expectedPath1, expectedPath2, 'plain')).toEqual(getPlainResult());
});

test('diffFormatJson', () => {
  const expectedPath1 = getExpectedPath('file1.json');
  const expectedPath2 = getExpectedPath('file2.json');
  expect(genDiff(expectedPath1, expectedPath2, 'json')).toEqual(getJSformatResult());
});

test('toThrow', () => {
  const expectedPath1 = getExpectedPath('file1.json');
  const expectedPath2 = getExpectedPath('file2.pdf');
  expect(() => genDiff(expectedPath1, expectedPath2, 'json')).toThrowError('Error: invalid file format');
});