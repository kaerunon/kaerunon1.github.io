const quiz = [
    {
        question: 'Q1. マイクロプラスチックは、どのようにしてうまれる？',
        choices: [
            'プラスチックせいひんが水の流れでけずられて小さくなる',
            'もともと小さくつくられている',
            'プラスチックせいひんがしがいせんでぶんかいされて小さくなる',
            'すべて正かい'
        ],
        correct: 'すべて正かい',
        answer: 'A. ',
        ex: ""
    },
    {
        question: 'Q2. マイクロプラスチックとはどのようなプラスチック？',
        choices: [
            '５ミリメートル以下',
            '５センチメートル以下',
            '１ミリメートル以下',
            '１センチメートル以下'
        ],
        correct: '５ミリメートル以下',
        answer: 'A. すべて正かい',
        ex: "マイクロプラスチックには、工業用や、スクラブ製品のために初めから小さく作られた一次マイクロプラスチックとよばれるものと、海の波でけずられるなどの自然からのえいきょうで小さくなった二次マイクロプラスチックとよばれるものの２種類があります。"
    },
    {
        question: 'Q3. マイクロプラスチックたいさくとして正しいものは？',
        choices: [
            '水とうを使わずにペットボトルを買う',
            'スーパーのふくろをもらって使う',
            'プラスチックせいひんをできるだけ買わないようにする',
            'プラスチックせいひんをできるだけ買うようにする'
        ],
        correct: 'プラスチックせいひんをできるだけ買わないようにする',
        answer: 'A. ５ミリメートル以下',
        ex: "マイクロプラスチックは、５ミリメートル以下のプラスチックとていぎされています。"
    },
    {
        question: 'Q4. マイクロプラスチックの問題としてまちがっているのは？',
        choices: [
            '生たいけいがはかいされる',
            '海がよごれる',
            'かいしゅうがむずかしい',
            '海底にしずまない'
        ],
        correct: '海底にしずまない',
        answer: 'A. プラスチックせいひんをできるだけ買わないようにする',
        ex: "プラスチックのさい利用などのたいさくはされていますが、当然はいきされているプラスチックもたくさんあります。まずはできるだけプラスチックを使わないことが、私たちにできる第一歩です。"
    },
    {
        question: 'Q5. 使いすてプラスチックごみを一番はいしゅつしている国は？',
        choices: [
            '中国',
            '日本',
            'アメリカ',
            'イギリス'
        ],
        correct: '中国',
        answer: 'A. 海底にしずまない',
        ex: "マイクロプラスチックには、海洋生物がえさとまちがえて食べてしまうことでのせいたい系へのえいきょうや危険なぶっしつをきゅうしゅうしてしまう性質があります。また、海底にしずんでしまっていて回収がむずかしいという問題点があります。"
    },
    {
        question: 'Q6. ひとり当たりのプラスチックごみのはいきが一番多い国は？',
        choices: [
            '中国',
            '日本',
            'アメリカ',
            'シンガポール'
        ],
        correct: 'アメリカ',
        answer: 'A. 中国',
        ex: "２０１９年の研究によると使いすてプラスチックのはいき量は中国が最も多く、アメリカが２位でした。２か国で全世界の３分の１を占めています。また、日本は世界で４番目、とてもたくさんのプラスチックがすてられています。"
    },
    {
        question: 'Q7. マイクロプラスチックに関するSDGsの目標は何番？',
        choices: [
            '１',
            '５',
            '９',
            '１４'
        ],
        correct: '１４',
        answer: 'A. アメリカ',
        ex: "ひとり当たりのプラスチックごみのはいきが最も多い国はアメリカです。しかしアメリカに次いで２位は日本であり、ひとりひとりのプラスチック使用料が多いことがわかります。"
    },
    {
        question: 'Q8. 日本で行われているたいさくとしてまちがっているものは？',
        choices: [
            'プラスチックごみのかいしゅう',
            'ポイ捨てぼうし',
            '新しいそざいの研究',
            'プラスチックせいひんのきんし'
        ],
        correct: 'プラスチックせいひんのきんし',
        answer: 'A. １４',
        ex: "SDGsの目標のなかでも、海洋プラスチックをはじめとする海洋おせん問題は、目標１４の「海のゆたかさを守ろう」として大きく取り上げられています。"
    },
    {
        question: 'Q9. マイクロプラスチックのせっしょくが報告されている海洋生物は何種？',
        choices: [
            '２００種以上',
            '５００種以上',
            '８００種以上',
            '１０００種以上'
        ],
        correct: '８００種以上',
        answer: 'A. プラスチックせいひんのきんし',
        ex: "日本国内でもプラスチックさくげんに関するさまざまな取り組みがされていますが、プラスチックせいひんのきんしはされておらず、私たちひとりひとりが節度を持って行動することが求められています。"
    },
    {
        question: 'Q10. マイクロプラスチックは人の身体のどこから発見されている？',
        choices: [
            '口の中',
            'けつえきやしんぞう',
            'ほねやつめ',
            'どこからも発見されていない'
        ],
        correct: 'けつえきやしんぞう',
        answer: 'A. ８００種以上',
        ex: "海鳥、魚、貝、ウミガメなど、８００種以上の海洋生物がプラスチックをせっしょくしていて、物理的なダメージがほうこくされています。マイクロプラスチックは生物にとっていぶつなので、せいたい系へのえいきょうが危険視されています。"
    },
    {
        question: 'クイズしゅうりょう！おつかれさまでした！',
        choices: [
            'また',
            'あそ',
            'んで',
            'ね！'
        ],
        answer: 'A. けつえきやしんぞう',
        ex: "海洋生物だけでなく、私たちの身体からもマイクロプラスチックは発見されています。２０１８年の研究によると、２２人中１７人のけつえき中からマイクロプラスチックがけんしゅつされています。"
    }

]


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    document.getElementById('answer').textContent = quiz[quizIndex].answer;
    document.getElementById('ex').textContent = quiz[quizIndex].ex;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        score++;
    } 

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.location.href = 'fin.html';
        document.getElementById('score') = score;
    }
}





let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

const buttonOpen = document.getElementsByClassName('modalOpen')[0];
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

