  
// ボタン要素を取得
const addButton = document.getElementById('addButton');
const container = document.getElementById('container');
const gchaSelect = document.getElementById('gcha_select');
const findNext = document.getElementById('find_next');
const dtugi = document.getElementById('dense_tugi');
const updtugi = document.getElementById('updense_tugi');
const url = new URL(window.location.href);
function copyButton(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    navigator.clipboard.writeText(element.value)
    .then(() => {
      alert('コピーしました！'); // アラートを表示
    })
    .catch(err => {
      console.error('クリップボードへのコピーに失敗しました:', err);
    });
  } else {
    console.error('指定されたIDの要素が見つかりませんでした:', elementId);
  }
}

const dens_next = [

]
const updens_next = [

]
// キャラクターリストの作成
const g949 = [
  [
    "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
    "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
    "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
    "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
    "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
  ],
  [
    "泉のネコ女神", "戦隊チャッソ", "戦隊ショベリン", "戦隊チョキンドス", "戦隊ウチコンガ",
    "戦隊ドリラ", "ネコフェンシング", "ネコジャンパー", "メタルネコ", "にゃんこ城Mini",
    "ねねこ", "金ネコ", "おかめはちもくネコ", "ボンボンネコ", "見習いスニャイパー",
    "ネコサーファー", "ネコトースター", "ネコスケート", "ネコバーベル", "窓辺の乙女ネコ",
    "ねこ寿司", "ネコバスたぶ", "ネコリンゴ", "ネコスイマー", "オタネコ",
    "ねこタツ", "ネコザイル", "ネコ番長", "ネコぼさつ"
  ],
  [
    "建築兵団スフィンクス", "周遊芸団カルーセルズ", "超竜戦機デス・トロイ", "空中商会コロンブス",
    "温泉天国テルマエ", "観測兵器ガリレオ", "飛空襲撃ボンバーズ", "古代軍船ガレーズ", "帝国陸軍カタパルズ"
  ],
  ["終末兵器ムー"]
];

const g965 = [
    [
        ""
    ],
    [
        ""
    ],
    [
      "マモルガ","幼天女ルーナ", "特命機動アクセル", "花咲かじいさん", "ネコダイナザウルス", "砲龍ガンドロス", "明智光秀", "鉄籠のペガサ", "光翼神イシス", "鉄の精霊カッチン", "建築兵団スフィンクス", "カオルガ", "非命の王フォノウ", "サンダージャック", "いっすん法師", "運命の子フォノ", "光の女神シリウス", "周遊芸団カルーセルズ", "ネコ天狗", "海龍ダライアサン", "悲嘆の踊り子イズ", "氷の精霊フリズ", "服部半蔵", "狩猟娘テルン", "堕天神ルシファー", "踊り子イズ", "白騎士キュクロプス", "舌切りすずめ", "超竜戦機デス・トロイ", "闇の精霊ヤミィ", "オコルガ", "邪龍ヘヴィジャーク", "妖賢女リリン", "天草四郎", "召喚少年サトル", "ネコ王女", "黒獣ガルディアン", "空中商会コロンブス", "幼獣ガル", "石の精霊ゴロー", "地獄警官エマ", "オイルガ", "禍根の魔女キャスリィ", "冥界神ハデス", "マッドシューター・サキ", "厄災の子キャスリィ", "きんたろう", "ラスヴォース", "角龍グラディオス", "英雄令嬢メルシュ", "成田甲斐", "影傑ダークダルターニャ", "時空神クロノス", "ノビルガ", "亡者探偵ヴィグラー", "ネコクエスト", "温泉天国テルマエ", "雷の精霊ボルト", "風隼さくら", "古龍ガングリオン", "幼傑ダルターニャ", "黒無垢のミタマ", "風の精霊エアル", "水の精霊ミズリィ", "火の精霊メララ", "観測兵器ガリレオ", "双掌星のシシル＆コマリ", "今川義元", "黒獣ガオウ", "さるかに合戦", "巫女姫ミタマ", "海王神ポセイドン", "飛空襲撃ボンバーズ", "古代軍船ガレーズ", "帝国陸軍カタパルズ", "閃雷機兵レイ", "猫飯拳パイパイ", "幼獣ガオ", "ネコルガ", "アシルガ", "クビルガ", "テコルガ", "バララガ", "トゲルガ", "ネコアイス", "ネコマシン", "鬼にゃんま", "ネコシュバリエ", "ねこベビー", "ねこナース", "真田幸村", "前田慶次", "織田信長", "伊達政宗", "武田信玄", "上杉謙信", "風神のウィンディ", "雷神のサンディア", "猿帝のクウ", "召し豚のカイ", "宝杖のカッパーマイン", "冥界のカリファ", "地龍ソドム", "聖龍メギドラ", "竜騎士バルス", "神龍かむくら", "竜戦機ライデン", "覇龍ディオラムス", "うらしまタロウ", "ツルの恩返し", "ももたろう", "かさじぞう", "かぐやひめ", "カチカチヤマンズ", "アキラ", "西園寺メカ子", "キャットマンダディ", "ホワイトラビット", "呪術師デスピエロ", "天誅ハヤブサ", "天空神ゼウス", "守護神アヌビス", "美女神アフロディーテ", "太陽神アマテラス", "繁栄神ガネーシャ"
    ],
    [
        ""
    ]
];

