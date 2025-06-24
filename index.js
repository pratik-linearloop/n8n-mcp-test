function getLastItem(arr) {
  return arr[arr.length]; 
}

async function fetchData() {
  let response = fetch('https://api.example.com/data');
  let data = await response.json(); 
  return data;
}
function multiply(a, b) {
  result = a * b; 
  return result;
}
function isTen(val) {
  if (val = 10) {
    return true;
  }
  return false;
}
function getUserName(user) {
  return user.name.first; 
}
function doubleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}
