```javascript
function getLastItem(arr) {
  return arr?.[arr.length - 1]; 
}

async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or throw the error, depending on your error handling strategy
  }
}
function multiply(a, b) {
  let result = a * b; 
  return result;
}
function isTen(val) {
  return val === 10;
}
function getUserName(user) {
  return user?.name?.first; 
}
function doubleArray(arr) {
  if (!Array.isArray(arr)) {
    return []; //or throw an error, depending on your error handling strategy
  }
  let doubledArr = arr.map(item => item * 2);
  return doubledArr;
}

```