const g966 = [
  [
    ""
  ],
  [
    ""
  ],
  [
    "マモルガ ","幼天女ルーナ", "特命機動アクセル", "花咲かじいさん", "ネコダイナザウルス", "砲龍ガンドロス", "明智光秀", "鉄籠のペガサ", "光翼神イシス", "鉄の精霊カッチン", "建築兵団スフィンクス", "カオルガ", "非命の王フォノウ", "サンダージャック", "いっすん法師", "運命の子フォノ", "光の女神シリウス", "周遊芸団カルーセルズ", "ネコ天狗", "海龍ダライアサン", "悲嘆の踊り子イズ", "氷の精霊フリズ", "服部半蔵", "狩猟娘テルン", "堕天神ルシファー", "踊り子イズ", "白騎士キュクロプス", "舌切りすずめ", "超竜戦機デス・トロイ", "闇の精霊ヤミィ", "オコルガ", "邪龍ヘヴィジャーク", "妖賢女リリン", "天草四郎", "召喚少年サトル", "ネコ王女", "黒獣ガルディアン", "空中商会コロンブス", "幼獣ガル", "石の精霊ゴロー", "地獄警官エマ", "オイルガ", "禍根の魔女キャスリィ", "冥界神ハデス", "マッドシューター・サキ", "厄災の子キャスリィ", "きんたろう", "ラスヴォース", "角龍グラディオス", "英雄令嬢メルシュ", "成田甲斐", "影傑ダークダルターニャ", "時空神クロノス", "ノビルガ", "亡者探偵ヴィグラー", "ネコクエスト", "温泉天国テルマエ", "雷の精霊ボルト", "風隼さくら", "古龍ガングリオン", "幼傑ダルターニャ", "黒無垢のミタマ", "風の精霊エアル", "水の精霊ミズリィ", "火の精霊メララ", "観測兵器ガリレオ", "双掌星のシシル＆コマリ", "今川義元", "黒獣ガオウ", "さるかに合戦", "巫女姫ミタマ", "海王神ポセイドン", "飛空襲撃ボンバーズ", "古代軍船ガレーズ", "帝国陸軍カタパルズ", "閃雷機兵レイ", "猫飯拳パイパイ", "幼獣ガオ", "ネコルガ", "アシルガ", "クビルガ", "テコルガ", "バララガ", "トゲルガ", "ネコアイス", "ネコマシン", "鬼にゃんま", "ネコシュバリエ", "ねこベビー", "ねこナース", "真田幸村", "前田慶次", "織田信長", "伊達政宗", "武田信玄", "上杉謙信", "風神のウィンディ", "雷神のサンディア", "猿帝のクウ", "召し豚のカイ", "宝杖のカッパーマイン", "冥界のカリファ", "地龍ソドム", "聖龍メギドラ", "竜騎士バルス", "神龍かむくら", "竜戦機ライデン", "覇龍ディオラムス", "うらしまタロウ", "ツルの恩返し", "ももたろう", "かさじぞう", "かぐやひめ", "カチカチヤマンズ", "アキラ", "西園寺メカ子", "キャットマンダディ", "ホワイトラビット", "呪術師デスピエロ", "天誅ハヤブサ", "天空神ゼウス", "守護神アヌビス", "美女神アフロディーテ", "太陽神アマテラス", "繁栄神ガネーシャ"
  ],
  [
    "宵のイザナミ","暁のイザナギ","ネコ王子","創造神ガイア","超越科学者ヘヴン博士","幻の精霊ルミナ","終末兵器ムー","レジェルガ","ワンダー・モモコ","うしわか丸","天城龍バベル","聖会長ジャンヌダルク","宮本武蔵"
  ]
];

