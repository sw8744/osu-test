let doc_img = this.document.getElementById("img");
let source = this.document.getElementById("source");
let submit_btn = this.document.getElementById("submit");
let answer_usr = this.document.getElementById("answer");
let answer = '';
const logQ = this.document.getElementById("logQ");
const reload = this.document.getElementById("reload");


function fetch_data() {
    fetch("http://osu-api.kro.kr:5500/get")
        .then((response) => response.json())
        .then((data) => {
            if(logQ.checked) {
                console.log(data);
            }
            doc_img.src = data.img;
            answer = data.answer;
            source.innerHTML = data.source;
        });
}

function submit_answer() {
    let answer_usr_text = answer_usr.value;
    if(answer_usr_text == answer) {
        alert("정답입니다!");
    } else {
        alert("오답입니다!");
    }
}

submit_btn.addEventListener("click", submit_answer);
reload.addEventListener("click", fetch_data);