const quiz =[
    {
        question: 'ゲーム史上、最も売れたゲーム機はどれ？',
        answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
        correct: 'ニンテンドーDS'
    },
    {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
        correct: 'MOTHER2'
    },
    {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
        correct: 'セシル'
    }
];

const $button = document.getElementsByTagName('button');
let quizIndex =0;
let score =0;

// 問題文､選択肢を定義
const setUpQuiz = () =>{
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    for (let i = 0; i < quiz[quizIndex].answers.length; i++) {$button[i].textContent = quiz[quizIndex].answers[i]}
};

//正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct===e.target.textContent) {
        window.alert('O');
        score+=1;
    } else {
        window.alert('X');
    }

    quizIndex++;
    if (quizIndex < quiz.length) {
        setUpQuiz(quizIndex);
    } else {
        window.alert(`finish ${score}/${quiz.length}` )
    }
};


//
setUpQuiz(quizIndex)
//クリックしたら正誤判定イベントを呼び出す
for (let i = 0; i < quiz[quizIndex].answers.length; i++) {
    $button[i].addEventListener('click',(e) =>{
        clickHandler(e);
    })
};