const g963 = [
  [
    "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
    "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
    "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
    "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
    "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
  ],
  [
    "泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
  ],
  [
    "マモルガ", "幼天女ルーナ", "特命機動アクセル", "花咲かじいさん", "ネコダイナザウルス",
    "砲龍ガンドロス", "明智光秀", "鉄籠のペガサ", "光翼神イシス", "鉄の精霊カッチン",
    "建築兵団スフィンクス", "カオルガ", "サンダージャック", "いっすん法師", "運命の子フォノ",
    "周遊芸団カルーセルズ", "ネコ天狗", "海龍ダライアサン", "氷の精霊フリズ", "服部半蔵",
    "狩猟娘テルン", "堕天神ルシファー", "踊り子イズ", "白騎士キュクロプス", "舌切りすずめ",
    "超竜戦機デス・トロイ", "闇の精霊ヤミィ", "オコルガ", "邪龍ヘヴィジャーク", "妖賢女リリン",
    "天草四郎", "召喚少年サトル", "空中商会コロンブス", "幼獣ガル", "石の精霊ゴロー",
    "オイルガ", "冥界神ハデス", "マッドシューター・サキ", "厄災の子キャスリィ", "きんたろう",
    "ラスヴォース", "角龍グラディオス", "英雄令嬢メルシュ", "成田甲斐", "時空神クロノス",
    "ノビルガ", "亡者探偵ヴィグラー", "ネコクエスト", "温泉天国テルマエ", "雷の精霊ボルト",
    "古龍ガングリオン", "幼傑ダルターニャ", "風の精霊エアル", "水の精霊ミズリィ", "火の精霊メララ",
    "観測兵器ガリレオ", "双掌星のシシル＆コマリ", "今川義元", "さるかに合戦", "巫女姫ミタマ",
    "海王神ポセイドン", "飛空襲撃ボンバーズ", "古代軍船ガレーズ", "帝国陸軍カタパルズ", "繁栄神ガネーシャ",
    "太陽神アマテラス", "幼獣ガオ", "ネコルガ", "ネコアイス", "ネコマシン",
    "鬼にゃんま", "ネコシュバリエ", "ねこベビー", "真田幸村", "前田慶次",
    "織田信長", "風神のウィンディ", "雷神のサンディア", "地龍ソドム", "聖龍メギドラ",
    "竜騎士バルス", "神龍かむくら", "竜戦機ライデン", "猿帝のクウ", "召し豚のカイ",
    "宝杖のカッパーマイン", "伊達政宗", "武田信玄", "うらしまタロウ", "ツルの恩返し",
    "ももたろう", "かさじぞう", "かぐやひめ", "ねこナース", "上杉謙信",
    "冥界のカリファ", "アシルガ", "クビルガ", "テコルガ", "バララガ",
    "覇龍ディオラムス", "アキラ", "西園寺メカ子", "キャットマンダディ", "カチカチヤマンズ",
    "ホワイトラビット", "呪術師デスピエロ", "天誅ハヤブサ", "トゲルガ", "天空神ゼウス",
    "守護神アヌビス", "美女神アフロディーテ"
  ],
  [
    "暁のイザナギ"
  ]
];
const g964 = [
  [
    "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
    "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
    "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
    "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
    "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
  ],
  [
      "泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
  ],
  [
    "マモルガ", "特命機動アクセル", "花咲かじいさん", "ネコダイナザウルス", "砲龍ガンドロス",
    "明智光秀", "鉄籠のペガサ", "光翼神イシス", "鉄の精霊カッチン", "建築兵団スフィンクス",
    "カオルガ", "非命の王フォノウ", "サンダージャック", "いっすん法師", "周遊芸団カルーセルズ",
    "ネコ天狗", "海龍ダライアサン", "悲嘆の踊り子イズ", "氷の精霊フリズ", "服部半蔵",
    "狩猟娘テルン", "堕天神ルシファー", "白騎士キュクロプス", "舌切りすずめ", "超竜戦機デス・トロイ",
    "闇の精霊ヤミィ", "オコルガ", "邪龍ヘヴィジャーク", "妖賢女リリン", "天草四郎",
    "召喚少年サトル", "黒獣ガルディアン", "空中商会コロンブス", "石の精霊ゴロー", "オイルガ",
    "禍根の魔女キャスリィ", "冥界神ハデス", "マッドシューター・サキ", "きんたろう", "ラスヴォース",
    "角龍グラディオス", "英雄令嬢メルシュ", "成田甲斐", "影傑ダークダルターニャ", "時空神クロノス",
    "ノビルガ", "亡者探偵ヴィグラー", "ネコクエスト", "温泉天国テルマエ", "雷の精霊ボルト",
    "古龍ガングリオン", "黒無垢のミタマ", "風の精霊エアル", "水の精霊ミズリィ", "火の精霊メララ",
    "観測兵器ガリレオ", "双掌星のシシル＆コマリ", "今川義元", "黒獣ガオウ", "さるかに合戦",
    "海王神ポセイドン", "飛空襲撃ボンバーズ", "古代軍船ガレーズ", "帝国陸軍カタパルズ", "繁栄神ガネーシャ",
    "太陽神アマテラス", "ネコルガ", "ネコアイス", "ネコマシン", "鬼にゃんま",
    "ネコシュバリエ", "ねこベビー", "真田幸村", "前田慶次", "織田信長",
    "風神のウィンディ", "雷神のサンディア", "地龍ソドム", "聖龍メギドラ", "竜騎士バルス",
    "神龍かむくら", "竜戦機ライデン", "猿帝のクウ", "召し豚のカイ", "宝杖のカッパーマイン",
    "伊達政宗", "武田信玄", "うらしまタロウ", "ツルの恩返し", "ももたろう",
    "かさじぞう", "かぐやひめ", "ねこナース", "上杉謙信", "冥界のカリファ",
    "アシルガ", "クビルガ", "テコルガ", "バララガ", "覇龍ディオラムス",
    "アキラ", "西園寺メカ子", "キャットマンダディ", "カチカチヤマンズ", "ホワイトラビット",
    "呪術師デスピエロ", "天誅ハヤブサ", "トゲルガ", "天空神ゼウス", "守護神アヌビス",
    "美女神アフロディーテ"
  ],
  [
    "宵のイザナミ"
  ]
];

