```javascript
function getLastItem(arr) {
  return Array.isArray(arr) && arr.length > 0 ? arr[arr.length - 1] : undefined; 
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
    return null; 
  }
}
function multiply(a, b) {
  const result = a * b; 
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
    return []; 
  }
  let doubledArr = arr.map(item => item * 2);
  return doubledArr;
}

```