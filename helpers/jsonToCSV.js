const jsonToCSV = (string) => {
  var file = JSON.parse(string);
  var columns = '';
  for (var keys in file) {
    if (keys !== 'children') {
      columns += keys + ',';
    }
  }
  let lastChar = columns.slice(-1);
  if (lastChar === ',') {
    columns = columns.slice(0, -1);
  }

  var strValues = toString(file);

  var result = columns + '\n' + strValues;

  return result;
};

const toString = (obj) => {
  var result = '';
  for (var keys in obj) {
    if (keys !== 'children') {
      result += obj[keys] + ',';
    }
  }
  let lastChar = result.slice(-1);
  if (lastChar === ',') {
    result = result.slice(0, -1);
  }
  if (obj.children) {
    obj.children.forEach( child => {
      result = result + '\n' + toString(child);
    })
  }
  return result;
}

module.exports = jsonToCSV;