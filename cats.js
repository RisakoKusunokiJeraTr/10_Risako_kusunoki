console.log(adjectivesA);

const letters = [
  "あ", "い", "う", "え", "お",
  "か", "き", "く", "け", "こ",
  "さ", "し", "す", "せ", "そ",
  "た", "ち", "つ", "て", "と",
  "な", "に", "ぬ", "ね", "の",
  "は", "ひ", "ふ", "へ", "ほ",
  "ま", "み", "む", "め", "も",
  "や", "ゆ", "よ",
  "ら", "り", "る", "れ", "ろ",
  "わ", "を", "ん"
];
let index = 0;

// 次の文字へ進む
function nextLetter() {
  index++;
  if (index < letters.length) {
    document.getElementById("current-letter").innerText = "現在の文字： " + letters[index];
    // startTimer(); // 成功したら次のタイマー開始
  } else {
    document.getElementById("result").innerText = "全部クリア！ゲーム終了！";
    // endGame();
  }
}

//ゲーム終了アラート　宣言
function endGame() {
  alert("ゲーム終了！");
}

//「マップ」とは、キーと値の対応関係を持つデータ構造。
// JavaScriptでは通常のオブジェクト（または Map）を使って、
// 文字（キー）に対して配列（値）を紐づける。
// これにより、現在のお題の文字から、対応する単語リストを即座に引けるようになる。

const adjectivesMap = {
  "あ": adjectivesA,
  "い": adjectivesI,
  "う": adjectivesU,
  "え": adjectivesE,
  "お": adjectivesO,
  "か": adjectivesKa,
  "き": adjectivesKi,
  "く": adjectivesKu,
  "け": adjectivesKe,
  "こ": adjectivesKo,
  "さ": adjectivesSa,
  "し": adjectivesShi,
  "す": adjectivesSu,
  "せ": adjectivesSe,
  "そ": adjectivesSo
};


//送信ボタン
function sendButton() {
  document.getElementById("submit").addEventListener("click", function () {
    // .value： その要素が <input> や <textarea> の場合、ユーザーが入力した値を取り出す
    const word = document.getElementById("word").value;
    // startsWith メソッドは、文字列が指定された文字列で始まるかどうかを判定し、true/false を返す。検索開始位置を指定することも可。
    if (judgeList()) {
      document.getElementById("result").innerText = "クリア😸！"
      nextLetter();
      document.getElementById("word").value = ""

    } else {
      document.getElementById("result").innerText = "残念！失敗、、、😿"
      endGame(); // 失敗したら終了
      document.getElementById("word").value = ""
    }
  });
}

//あとで送信ボタンのコードに組み込む
//どのリストを参照するか、繰り返し処理


//現在の文字から対応リストを取り出して判定
// textContent：DOM 要素の中の「テキスト部分」をそのまま取得するプロパティ
//　.trim　   ：要素のテキストを取得したときに、余分な空白や改行を取り除いた「きれいな文字列」を得られる

function judgeList() {
  const currentLetterText = document.getElementById("current-letter").innerText;
// 「現在の文字：」を取り除く（全角コロンに注意）
const currentLetter = currentLetterText.replace("現在の文字：", "").trim();

  // 入力値の取得
  const word = document.getElementById("word").value.trim();

  const originalList = adjectivesMap[currentLetter];


  console.log("currentLetter:", currentLetter);
  console.log("word:", word);
  console.log("originalList:", originalList);


  //存在チェックを入れる
  if (originalList && originalList.includes(word)) {
    return true;
  }
  return false;
}

// ページ読み込み後にイベントを登録
sendButton();




// // 最初は送信ボタンを無効化しておく
//   document.getElementById("submit").disabled = true;


//あ　なら　A　のリストを読ませる　と条件付けする
//Aのリストに含まれるかを判定する
//の2段階で組む
