const byteSize = (str) => {
  return new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
if (str !== null) {
  alert(byteSize(str));	
}
