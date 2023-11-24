const questions = [
    {
        'que': 'which of the following is the markup language',
        'a': 'html',
        'b': 'css',
        'c': 'javascript',
        'd': 'php',
        'correct': 'a'
    },
    {
        'que': "What year was javascript launched ?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "None of the above",
        'correct': "b"
    },
    {
        'que': "what does css stands for ?",
        'a': "hypertext Markup language",
        'b': "Cascading style sheet",
        'c': "jason object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    }
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quebox = document.getElementById("quebox")
const optioninputs = document.querySelectorAll(".options")
const loadquestion = () => {
    if(index===total){
       return endquiz();
    }
    reset();
    const data = questions[index]
    quebox.innerText = `${index + 1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {
    const data = questions[index];
    const ans = getanswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getanswer = () => {
    let answer ;
    optioninputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optioninputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endquiz = () =>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3> Thank you for playing the quiz </h3>
    <h2>${right} / ${total} are correct </h2>
    </div>
    `
}

// inital call
loadquestion();