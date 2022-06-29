const valueToString = (value) => {
  if (typeof value === 'object' && value !== null) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const plain = (ast) => {
  const iter = (currentValue, path) => {
    if (typeof currentValue !== 'object') {
      return currentValue.toString();
    }

    const lines = currentValue
      .map(({
        key, status, value,
      }) => {
        if (status === 'nested') {
          return iter(value, [...path, key]);
        }
        if (status === 'added') {
          return `Property '${[...path, key].join('.')}' was added with value: ${valueToString(value)}`;
        }

        if (status === 'changed') {
          return `Property '${[...path, key].join('.')}' was updated. From ${valueToString(value[0])} to ${valueToString(value[1])}`;
        }

        if (status === 'deleted') {
          return `Property '${[...path, key].join('.')}' was removed`;
        }

        return null;
      });
    return lines.filter((str) => str).join('\n');
  };

  return iter(ast, []);
};

export default plain;
