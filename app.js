const quiz = [
    {
        question:'世界で最も広い国はどれでしょう？',
        answers : [
          'ロシア',
          'アメリカ',
          'カナダ',
          '中国'
        ],
        correct:'ロシア'
    },{
        question:'「ピサの斜塔」はどの国にありますか？',
        answers : [
          'イタリア',
          'スペイン',
          'フランス',
          'ギリシャ'
        ],
        correct:'イタリア'
    },{
        question:'「モナリザ」として知られる絵画は誰の作品でしょう？',
        answers : [
          'レオナルド・ダ・ヴィンチ',
          'ミケランジェロ',
          'パブロ・ピカソ',
          'クロード・モネ'
        ],
        correct:'レオナルド・ダ・ヴィンチ'
    },{
        question:'日本の首都はどこでしょう？',
        answers : [
          '東京',
          '京都',
          '大阪',
          '名古屋'
        ],
        correct:'東京'
    },{
        question:'「ハリー・ポッター」シリーズの作者は誰でしょう？',
        answers : [
          'J.K.ローリング',
          'スティーヴン・キング',
          'ジョージ・R・R・マーティン',
          'ジョン・グリシャム'
        ],
        correct:'J.K.ローリング'
    },{
        question:'「アポロ11号」は何のために有名なミッションでしょう？',
        answers : [
          '月面着陸',
          '火星探査',
          '地球観測',
          '太陽観測'
        ],
        correct:'月面着陸'
    },{
        question:'「モンナ・リザ」の別名は何でしょう？',
        answers : [
          'ラ・ジョコンダ',
          'セント・ジョージ',
          'ゴッホの耳',
          'シスタイン・チャペル'
        ],
        correct:'ラ・ジョコンダ'
    },{
        question:'「ハリウッド」はどの都市の愛称でしょう？',
        answers : [
          'ロサンゼルス',
          'ニューヨーク',
          'シカゴ',
          'ラスベガス'
        ],
        correct:'ロサンゼルス'
    },{
        question:'「モンテビデオ」はどの国の首都でしょう？',
        answers : [
          'アルゼンチン',
          'ウルグアイ',
          'パラグアイ',
          'チリ'
        ],
        correct:'ウルグアイ'
    },{
        question:'「スターリング・アーチ」はどの国にありますか？',
        answers : [
          'イギリス',
          'フランス',
          'スイス',
          'イタリア'
        ],
        correct:'イギリス'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        //ここに命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
        buttonIndex++;
    }
}
setupQuiz();   //[setupQuiz]＝クイズの問題文や選択肢の書き換えを行なっている命令

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解です！！');
        score++;
    } else {
        window.alert('違います！！')
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！！');
    } 
};

//ボタンをクリックしたら正誤判定
//[handlerIndex]が[buttonLength]よりも低い値の場合、中の命令を繰り返し実行する。その度に[handlerIndex]の値があされていく命令。
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
      clickHandler(e);
    });
    handlerIndex++;
}

