const input = document.getElementById("numberOfWords");

const container = document.querySelector(".container");

const generateWord = (n) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  let text = "";

  for (let i = 0; i < n; ++i) {
    const numGen = (Math.random() * (letters.length - 1)).toFixed(0);
    text += letters[numGen];
  }

  return text;
};

// console.log(generateWord(8));

let numOfWords;
const generatePara = () => {
  numOfWords = Number(input.value);

  const para = document.createElement("p");

  let data = "";

  for (let i = 0; i < numOfWords; ++i) {
    const rndNumber = (Math.random() * 15).toFixed(0);

    data += generateWord(rndNumber);
    data += " ";
  }

  para.innerText = data;
  para.style.textTransform = "capitalize";
  para.style.textAlign = "Justify";
  para.setAttribute("class", "paras");

  container.append(para);
};
