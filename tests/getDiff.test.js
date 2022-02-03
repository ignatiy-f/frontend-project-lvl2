import { test, expect } from '@jest/globals';
import genDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { getStylishResult } from '../__fixtures__/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('diffStylishJson', () => {
    const fuxture1Path = getFixturePath('file1.json');
    const fuxture2Path = getFixturePath('file2.json');
    expect(genDiff(fuxture1Path, fuxture2Path)).toEqual(getStylishResult());
  });