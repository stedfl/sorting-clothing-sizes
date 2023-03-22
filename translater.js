const conversion = {
  "uk": 0,
  "eu": 26,
  "it": 32,
  "fr": 28,
  "xxs": 4,
  "xs": 7,
  "s": 10,
  "m": 12,
  "l": 14,
  "xl": 16,
  "xxl": 18,
  "xxxl": 20
};

const  unorderedSizes= ["S", "43", "XL", "40", "44", "M", "12", "IT 35", "IT 43", "FR 12", "UK 50", "XXL", "IT 50", "EU 44"];
let invalidItems = [];

document.getElementById("method").innerText += "convertitore";

const unorderedOutput = document.getElementById("unordered");
unorderedSizes.forEach(
  (item) => (unorderedOutput.innerHTML += `<li>${item}</li>`)
);

const orderedOutput = document.getElementById("ordered");
sortingSize(unorderedSizes, conversion).forEach(
  (item) => (orderedOutput.innerHTML += `<li>${item}</li>`)
);

const invalidOutput = document.getElementById('invalid');
if(invalidItems.length) {
  invalidOutput.innerText = "Attenzione, ci sono delle taglie non esistenti: " + invalidItems;
}

function sortingSize(array) {

  const arr = array.slice();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      currentValue = conversionSize(arr[j]);
      nextValue = conversionSize(arr[j + 1]);
      
      if(!isNaN(currentValue) && !isNaN(nextValue)) {
        if (nextValue < currentValue) {

          //Swapping with destructuring sintax
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];

          //Swapping with classic mode
          // const temp = arr[j + 1];
          // arr[j + 1] = arr[j];
          // arr[j] = temp;
        }
      }
    }
  }

  return arr;
}

function conversionSize(string) {

  string = string.replace(/\s+/g, "").toLowerCase();

  if(isNaN(parseInt(string))) {
    if(isNaN(conversion[string])) {
      const country = string.slice(0,2);
      const value = string.slice(2);
      string = value - conversion[country];
    } else {
      string = conversion[string];
    }
  } else {
    string -= conversion["eu"];
  }
  return string;
}