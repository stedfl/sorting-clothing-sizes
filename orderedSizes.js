const sizes = [
  "xxs",
  "2xs",
  "28",
  "fr32",
  "it35",
  "uk4",
  "29",
  "fr33",
  "it36",
  "uk5",
  "30",
  "fr33",
  "it37",
  "uk6",
  "31",
  "fr34",
  "it38",
  "xs",
  "32",
  "fr35",
  "uk7",
  "33",
  "fr36",
  "it40",
  "uk8",
  "34",
  "fr37",
  "it41",
  "uk9",
  "s",
  "35",
  "36",
  "37",
  "fr38",
  "it42",
  "uk10",
  "38",
  "fr39",
  "it43",
  "uk11",
  "m",
  "39",
  "40",
  "41",
  "fr40",
  "it44",
  "uk12",
  "42",
  "fr41",
  "it45",
  "uk13",
  "l",
  "43",
  "44",
  "45",
  "fr42",
  "it46",
  "uk14",
  "46",
  "fr43",
  "it47",
  "uk15",
  "xl",
  "47",
  "48",
  "49",
  "fr44",
  "it48",
  "uk16",
  "50",
  "fr45",
  "it49",
  "uk17",
  "xxl",
  "2xl",
  "51",
  "52",
  "53",
  "fr46",
  "it50",
  "uk18",
  "54",
  "fr47",
  "it51",
  "uk19",
  "xxxl",
  "3xl",
  "55",
  "56",
  "57",
  "fr48",
  "it52",
  "uk20",
  "58",
  "fr49",
  "it53",
  "uk21",
];

document.getElementById('method').innerText += ' array comparativo di taglie ordinate';

const unorderedSizes = ['S', '43', 'XL', '40', '44', 'M', 'IT 35', 'IT 43', 'FR 42', 'XXL', 'IT 50', 'FR 11'];
let invalidItems = [];

const unorderedOutput = document.getElementById('unordered');
unorderedSizes.forEach(item => unorderedOutput.innerHTML += `<li>${item}</li>`);

const orderedOutput = document.getElementById('ordered');
sortingSize(unorderedSizes, sizes).forEach(item => orderedOutput.innerHTML += `<li>${item}</li>`);

const invalidOutput = document.getElementById('invalid');
if(invalidItems.length) {
  invalidOutput.innerText = "Attenzione, ci sono delle taglie non esistenti: " + invalidItems;
}

function sortingSize(array, sizes) {

  invalidItems = [];
  const arr = array.filter((item) => {
    const valid = sizes.includes(item.replace(/\s+/g, "").toLowerCase());
    if (!valid) {
      invalidItems.push(item);
    }
    return valid;
  });

  if(invalidItems.length) {
    console.log("Taglie non esistenti: " + invalidItems);
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      const currentElIndex = searchIndex(arr[j], sizes);
      const nextElIndex = searchIndex(arr[j + 1], sizes);

      if(nextElIndex < currentElIndex) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

function searchIndex(element, sizes) {
  return sizes.indexOf(element.replace(/\s+/g, "").toLowerCase());
}