class Xorshift32 {
  constructor(seed) {
    this.seed = seed >>> 0; // 符号なし32ビット整数に変換
  }

  random() {
    this.seed ^= this.seed << 13;
    this.seed ^= this.seed >>> 17;
    this.seed ^= this.seed << 15;
    return this.seed >>> 0; // 符号なし32ビット整数として返す
  }
}

for (let i = 0; i < 1000; i++) {
  const newRow = document.createElement('div');
  newRow.classList.add('row');

  const numberBox = document.createElement('div');
  numberBox.classList.add('box', 'number');
  newRow.appendChild(numberBox);
  const charasBox = document.createElement('div');
  charasBox.classList.add('box', 'charas');
  newRow.appendChild(charasBox);

  const numberbBox = document.createElement('div');
  numberbBox.classList.add('box', 'numberb');
  newRow.appendChild(numberbBox);

  const charasRightBox = document.createElement('div');
  charasRightBox.classList.add('box', 'charas-right');
  newRow.appendChild(charasRightBox);


  container.appendChild(newRow);
}


// ボタンがクリックされたときの処理
addButton.addEventListener('click', function() {
  const inputNumber = parseInt(document.getElementById('inputNumber').value);
  const inputString = document.getElementById("gcha_select").value;
  url.searchParams.set("seed",inputNumber);
  url.searchParams.set("select",inputString);
  location.href = url;
  });

