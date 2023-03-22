const sizes = {
  "xxs": 0,
  "2xs": 0.1,
  "xs": 1.0,
  "s": 2.0,
  "m": 3.0,
  "l": 4.0,
  "xl": 5.0,
  "xxl": 6.0,
  "2xl": 6.1,
  "xxxl": 7.0,
  "3xl": 7.1,
  "uk4": 0,
  "uk5": 0.1,
  "uk6": 0.2,
  "uk7": 1.0,
  "uk8": 1.1,
  "uk9": 1.2,
  "uk10": 2.0,
  "uk11": 2.1,
  "uk12": 3.0,
  "uk13": 3.1,
  "uk14": 4.0,
  "uk15": 4.1,
  "uk16": 5.0,
  "uk17": 5.1,
  "uk18": 6.0,
  "uk19": 6.1,
  "uk20": 7.0,
  "uk21": 7.1,
  "fr32": 0,
  "fr33": 0.1,
  "fr34": 0.2,
  "fr35": 1.1,
  "fr36": 1.2,
  "fr37": 1.3,
  "fr38": 2.0,
  "fr39": 2.1,
  "fr40": 3.0,
  "fr41": 3.1,
  "fr42": 4.0,
  "fr43": 4.1,
  "fr44": 5.0,
  "fr45": 5.1,
  "fr46": 6.0,
  "fr47": 6.1,
  "fr48": 7.0,
  "fr49": 7.1,
  "it35": 0,
  "it36": 0.1,
  "it37": 0.2,
  "it38": 0.3,
  "it40": 1.0,
  "it41": 1.1,
  "it42": 2.0,
  "it43": 2.1,
  "it44": 3.0,
  "it45": 3.1,
  "it46": 4.0,
  "it47": 4.1,
  "it48": 5.0,
  "it49": 5.1,
  "it50": 6.0,
  "it51": 6.1,
  "it52": 7.0,
  "it53": 7.1,
  "30": 0,
  "31": 0.1,
  "32": 1.0,
  "33": 1.1,
  "34": 1.2,
  "35": 2.0,
  "36": 2.1,
  "37": 2.2,
  "38": 2.3,
  "39": 3.0,
  "40": 3.1,
  "41": 3.2,
  "42": 3.3,
  "43": 4.4,
  "44": 4.5,
  "45": 4.6,
  "46": 4.7,
  "47": 5.0,
  "48": 5.1,
  "49": 5.2,
  "50": 5.3,
  "51": 6.1,
  "52": 6.2,
  "53": 6.3,
  "54": 6.4,
  "55": 7.0,
  "56": 7.1,
  "57": 7.2,
  "58": 7.3,
};

const unorderedSizes = [
  "S",
  "43",
  "4XL",
  "40",
  "44",
  "M",
  "IT 35",
  "IT 43",
  "FR 42",
  "XXL",
  "IT 11",
];

document.getElementById("method").innerText += " dizionario";

const unorderedOutput = document.getElementById("unordered");
unorderedSizes.forEach(
  (item) => (unorderedOutput.innerHTML += `<li>${item}</li>`)
);

let invalidItems = [];

const orderedOutput = document.getElementById("ordered");
sortingSize(unorderedSizes, sizes).forEach(
  (item) => (orderedOutput.innerHTML += `<li>${item}</li>`)
);

const invalidOutput = document.getElementById('invalid');
if(invalidItems.length) {
  invalidOutput.innerText = "Attenzione, ci sono delle taglie non esistenti: " + invalidItems;
}

function sortingSize(array, sizes) {
  invalidItems = [];
  const arr = array.filter((item) => {
    const valid = !isNaN(sizes[item.replace(/\s+/g, "").toLowerCase()]);
    if (!valid) {
      invalidItems.push(item);
    }
    return valid;
  });


  console.log("Taglie non esistenti: " + invalidItems);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const currentValue = sizes[arr[j].replace(/\s+/g, "").toLowerCase()];
      const nextValue = sizes[arr[j + 1].replace(/\s+/g, "").toLowerCase()];

      if (nextValue < currentValue) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        // const temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
      }
    }
  }
  return arr;
}
