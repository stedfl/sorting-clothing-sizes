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

document.getElementById("method").innerText += " convertitore";

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

  let arrayConverted = [];
  invalidItems = [];

  array.forEach(item => {
    sizeConverted = conversionSize(item);
    if(!isNaN(sizeConverted)) {
      const sizeOb = {
        stringSize: item,
        sizeConverted: sizeConverted
      };

      arrayConverted.push(sizeOb);
    } else {
      invalidItems.push(item);
    }
  });

  for (let i = 0; i < arrayConverted.length; i++) {

    for (let j = 0; j < arrayConverted.length - i - 1; j++) {

      currentValue = arrayConverted[j].sizeConverted;
      nextValue = arrayConverted[j + 1].sizeConverted;
      

        if (nextValue < currentValue) {

          //Swapping with destructuring sintax
          [arrayConverted[j + 1], arrayConverted[j]] = [arrayConverted[j], arrayConverted[j + 1]];

          //Swapping with classic mode
          // const temp = arr[j + 1];
          // arr[j + 1] = arr[j];
          // arr[j] = temp;
        }
    }
  }
  
  return  arrayConverted.map(item => item.stringSize);
}

function conversionSize(sizeString) {

  sizeString = sizeString.replace(/\s+/g, "").toLowerCase();

  let sizeConverted = NaN;

  if(isNaN(parseInt(sizeString))) {

    if(isNaN(conversion[sizeString])) {
      const country = sizeString.slice(0,2);
      const value = parseInt(sizeString.slice(2));

      if(!isNaN(conversion[country])) {
        sizeConverted = value - conversion[country];
      }
      
    } else {
      sizeConverted = conversion[sizeString];
    }
  } else {
    sizeConverted = parseInt(sizeString) - conversion["eu"];
  }
  return sizeConverted;
}
