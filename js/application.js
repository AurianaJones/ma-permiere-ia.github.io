messages = ['ᵒᴥᵒ ','ʕ•ᴥ•ʔ  ','ʕᵔᴥᵔʔ ',"ʕ •́؈•̀ ₎ ","ʕ •`ᴥ•´ʔ ",'ヽ༼ ಠ益ಠ ༽ﾉ ']
const createMessage = (answer)=> {
    let message="";
    if(answer == "1") {
        message = messages[0]
    }
    else if (answer == 2) {
        message = messages[1]
    }
    else if (answer == 3) {
        message = messages[2]
    }
    else if (answer == 4) {
        message = messages[3]
    }
    else if (answer<=10 && answer>=5) {
        message = messages[4]
    }
    else{
        message = messages[5]
    }
    return message
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