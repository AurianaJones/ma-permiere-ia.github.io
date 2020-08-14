let createMessage = (answer)=> {
    if(answer == "1") {
        return 'ᵒᴥᵒ '
    }
    else if (answer == 2) {
        return 'ʕ•ᴥ•ʔ  '
    }
    else if (answer == 3) {
        return 'ʕᵔᴥᵔʔ '
    }
    else if (answer == 4) {
        return "ʕ •́؈•̀ ₎ "
    }
    else if (answer<=10 && answer>=5) {
        return "ʕ •`ᴥ•´ʔ "
    }
    else{
        return 'ヽ༼ ಠ益ಠ ༽ﾉ '
    }
}
const form = document.getElementById("my-form");
console.log(form);
const message = document.querySelector("#ia-message");
const counter = document.querySelector("#counter");
let count = 0;

form.addEventListener("submit", (event) => {
  //var input = form.querySelector("#user-answer");
  const input = form.querySelector("#user-answer");
  answer = input.value
  message.innerHTML = createMessage(answer);
  count = count += 1
  counter.innerHTML = count;
});