const numberInput = document.getElementById("number");
const result = document.getElementById("Result");
const tryNumber = document.getElementById("tryNumber");
const randomNumHtml = document.getElementById("randomNum");
const btn = document.getElementById("btn");
const randomNum = Math.floor(Math.random() * 100);

let numOfTry = 0;
randomNumHtml.innerHTML = `zamislio sam jedan broj manji od 100 <br> probajte ga pogoditi`;

const reset = () => {
  location.reload();
};

const setInputValue = () => {
  const input = numberInput.value;

  input === ""
    ? (result.innerHTML = "niste unjeli broj ")
    : input > randomNum
    ? ((result.innerHTML = "izabrali ste veci broj"), (numOfTry += 1))
    : input == randomNum
    ? ((result.innerHTML = `bravo!!! broj pokusaja ${numOfTry} <br> <br> <button onClick="reset()" class="btn" >reset</button> `),
      (btn.disabled = true))
    : ((result.innerHTML = "izabrali ste manji broj"), (numOfTry += 1));

  tryNumber.innerHTML = `broj pokusaja : ${numOfTry}`;
};