document.addEventListener('DOMContentLoaded', function() {
  const selectg = url.searchParams.get("select")
  let seedi = parseInt(url.searchParams.get("seed"));
  if (seedi) {
    document.getElementById("inputNumber").value = seedi;
  } 
  if (selectg) {
    document.getElementById("gcha_select").value = selectg;
  }
  dens_next.splice(0, dens_next.length);
  updens_next.splice(0, updens_next.length);
  const namesa = [];
  const namesb = [];
  const aread = [];
  const bread = [];

  let dens, tyog, grare;
  if (selectg === "949") { //アイアンウォーズ
    dens = 9970;
    tyog = 9470;
    grare = 6970;
    sgacha = g949;
    gachaname = "アイアンウォーズ";
  } else if (selectg === "965"){ //プラチケ
    dens = 10000;
    tyog = 0;
    grare = 0;
    sgacha = g965;
    gachaname = "プラチナガチャ";
  } else if (selectg === "966") { //レジェチケ
    dens = 9500;
    tyog = 0;
    grare = 0;
    sgacha = g966;
    gachaname = "レジェンドガチャ";
  } else if (selectg === "962") { //ルガ族
    dens = 9970;
    tyog = 9470;
    grare = 6970;
    sgacha = g962;
    gachaname = "ネコルガ族";
  }

  function getValue(aaaa) {
    if (aaaa >= dens) {
      return 3;
    } else if (aaaa >= tyog) {
      return 2;
    } else if (aaaa >= grare) {
      return 1;
    } else if (aaaa >= 0){
      return 0; 
    }
  }


  let maenoa = "";
  let kaburia = "";
  const seedchia = [];
  for (let au = 0; au <= 1000; au++) {
    const xorshift = new Xorshift32(seedi);
    const results = [];
    for (let i = 0; i < 2; i++) {
      results.push(xorshift.random());
    } 
    const result1 = results[0] % 10000;
    const result2 = results[1];
    seedi = result2;

    const kabushift = new Xorshift32(result2);
    let namea;

    namea = sgacha[getValue(result1)][result2 % sgacha[getValue(result1)].length];

    if (maenoa === namea && getValue(result1) == 0) {
      const kaburi = sgacha[0].concat();
      kaburi.splice(result2 % sgacha[0].length,1);
      kaburia = kaburi[kabushift.random() % (sgacha[0].length - 1)];
    } else {
      kaburia = "";
    };

    namesa.push(namea + kaburia);
    aread.push(result1);
    seedchia.push(result2);
    maenoa = namea;
  }
  
    const xorshift = new Xorshift32(parseInt(url.searchParams.get("seed")));
    seedi = xorshift.random();

    let kaburib ="";
    let maenob ="";
    const seedchib = [];
    for (let bu = 0; bu <= 1000; bu++) {
      const xorshift = new Xorshift32(seedi);

      const results = [];
      for (let i = 0; i < 2; i++) {
      results.push(xorshift.random());
      }
      
      const result15 = results[0] % 10000;
      const result144 = results[1];
      seedi = results[1];

      const kabushift = new Xorshift32(result144);
      let nameb;

      nameb = g949[getValue(result15)][result144 % g949[getValue(result15)].length];

      if (maenob === nameb && getValue(result15) == 0) {
        const kaburi = sgacha[0].concat();
        kaburi.splice(result144 % sgacha[0].length,1);
        kaburib = kaburi[kabushift.random() % (sgacha[0].length - 1)];
      } else {
        kaburib = "";
      };

      namesb.push(nameb + kaburib);   
      bread.push(result15);
      seedchib.push(result144);
      maenob = nameb;
    }
  
    // 初期表示
    const rows = container.querySelectorAll('.row');
    for (let i = 0; i < 1001; i++) {
      if (i === 0) { // 一番上の行
        rows[i].querySelector('.number').textContent = "A";
        rows[i].querySelector('.numberb').textContent = "B";
        rows[i].querySelector('.charas').textContent = selectg + " " + gachaname;
        rows[i].querySelector('.charas-right').textContent = gachaname;
        rows[i].querySelector('.number').style.backgroundColor = '#00ff00';
        rows[i].querySelector('.numberb').style.backgroundColor = '#00ff00';
        rows[i].querySelector('.charas').style.backgroundColor = '#00ff00';
        rows[i].querySelector('.charas-right').style.backgroundColor = '#00ff00';
      } else { // 2行目以降
        rows[i].querySelector('.charas').textContent = namesa[i - 1];
        rows[i].querySelector('.charas-right').textContent = namesb[i - 1];
        rows[i].querySelector('.number').textContent = i;
        rows[i].querySelector('.numberb').textContent = i;
        rows[i].querySelector('.charas').style.backgroundColor = '#ffffff';
        rows[i].querySelector('.charas-right').style.backgroundColor = '#ffffff';

      //昇格伝説
      if (selectg != "966" && selectg != "965" && 9940 <= aread[i - 1] && aread[i - 1] <= dens) {
        updens_next.push(i + "A")
      }
      if (selectg != "966" && selectg != "965" && 9940 <= bread[i - 1] && bread[i - 1] <= dens) {
        updens_next.push(i + "B")
      }
      //伝説次の表示
      if (selectg != "966" && selectg != "965" && aread[i -1] >= dens) {
        dens_next.push(i + "A")
      }
      if (selectg != "966" && selectg != "965" && bread[i -1] >= dens) {
        dens_next.push(i + "B")
      }

      //通常激レア処理
      if (selectg != "966" && selectg != "965" && aread[i - 1] >= grare) {
        rows[i].querySelector('.charas').style.backgroundColor = '#ffff00';
      }
      if (selectg != "966" && selectg != "965" && bread[i - 1] >= grare) {
        rows[i].querySelector('.charas-right').style.backgroundColor = '#ffff00';
      }
        //通常超激処理(確率違うところだけ先に作って残りはelseで処理する)
      if (selectg != "966" && selectg != "965" && aread[i - 1] >= tyog) {
        rows[i].querySelector('.charas').style.backgroundColor = '#ff0033';
      }
      if (selectg != "966" && selectg != "965" && bread[i - 1] >= tyog) {
        rows[i].querySelector('.charas-right').style.backgroundColor = '#ff0033';
      }

      //昇格超激処理（超極祭）
      if (selectg != "966" && selectg != "965" && aread[i - 1] >= 8970 && aread[i - 1] <= 9500) {
        rows[i].querySelector('.charas').style.backgroundColor = '#ff6633';
      }
      if (selectg != "966" && selectg != "965" && bread[i - 1] >= 8970 && bread[i - 1] <= 9500) {
        rows[i].querySelector('.charas-right').style.backgroundColor = '#ff6633';
      }

      if (namesa[i - 1].includes('フォノ') || namesa[i - 1].includes('ミタマ') || namesa[i - 1].includes('イズ') || namesa[i - 1].includes("ダルターニャ") || namesa[i - 1].includes("ガル") || namesa[i - 1].includes('ガオウ') || namesa[i - 1].includes('キャス') || namesa[i - 1].includes("閃雷機兵") || namesa[i - 1].includes('エマ') || namesa[i - 1].includes('光の女神シリウス') || namesa[i - 1].includes('風隼') || namesa[i - 1].includes('パイパイ')) {
        rows[i].querySelector('.charas').style.backgroundColor = '#00ffff';
        }
        if (namesb[i - 1].includes('フォノ') || namesb[i - 1].includes('ミタマ') || namesb[i - 1].includes('イズ') || namesb[i - 1].includes("ダルターニャ") || namesb[i - 1].includes("ガル") || namesb[i - 1].includes('ガオウ') || namesb[i - 1  ].includes('キャス') || namesb[i - 1].includes("閃雷機兵") || namesb[i - 1].includes('エマ') || namesb[i - 1].includes('光の女神シリウス') || namesb[i - 1].includes('風隼') || namesb[i - 1].includes('パイパイ')) {
        rows[i].querySelector('.charas-right').style.backgroundColor = '#00ffff';
        } 
      
      //昇格伝説処理
      if (selectg != "966" && selectg != "965" && 9940 <= aread[i - 1] && aread[i - 1] <= dens) {
        rows[i].querySelector('.charas').style.backgroundColor = '#6633ff';
      }
      if (selectg != "966" && selectg != "965" && 9940 <= bread[i - 1] && bread[i - 1] <= dens) {
        rows[i].querySelector('.charas-right').style.backgroundColor = '#6633ff';
      }
      //伝説処理
      if (aread[i - 1] >= dens) {
        rows[i].querySelector('.charas').style.backgroundColor = '#9900cc';
      }
      if (bread[i - 1] >= dens) {
        rows[i].querySelector('.charas-right').style.backgroundColor = '#9900cc';
      }
      
    }
    dtugi.textContent = dens_next
    updtugi.textContent = updens_next;
      };sa = [];
      sb = [];
      
      // 初期表示用
      for (let i = 0; i < 1000; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
      
        const numberBox = document.createElement('div');
        numberBox.classList.add('box', 'number');
      
        const charasBox = document.createElement('div');
        charasBox.classList.add('box', 'charas');
        newRow.appendChild(charasBox);
        sa.push(seedchia[i - 1]); // seedchia の値を sa に格納
      
        const numberbBox = document.createElement('div');
        numberbBox.classList.add('box', 'numberb');
        newRow.appendChild(numberbBox);
      
        const charasRightBox = document.createElement('div');
        charasRightBox.classList.add('box', 'charas-right');
        newRow.appendChild(charasRightBox);
        sb.push(seedchib[i - 1]); // seedchib の値を sb に格納
      
        container.appendChild(newRow);
      }
      
      const charasBoxes = document.querySelectorAll('.charas');
      charasBoxes.forEach((box, index) => { // index を追加
        const seedsa = sa[index]; // sa の index 番目の値を取得
        box.addEventListener('click', () => {
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.set('seed', seedsa);
          location.href = newUrl;
        });
      });
      
      const charasRightBoxes = document.querySelectorAll('.charas-right');
      charasRightBoxes.forEach((box, index) => { // index を追加
        const seedsb = sb[index]; // sb の index 番目の値を取得
        box.addEventListener('click', () => {
          const newUrls = new URL(window.location.href);
          newUrls.searchParams.set('seed', seedsb);
          location.href = newUrls;
        });
      });
});