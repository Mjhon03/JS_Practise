const userName = document.querySelector("#txt_name")
const letterKey = document.querySelector("#userLetter")
const leftWords = document.querySelector("#remainWords")
const textArea = document.querySelector("#txt_area")
const text = document.querySelector("#twitt")
const btn = document.querySelector("#btn_send")



userName.addEventListener('keypress', userkey )

function userkey() {
    let key = userName.value.charAt(0);
    letterKey.textContent = key.toUpperCase();
}

textArea.addEventListener('keypress', cont)

let actualWords = '200';
leftWords.textContent = actualWords;

function cont() {
    let textRemain = textArea.value.length;
    let words = actualWords - textRemain;
    leftWords.textContent = words;
    if (words<='50') {
        leftWords.style.color = "red"
    }
    if(words=='0'){

    }
}
textArea.addEventListener('keyup', positiveCount)

function positiveCount() {
    let textRemain = textArea.value.length;
    let words = actualWords - textRemain;
    let moreWords = words + textRemain;
    if (words>'50') {
        leftWords.style.color = "black"
    }
    leftWords.textContent = words;
}

btn.addEventListener('click', twitt)

function twitt() {
    text.textContent = textArea.value;
}
