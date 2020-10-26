const TRUE_VALUES = ['true', 'on', 'yes'];
const FALSE_VALUES = ['false', 'off', 'no'];

function parse(src) {
  const result = {};
  const lines = src.toString().split('\n');
  for (const line of lines) {
    const match = line.match(/^([^=:#]+?)[=:](.*)/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/['"]/g, '');
      result[key] = getValue(value);
    }
  }
  return result;
}

function getValue(value) {
  if (value === '') {
    return null;
  } else if (TRUE_VALUES.includes(value.toLowerCase())) {
    return true;
  } else if (FALSE_VALUES.includes(value.toLowerCase())) {
    return false;
  } else if (!isNaN(value)) {
    return +value;
  }
  return value;
}
