  	// キャラクターリスト
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
            "マモルガ", "幼天女ルーナ", "特命機動アクセル", "花咲かじいさん", "ネコダイナザウルス", "砲龍ガンドロス", "明智光秀",
            "鉄籠のペガサ", "光翼神イシス", "鉄の精霊カッチン", "建築兵団スフィンクス", "カオルガ", "非命の王フォノウ",
            "サンダージャック", "いっすん法師", "運命の子フォノ", "光の女神シリウス", "周遊芸団カルーセルズ", "ネコ天狗",
            "海龍ダライアサン", "悲嘆の踊り子イズ", "氷の精霊フリズ", "服部半蔵", "狩猟娘テルン", "堕天神ルシファー", "踊り子イズ",
            "白騎士キュクロプス", "舌切りすずめ", "超竜戦機デス・トロイ", "闇の精霊ヤミィ", "オコルガ", "邪龍ヘヴィジャーク",
            "妖賢女リリン", "天草四郎", "召喚少年サトル", "ネコ王女", "黒獣ガルディアン", "空中商会コロンブス", "幼獣ガル",
            "石の精霊ゴロー", "地獄警官エマ", "オイルガ", "禍根の魔女キャスリィ", "冥界神ハデス", "マッドシューター・サキ",
            "厄災の子キャスリィ", "きんたろう", "ラスヴォース", "角龍グラディオス", "英雄令嬢メルシュ", "成田甲斐",
            "影傑ダークダルターニャ", "時空神クロノス", "ノビルガ", "亡者探偵ヴィグラー", "ネコクエスト", "温泉天国テルマエ",
            "雷の精霊ボルト", "風隼さくら", "古龍ガングリオン", "幼傑ダルターニャ", "黒無垢のミタマ", "風の精霊エアル",
            "水の精霊ミズリィ", "火の精霊メララ", "観測兵器ガリレオ", "双掌星のシシル＆コマリ", "今川義元", "黒獣ガオウ",
            "さるかに合戦", "巫女姫ミタマ", "海王神ポセイドン", "飛空襲撃ボンバーズ", "古代軍船ガレーズ", "帝国陸軍カタパルズ",
            "閃雷機兵レイ", "猫飯拳パイパイ", "幼獣ガオ", "ネコルガ", "アシルガ", "クビルガ", "テコルガ", "バララガ",
            "トゲルガ", "ネコアイス", "ネコマシン", "鬼にゃんま", "ネコシュバリエ", "ねこベビー", "ねこナース", "真田幸村",
            "前田慶次", "織田信長", "伊達政宗", "武田信玄", "上杉謙信", "風神のウィンディ", "雷神のサンディア", "猿帝のクウ",
            "召し豚のカイ", "宝杖のカッパーマイン", "冥界のカリファ", "地龍ソドム", "聖龍メギドラ", "竜騎士バルス", "神龍かむくら",
            "竜戦機ライデン", "覇龍ディオラムス", "うらしまタロウ", "ツルの恩返し", "ももたろう", "かさじぞう", "かぐやひめ",
            "カチカチヤマンズ", "アキラ", "西園寺メカ子", "キャットマンダディ", "ホワイトラビット", "呪術師デスピエロ", "天誅ハヤブサ",
            "天空神ゼウス", "守護神アヌビス", "美女神アフロディーテ", "太陽神アマテラス", "繁栄神ガネーシャ"
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
            "マモルガ ", "幼天女ルーナ", "特命機動アクセル", "花咲かじいさん", "ネコダイナザウルス", "砲龍ガンドロス", "明智光秀",
            "鉄籠のペガサ", "光翼神イシス", "鉄の精霊カッチン", "建築兵団スフィンクス", "カオルガ", "非命の王フォノウ",
            "サンダージャック", "いっすん法師", "運命の子フォノ", "光の女神シリウス", "周遊芸団カルーセルズ", "ネコ天狗",
            "海龍ダライアサン", "悲嘆の踊り子イズ", "氷の精霊フリズ", "服部半蔵", "狩猟娘テルン", "堕天神ルシファー", "踊り子イズ",
            "白騎士キュクロプス", "舌切りすずめ", "超竜戦機デス・トロイ", "闇の精霊ヤミィ", "オコルガ", "邪龍ヘヴィジャーク",
            "妖賢女リリン", "天草四郎", "召喚少年サトル", "ネコ王女", "黒獣ガルディアン", "空中商会コロンブス", "幼獣ガル",
            "石の精霊ゴロー", "地獄警官エマ", "オイルガ", "禍根の魔女キャスリィ", "冥界神ハデス", "マッドシューター・サキ",
            "厄災の子キャスリィ", "きんたろう", "ラスヴォース", "角龍グラディオス", "英雄令嬢メルシュ", "成田甲斐",
            "影傑ダークダルターニャ", "時空神クロノス", "ノビルガ", "亡者探偵ヴィグラー", "ネコクエスト", "温泉天国テルマエ",
            "雷の精霊ボルト", "風隼さくら", "古龍ガングリオン", "幼傑ダルターニャ", "黒無垢のミタマ", "風の精霊エアル",
            "水の精霊ミズリィ", "火の精霊メララ", "観測兵器ガリレオ", "双掌星のシシル＆コマリ", "今川義元", "黒獣ガオウ",
            "さるかに合戦", "巫女姫ミタマ", "海王神ポセイドン", "飛空襲撃ボンバーズ", "古代軍船ガレーズ", "帝国陸軍カタパルズ",
            "閃雷機兵レイ", "猫飯拳パイパイ", "幼獣ガオ", "ネコルガ", "アシルガ", "クビルガ", "テコルガ", "バララガ",
            "トゲルガ", "ネコアイス", "ネコマシン", "鬼にゃんま", "ネコシュバリエ", "ねこベビー", "ねこナース", "真田幸村",
            "前田慶次", "織田信長", "伊達政宗", "武田信玄", "上杉謙信", "風神のウィンディ", "雷神のサンディア", "猿帝のクウ",
            "召し豚のカイ", "宝杖のカッパーマイン", "冥界のカリファ", "地龍ソドム", "聖龍メギドラ", "竜騎士バルス", "神龍かむくら",
            "竜戦機ライデン", "覇龍ディオラムス", "うらしまタロウ", "ツルの恩返し", "ももたろう", "かさじぞう", "かぐやひめ",
            "カチカチヤマンズ", "アキラ", "西園寺メカ子", "キャットマンダディ", "ホワイトラビット", "呪術師デスピエロ", "天誅ハヤブサ",
            "天空神ゼウス", "守護神アヌビス", "美女神アフロディーテ", "太陽神アマテラス", "繁栄神ガネーシャ"
        ],
        [
            "宵のイザナミ", "暁のイザナギ", "ネコ王子", "創造神ガイア", "超越科学者ヘヴン博士", "幻の精霊ルミナ", "終末兵器ムー",
            "レジェルガ", "ワンダー・モモコ", "うしわか丸", "天城龍バベル", "聖会長ジャンヌダルク", "宮本武蔵"
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
            "泉のネコ女神", "ネコフェンシング", "ネコジャンパー", "ネコサーファー", "ネコトースター", "ネコスケート", "ネコバーベル",
            "窓辺の乙女ネコ", "ねこ寿司", "ネコバスたぶ", "ネコリンゴ", "ネコスイマー", "オタネコ", "ねこタツ", "ネコザイル",
            "ネコ番長", "ネコぼさつ"
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
    const g969 = [
        [
            "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
            "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
            "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
            "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
            "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
        ],
        [
            "泉のネコ女神", "ネコフェンシング", "ネコジャンパー", "ネコサーファー", "ネコトースター", "ネコスケート", "ネコバーベル",
            "窓辺の乙女ネコ", "ねこ寿司", "ネコバスたぶ", "ネコリンゴ", "ネコスイマー", "オタネコ", "ねこタツ", "ネコザイル",
            "ネコ番長", "ネコぼさつ"
        ],
        [
            "冥護の天女ルナーシャ","マモルガ", "特命機動アクセル", "花咲かじいさん", "ネコダイナザウルス", "砲龍ガンドロス",
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
  
  const g962 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "マモルガ","カオルガ","オコルガ","オイルガ","ノビルガ","トゲルガ","バララガ","テコルガ","クビルガ","アシルガ","ネコルガ"
      ],
      [
          "レジェルガ"
      ]
  ];
  const g942 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "ネコダイナザウルス","ネコ天狗","召喚少年サトル","ラスヴォース","ネコクエスト","ねこナース","ねこベビー","ネコシュバリエ","鬼にゃんま","ネコマシン","ネコアイス"
      ],
      [
          "ワンダー・モモコ"
      ]
  ];
  const g943 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "明智光秀","服部半蔵","天草四郎","成田甲斐","今川義元","上杉謙信","武田信玄","伊達政宗","織田信長","前田慶次","真田幸村"
      ],
      [
          "宮本武蔵"
      ]
  ];
  
  const g944 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "鉄籠のペガサ","狩猟娘テルン","妖賢女リリン","英雄令嬢メルシュ","双掌星のシシル＆コマリ","冥界のカリファ","宝杖のカッパーマイン","召し豚のカイ","猿帝のクウ","雷神のサンディア","風神のウィンディ"
      ],
      [
          "聖会長ジャンヌダルク"
      ]
  ];
  
  
  const g945 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "砲龍ガンドロス","海龍ダライアサン","邪龍ヘヴィジャーク","角龍グラディオス","古龍ガングリオン","覇龍ディオラムス","竜戦機ライデン","神龍かむくら","竜騎士バルス","聖龍メギドラ","地龍ソドム"
      ],
      [
          "天城龍バベル"
      ]
  ];
  
  const g946 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "花咲かじいさん","いっすん法師","舌切りすずめ","きんたろう","さるかに合戦","カチカチヤマンズ","かぐやひめ","かさじぞう","ももたろう","ツルの恩返し","うらしまタロウ"
      ],
      [
          "うしわか丸"
      ]
  ];
  
  const g947 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "特命機動アクセル","サンダージャック","白騎士キュクロプス","マッドシューター・サキ","亡者探偵ヴィグラー","天誅ハヤブサ","呪術師デスピエロ","ホワイトラビット","キャットマンダディ","西園寺メカ子","アキラ"
      ],
      [
          "超越科学者ヘヴン博士"
      ]
  ];
  
  const g948 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "光翼神イシス","堕天神ルシファー","冥界神ハデス","時空神クロノス","海王神ポセイドン","繁栄神ガネーシャ","太陽神アマテラス","美女神アフロディーテ","守護神アヌビス","天空神ゼウス"
      ],
      [
          "創造神ガイア"
      ]
  ];
  
  const g950 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "泉のネコ女神","戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","ネコフェンシング","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー", "ネコジャンパー", "ネコサーファー", "ネコトースター", "ネコスケート", "ネコバーベル",
          "窓辺の乙女ネコ", "ねこ寿司", "ネコバスたぶ", "ネコリンゴ", "ネコスイマー", "オタネコ", "ねこタツ", "ネコザイル",
          "ネコ番長", "ネコぼさつ"
      ],
      [
          "忍者娘トモエ","女神ベガ","冒険家カンナ","ゾンビ娘ヴェルヴェーヌ","狼娘ディル","ミイラ娘レイカ","人魚娘ルリィ","狐娘ヒメユリ"
      ],
      [
          "京坂七穂"
      ]
  ];
  
  const g951 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "戦隊チャッソ","戦隊ショベリン","戦隊チョキンドス","戦隊ウチコンガ","戦隊ドリラ","メタルネコ","にゃんこ城Mini","ねねこ","金ネコ","おかめはちもくネコ","ボンボンネコ","見習いスニャイパー","泉のネコ女神","ネコフェンシング","ネコジャンパー","ネコサーファー","ネコトースター","ネコスケート","ネコバーベル","窓辺の乙女ネコ","ねこ寿司","ネコバスたぶ","ネコリンゴ","ネコスイマー","オタネコ","ねこタツ","ネコザイル","ネコ番長","ネコぼさつ"
      ],
      [
          "鉄の精霊カッチン","氷の精霊フリズ","火の精霊メララ","水の精霊ミズリィ","風の精霊エアル","雷の精霊ボルト","石の精霊ゴロー","闇の精霊ヤミィ"
      ],
      [
          "幻の精霊ルミナ"
      ]
  ];
  
  const g696 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
           "泉のネコ女神"," ネコフェンシング"," ネコジャンパー"," 見習いスニャイパー"," ボンボンネコ"," おかめはちもくネコ"," メタルネコ"," にゃんこ城Mini"," ねねこ","金ネコ"," ネコサーファー"," ネコトースター"," ネコスケート"," ネコバーベル"," 窓辺の乙女ネコ"," ねこ寿司"," ネコバスたぶ"," ネコリンゴ"," ネコスイマー"," オタネコ"," ねこタツ"," ネコザイル"," ネコ番長"," ネコぼさつ"
      ],
      [
          "邪龍ヘヴィジャーク","マッドシューター・サキ","古代軍船ガレーズ","猫飯拳パイパイ","ホワイトラビット","ももたろう","伊達政宗","猿帝のクウ","竜戦機ライデン","神龍かむくら","雷神のサンディア","ネコマシン","ネコアイス"
      ],
      [
  
      ]
  ];
  
  const g452 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "泉のネコ女神"," ネコフェンシング"," ネコジャンパー"," 見習いスニャイパー"," ボンボンネコ"," おかめはちもくネコ"," メタルネコ"," にゃんこ城Mini"," ねねこ"," 金ネコ"," ネコサーファー"," ネコトースター"," ネコスケート"," ネコバーベル"," 窓辺の乙女ネコ"," ねこ寿司"," ネコバスたぶ"," ネコリンゴ"," ネコスイマー"," オタネコ"," ねこタツ"," ネコザイル"," ネコ番長"," ネコぼさつ"
      ],
      [
          "閃雷機兵レイ","キャットマンダディ","ねこナース","ツルの恩返し","宝杖のカッパーマイン","召し豚のカイ","聖龍メギドラ","地龍ソドム","風神のウィンディ","ねこベビー"
      ],
      [
          ""
      ]
  ];
  
  const g915 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
          "バレンタインねねこ","イースターねねこ","大掃除ねねこ","夏色ねねこ","ハロウィンねねこ","見習いスニャイパー","ボンボンネコ","おかめはちもくネコ","メタルネコ","にゃんこ城Mini"," ねねこ"," 金ネコ"," 泉のネコ女神"," ネコフェンシング"," ネコジャンパー"," ネコサーファー"," ネコトースター"," ネコスケート"," ネコバーベル"," 窓辺の乙女ネコ"," ねこ寿司","ネコバスたぶ"," ネコリンゴ"," ネコスイマー"," オタネコ"," ねこタツ"," ネコザイル"," ネコ番長"," ネコぼさつ"
      ],
      [
          "建築兵団スフィンクス","ゾンビ娘ヴェルヴェーヌ","風隼さくら","海王神ポセイドン","天誅ハヤブサ","テコルガ","かぐやひめ","ネコシュバリエ"
      ],
      [
          ""
      ]
  ];
  
  const g523 = [
      [
          "ネコホッピング","ネコ車輪","ネコエステ","ねこジュラ"," ねこファイター"," ねこ海賊"," ねこ泥棒"," ねこ僧侶"," ねこ占い師"," ネコシャーマン"," ネコ魔女"," ネコアーチャー"," ネコ魔剣士"," ねこガンマン"," たけうまねこ"," ブリキネコ"," ねこロッカー"," ねこ人魚"," サイキックネコ"," ねこ陰陽師"," ネコバサミ"," ネコボクサー"," ネコ探査機"," ネコマタドール"," ネコ武闘家"
      ],
      [
          "見習いスニャイパー"," ボンボンネコ"," おかめはちもくネコ"," メタルネコ"," にゃんこ城Mini"," ねねこ"," 金ネコ"," ネコぼさつ"," ネコ番長"," ネコザイル"," ねこタツ"," オタネコ"," ネコスイマー"," ネコリンゴ"," ネコバスたぶ"," ねこ寿司"," 窓辺の乙女ネコ"," ネコバーベル"," ネコスケート"," ネコトースター"," ネコサーファー"," ネコジャンパー"," ネコフェンシング"," 泉のネコ女神"
      ],
      [
          "地獄警官エマ"," ラスヴォース"," ノビルガ"," 守護神アヌビス"," トゲルガ"," アキラ"," 前田慶次"," ネコマシン"
      ],
      [
          ""
      ]
  ];
  
  
  const g772 = [
      [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
      ],
      [
        "金ネコ","ねねこ"," にゃんこ城Mini"," メタルネコ"," おかめはちもくネコ"," ボンボンネコ"," 見習いスニャイパー"," 泉のネコ女神"," ネコフェンシング"," ネコジャンパー"," ネコサーファー"," ネコトースター"," ネコスケート"," ネコバーベル"," 窓辺の乙女ネコ"," ねこ寿司"," ネコバスたぶ"," ネコリンゴ"," ネコスイマー"," オタネコ"," ねこタツ"," ネコザイル"," ネコ番長"," ネコぼさつ"
      ],
      [
          "地獄警官エマ"," ラスヴォース"," ノビルガ"," 守護神アヌビス"," トゲルガ"," アキラ"," 前田慶次"," ネコマシン"
      ],
      [
          ""
      ]
  ];

  const g981 = [
    [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
    ],
    [
        "泉のネコ女神"," ネコフェンシング"," ネコジャンパー"," ネコサーファー"," ネコトースター"," ネコスケート"," ネコバーベル"," 窓辺の乙女ネコ"," ねこ寿司"," ネコバスたぶ"," ネコリンゴ"," ネコスイマー"," オタネコ"," ねこタツ"," ネコザイル"," ネコ番長"," ネコぼさつ"
    ],
    [
      "曲射砲台ランチャーズ",
  "マモルガ",
  "幼天女ルーナ",
  "特命機動アクセル",
  "花咲かじいさん",
  "ネコダイナザウルス",
  "砲龍ガンドロス",
  "明智光秀",
  "鉄籠のペガサ",
  "光翼神イシス",
  "鉄の精霊カッチン",
  "建築兵団スフィンクス",
  "カオルガ",
  "サンダージャック",
  "いっすん法師",
  "運命の子フォノ",
  "周遊芸団カルーセルズ",
  "ネコ天狗",
  "海龍ダライアサン",
  "氷の精霊フリズ",
  "服部半蔵",
  "狩猟娘テルン",
  "堕天神ルシファー",
  "踊り子イズ",
  "白騎士キュクロプス",
  "舌切りすずめ",
  "超竜戦機デス・トロイ",
  "闇の精霊ヤミィ",
  "オコルガ",
  "邪龍ヘヴィジャーク",
  "妖賢女リリン",
  "天草四郎",
  "召喚少年サトル",
  "空中商会コロンブス",
  "幼獣ガル",
  "石の精霊ゴロー",
  "オイルガ",
  "冥界神ハデス",
  "マッドシューター・サキ",
  "厄災の子キャスリィ",
  "きんたろう",
  "ラスヴォース",
  "角龍グラディオス",
  "英雄令嬢メルシュ",
  "成田甲斐",
  "時空神クロノス",
  "ノビルガ",
  "亡者探偵ヴィグラー",
  "ネコクエスト",
  "温泉天国テルマエ",
  "雷の精霊ボルト",
  "古龍ガングリオン",
  "幼傑ダルターニャ",
  "風の精霊エアル",
  "水の精霊ミズリィ",
  "火の精霊メララ",
  "観測兵器ガリレオ",
  "双掌星のシシル＆コマリ",
  "今川義元",
  "さるかに合戦",
  "巫女姫ミタマ",
  "海王神ポセイドン",
  "飛空襲撃ボンバーズ",
  "古代軍船ガレーズ",
  "帝国陸軍カタパルズ",
  "繁栄神ガネーシャ",
  "太陽神アマテラス",
  "幼獣ガオ",
  "ネコルガ",
  "ネコアイス",
  "ネコマシン",
  "鬼にゃんま",
  "ネコシュバリエ",
  "ねこベビー",
  "真田幸村",
  "前田慶次",
  "織田信長",
  "風神のウィンディ",
  "雷神のサンディア",
  "地龍ソドム",
  "聖龍メギドラ",
  "竜騎士バルス",
  "神龍かむくら",
  "竜戦機ライデン",
  "猿帝のクウ",
  "召し豚のカイ",
  "宝杖のカッパーマイン",
  "伊達政宗",
  "武田信玄",
  "うらしまタロウ",
  "ツルの恩返し",
  "ももたろう",
  "かさじぞう",
  "かぐやひめ",
  "ねこナース",
  "上杉謙信",
  "冥界のカリファ",
  "アシルガ",
  "クビルガ",
  "テコルガ",
  "バララガ",
  "覇龍ディオラムス",
  "アキラ",
  "西園寺メカ子",
  "キャットマンダディ",
  "カチカチヤマンズ",
  "ホワイトラビット",
  "呪術師デスピエロ",
  "天誅ハヤブサ",
  "トゲルガ",
  "天空神ゼウス",
  "守護神アヌビス",
  "女神アフロディーテ"
    ],
    [
        "暁のイザナギ"
    ],
  ]

  const g982 = [
    [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
    ],
    [
        "泉のネコ女神"," ネコフェンシング"," ネコジャンパー"," ネコサーファー"," ネコトースター"," ネコスケート"," ネコバーベル"," 窓辺の乙女ネコ"," ねこ寿司"," ネコバスたぶ"," ネコリンゴ"," ネコスイマー"," オタネコ"," ねこタツ"," ネコザイル"," ネコ番長"," ネコぼさつ"
    ],
    [
          "曲射砲台ランチャーズ",
  "冥護の天女ルナーシャ",
  "マモルガ",
  "特命機動アクセル",
  "花咲かじいさん",
  "ネコダイナザウルス",
  "砲龍ガンドロス",
  "明智光秀",
  "鉄籠のペガサ",
  "光翼神イシス",
  "鉄の精霊カッチン",
  "建築兵団スフィンクス",
  "カオルガ",
  "非命の王フォノウ",
  "サンダージャック",
  "いっすん法師",
  "周遊芸団カルーセルズ",
  "ネコ天狗",
  "海龍ダライアサン",
  "悲嘆の踊り子イズ",
  "氷の精霊フリズ",
  "服部半蔵",
  "狩猟娘テルン",
  "堕天神ルシファー",
  "白騎士キュクロプス",
  "舌切りすずめ",
  "超竜戦機デス・トロイ",
  "闇の精霊ヤミィ",
  "オコルガ",
  "邪龍ヘヴィジャーク",
  "妖賢女リリン",
  "天草四郎",
  "召喚少年サトル",
  "黒獣ガルディアン",
  "空中商会コロンブス",
  "石の精霊ゴロー",
  "オイルガ",
  "禍根の魔女キャスリィ",
  "冥界神ハデス",
  "マッドシューター・サキ",
  "きんたろう",
  "ラスヴォース",
  "角龍グラディオス",
  "英雄令嬢メルシュ",
  "成田甲斐",
  "影傑ダークダルターニャ",
  "時空神クロノス",
  "ノビルガ",
  "亡者探偵ヴィグラー",
  "ネコクエスト",
  "温泉天国テルマエ",
  "雷の精霊ボルト",
  "古龍ガングリオン",
  "黒無垢のミタマ",
  "風の精霊エアル",
  "水の精霊ミズリィ",
  "火の精霊メララ",
  "観測兵器ガリレオ",
  "双掌星のシシル＆コマリ",
  "今川義元",
  "黒獣ガオウ",
  "さるかに合戦",
  "海王神ポセイドン",
  "飛空襲撃ボンバーズ",
  "古代軍船ガレーズ",
  "帝国陸軍カタパルズ",
  "繁栄神ガネーシャ",
  "太陽神アマテラス",
  "ネコルガ",
  "ネコアイス",
  "ネコマシン",
  "鬼にゃんま",
  "ネコシュバリエ",
  "ねこベビー",
  "真田幸村",
  "前田慶次",
  "織田信長",
  "風神のウィンディ",
  "雷神のサンディア",
  "地龍ソドム",
  "聖龍メギドラ",
  "竜騎士バルス",
  "神龍かむくら",
  "竜戦機ライデン",
  "猿帝のクウ",
  "召し豚のカイ",
  "宝杖のカッパーマイン",
  "伊達政宗",
  "武田信玄",
  "うらしまタロウ",
  "ツルの恩返し",
  "ももたろう",
  "かさじぞう",
  "かぐやひめ",
  "ねこナース",
  "上杉謙信",
  "冥界のカリファ",
  "アシルガ",
  "クビルガ",
  "テコルガ",
  "バララガ",
  "覇龍ディオラムス",
  "アキラ",
  "西園寺メカ子",
  "キャットマンダディ",
  "カチカチヤマンズ",
  "ホワイトラビット",
  "呪術師デスピエロ",
  "天誅ハヤブサ",
  "トゲルガ",
  "天空神ゼウス",
  "守護神アヌビス",
  "女神アフロディーテ"
    ],
    [
        "宵のイザナミ"
    ],
  ]


  const g972 = [
    [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
    ],
    [
        "泉のネコ女神"," ネコフェンシング"," ネコジャンパー"," ネコサーファー"," ネコトースター"," ネコスケート"," ネコバーベル"," 窓辺の乙女ネコ"," ねこ寿司"," ネコバスたぶ"," ネコリンゴ"," ネコスイマー"," オタネコ"," ねこタツ"," ネコザイル"," ネコ番長"," ネコぼさつ"
    ],
    [
          "冥護の天女ルナーシャ",
  "マモルガ",
  "幼天女ルーナ",
  "特命機動アクセル",
  "花咲かじいさん",
  "ネコダイナザウルス",
  "砲龍ガンドロス",
  "明智光秀",
  "鉄籠のペガサ",
  "光翼神イシス",
  "鉄の精霊カッチン",
  "建築兵団スフィンクス",
  "カオルガ",
  "非命の王フォノウ",
  "サンダージャック",
  "いっすん法師",
  "運命の子フォノ",
  "周遊芸団カルーセルズ",
  "ネコ天狗",
  "海龍ダライアサン",
  "悲嘆の踊り子イズ",
  "氷の精霊フリズ",
  "服部半蔵",
  "狩猟娘テルン",
  "堕天神ルシファー",
  "踊り子イズ",
  "白騎士キュクロプス",
  "舌切りすずめ",
  "超竜戦機デス・トロイ",
  "闇の精霊ヤミィ",
  "オコルガ",
  "邪龍ヘヴィジャーク",
  "妖賢女リリン",
  "天草四郎",
  "召喚少年サトル",
  "黒獣ガルディアン",
  "空中商会コロンブス",
  "幼獣ガル",
  "石の精霊ゴロー",
  "オイルガ",
  "禍根の魔女キャスリィ",
  "冥界神ハデス",
  "マッドシューター・サキ",
  "厄災の子キャスリィ",
  "きんたろう",
  "ラスヴォース",
  "角龍グラディオス",
  "英雄令嬢メルシュ",
  "成田甲斐",
  "影傑ダークダルターニャ",
  "時空神クロノス",
  "ノビルガ",
  "亡者探偵ヴィグラー",
  "ネコクエスト",
  "温泉天国テルマエ",
  "雷の精霊ボルト",
  "古龍ガングリオン",
  "幼傑ダルターニャ",
  "黒無垢のミタマ",
  "風の精霊エアル",
  "水の精霊ミズリィ",
  "火の精霊メララ",
  "観測兵器ガリレオ",
  "双掌星のシシル＆コマリ",
  "今川義元",
  "黒獣ガオウ",
  "さるかに合戦",
  "巫女姫ミタマ",
  "海王神ポセイドン",
  "飛空襲撃ボンバーズ",
  "古代軍船ガレーズ",
  "帝国陸軍カタパルズ",
  "繁栄神ガネーシャ",
  "太陽神アマテラス",
  "幼獣ガオ",
  "天誅ハヤブサ",
  "女神アフロディーテ",
  "守護神アヌビス",
  "天空神ゼウス",
  "トゲルガ",
  "呪術師デスピエロ",
  "ホワイトラビット",
  "カチカチヤマンズ",
  "キャットマンダディ",
  "西園寺メカ子",
  "アキラ",
  "覇龍ディオラムス",
  "バララガ",
  "テコルガ",
  "クビルガ",
  "アシルガ",
  "冥界のカリファ",
  "上杉謙信",
  "ねこナース",
  "かぐやひめ",
  "かさじぞう",
  "ももたろう",
  "ツルの恩返し",
  "うらしまタロウ",
  "武田信玄",
  "伊達政宗",
  "宝杖のカッパーマイン",
  "召し豚のカイ",
  "猿帝のクウ",
  "竜戦機ライデン",
  "神龍かむくら",
  "竜騎士バルス",
  "聖龍メギドラ",
  "地龍ソドム",
  "雷神のサンディア",
  "風神のウィンディ",
  "織田信長",
  "前田慶次",
  "真田幸村",
  "ねこベビー",
  "ネコシュバリエ",
  "鬼にゃんま",
  "ネコマシン",
  "ネコアイス",
  "ネコルガ"
    ],
    [
        "宵のイザナミ","暁のイザナギ"
    ],
  ]

  const g973 = [
    [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
    ],
    [
          "スモウ・ザ・ミイラ",
  "バレンタインねねこ",
  "救命にゃんこ",
  "日焼けネコ",
  "イースターねねこ",
  "大掃除ねねこ",
  "夏色ねねこ",
  "ハロウィンねねこ",
  "泉のネコ女神",
  "ネコフェンシング",
  "ネコジャンパー",
  "ネコサーファー",
  "ネコトースター",
  "ネコスケート",
  "ネコバーベル",
  "窓辺の乙女ネコ",
  "ねこ寿司",
  "ネコバスたぶ",
  "ネコリンゴ",
  "ネコスイマー",
  "オタネコ",
  "ねこタツ",
  "ネコザイル",
  "ネコ番長",
  "ネコぼさつ"
    ],
    [
  "マジシャンキャットマン",
  "冬将軍・成田甲斐",
  "パンプキンソドム",
  "サマーフェスサンディア",
  "ネコケーキマシン挙式",
  "スプリングカリファ",
  "ネコアイスホワイトスター",
  "波打ち際の冒険家カンナ",
  "バララガの誓い",
  "決闘少年ラビットサトル",
  "白執事探偵ヴィグラー",
  "トナカイ娘テルン",
  "伯爵・真田幸村",
  "ナイトビーチリリン",
  "祝福神クロノス",
  "恋番長・鬼にゃんま",
  "白い恋人メカ子",
  "渚のかぐやひめ",
  "春龍かむくら",
  "初恋令嬢メルシュ",
  "恋女神ショコラディーテ",
  "前田サンタ慶次",
  "竜騎士スカルバルス",
  "ネコルガの夏",
  "アクアシューター・サキ",
  "冬天使のシシル＆コマリ",
  "潮風のセーラーカッパー",
  "灼熱のビーチクウ",
  "常夏の果実カイ",
  "道化師エッグダック",
  "上杉謙信・春",
  "ネコナースキャンドル",
  "ネコアイスゴースト",
  "真夏のホワイトラビット",
  "トロピカルカリファ",
  "聖夜のシスターカッパー",
  "サンタのメリークウ",
  "雪だるまのスノーカイ",
  "デビルサンディア",
  "ウィンディスイート"
    ],
    [
        "ネコ王子"
    ],
  ]

  const g861 = [
    [
                  "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
    ],
    [
  "泉のネコ女神",
  "ネコフェンシング",
  "ネコジャンパー",
  "ネコサーファー",
  "ネコトースター",
  "ネコスケート",
  "ネコバーベル",
  "窓辺の乙女ネコ",
  "ねこ寿司",
  "ネコバスたぶ",
  "ネコリンゴ",
  "ネコスイマー",
  "オタネコ",
  "ねこタツ",
  "ネコザイル",
  "ネコ番長",
  "ネコぼさつ"
    ],
    [
          "ねこナース",
  "成田甲斐",
  "妖賢女リリン",
  "舌切りすずめ",
  "ホワイトラビット",
  "太陽神アマテラス",
  "女神ベガ",
  "ネコアイスゴースト",
  "トナカイ娘テルン",
  "波打ち際の冒険家カンナ",
  "上杉謙信・春",
  "白い恋人メカ子",
  "祝福神クロノス",
  "ネコ王女"
    ],
    [
         "宮本武蔵",
  "聖会長ジャンヌダルク",
  "天城龍バベル",
  "うしわか丸",
  "ワンダー・モモコ",
  "レジェルガ",
  "終末兵器ムー",
  "幻の精霊ルミナ",
  "超越科学者ヘヴン博士",
  "創造神ガイア",
  "京坂七穂"
    ],
]

const g939 = [
    [
          "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
    ],
    [
  "金ネコ",
  "ねねこ",
  "にゃんこ城Mini",
  "メタルネコ",
  "おかめはちもくネコ",
  "ボンボンネコ",
  "見習いスニャイパー",
  "泉のネコ女神",
  "ネコフェンシング",
  "ネコジャンパー",
  "ネコサーファー",
  "ネコトースター",
  "ネコスケート",
  "ネコバーベル",
  "窓辺の乙女ネコ",
  "ねこ寿司",
  "ネコバスたぶ",
  "ネコリンゴ",
  "ネコスイマー",
  "オタネコ",
  "ねこタツ",
  "ネコザイル",
  "ネコ番長",
  "ネコぼさつ"
    ],
    [
  "ねこベビー",
  "風神のウィンディ",
  "地龍ソドム",
  "聖龍メギドラ",
  "召し豚のカイ",
  "宝杖のカッパーマイン",
  "ツルの恩返し",
  "ねこナース",
  "キャットマンダディ",
  "閃雷機兵レイ",
  "ネコマシン",
  "前田慶次",
  "アキラ",
  "トゲルガ",
  "守護神アヌビス",
  "ノビルガ",
  "ラスヴォース",
  "地獄警官エマ",
  "ネコアイス",
  "雷神のサンディア",
  "神龍かむくら",
  "竜戦機ライデン",
  "猿帝のクウ",
  "伊達政宗",
  "ももたろう",
  "ホワイトラビット",
  "猫飯拳パイパイ",
  "古代軍船ガレーズ",
  "マッドシューター・サキ",
  "邪龍ヘヴィジャーク",
  "ネコシュバリエ",
  "かぐやひめ",
  "テコルガ",
  "天誅ハヤブサ",
  "海王神ポセイドン",
  "ゾンビ娘ヴェルヴェーヌ",
  "風隼さくら",
  "建築兵団スフィンクス",
  "狩猟娘テルン",
  "服部半蔵",
  "氷の精霊フリズ",
  "海龍ダライアサン",
  "ネコ天狗",
  "周遊芸団カルーセルズ",
  "女神ベガ",
  "光の女神シリウス"
    ],
    [
        ""
    ],
]

const g983 = [
    [
        ""
    ],
    [
        ""
    ],
    [
          "曲射砲台ランチャーズ",
  "冥護の天女ルナーシャ",
  "マモルガ",
  "幼天女ルーナ",
  "特命機動アクセル",
  "花咲かじいさん",
  "ネコダイナザウルス",
  "砲龍ガンドロス",
  "明智光秀",
  "鉄籠のペガサ",
  "光翼神イシス",
  "鉄の精霊カッチン",
  "建築兵団スフィンクス",
  "カオルガ",
  "非命の王フォノウ",
  "サンダージャック",
  "いっすん法師",
  "運命の子フォノ",
  "光の女神シリウス",
  "周遊芸団カルーセルズ",
  "ネコ天狗",
  "海龍ダライアサン",
  "悲嘆の踊り子イズ",
  "氷の精霊フリズ",
  "服部半蔵",
  "狩猟娘テルン",
  "堕天神ルシファー",
  "踊り子イズ",
  "白騎士キュクロプス",
  "舌切りすずめ",
  "超竜戦機デス・トロイ",
  "闇の精霊ヤミィ",
  "オコルガ",
  "邪龍ヘヴィジャーク",
  "妖賢女リリン",
  "天草四郎",
  "召喚少年サトル",
  "ネコ王女",
  "黒獣ガルディアン",
  "空中商会コロンブス",
  "幼獣ガル",
  "石の精霊ゴロー",
  "地獄警官エマ",
  "オイルガ",
  "禍根の魔女キャスリィ",
  "冥界神ハデス",
  "マッドシューター・サキ",
  "厄災の子キャスリィ",
  "きんたろう",
  "ラスヴォース",
  "角龍グラディオス",
  "英雄令嬢メルシュ",
  "成田甲斐",
  "影傑ダークダルターニャ",
  "時空神クロノス",
  "ノビルガ",
  "亡者探偵ヴィグラー",
  "ネコクエスト",
  "温泉天国テルマエ",
  "雷の精霊ボルト",
  "風隼さくら",
  "古龍ガングリオン",
  "幼傑ダルターニャ",
  "黒無垢のミタマ",
  "風の精霊エアル",
  "水の精霊ミズリィ",
  "火の精霊メララ",
  "観測兵器ガリレオ",
  "双掌星のシシル＆コマリ",
  "今川義元",
  "黒獣ガオウ",
  "さるかに合戦",
  "巫女姫ミタマ",
  "海王神ポセイドン",
  "飛空襲撃ボンバーズ",
  "古代軍船ガレーズ",
  "帝国陸軍カタパルズ",
  "閃雷機兵レイ",
  "猫飯拳パイパイ",
  "幼獣ガオ",
  "ネコルガ",
  "アシルガ",
  "クビルガ",
  "テコルガ",
  "バララガ",
  "トゲルガ",
  "ネコアイス",
  "ネコマシン",
  "鬼にゃんま",
  "ネコシュバリエ",
  "ねこベビー",
  "ねこナース",
  "真田幸村",
  "前田慶次",
  "織田信長",
  "伊達政宗",
  "武田信玄",
  "上杉謙信",
  "風神のウィンディ",
  "雷神のサンディア",
  "猿帝のクウ",
  "召し豚のカイ",
  "宝杖のカッパーマイン",
  "冥界のカリファ",
  "地龍ソドム",
  "聖龍メギドラ",
  "竜騎士バルス",
  "神龍かむくら",
  "竜戦機ライデン",
  "覇龍ディオラムス",
  "うらしまタロウ",
  "ツルの恩返し",
  "ももたろう",
  "かさじぞう",
  "かぐやひめ",
  "カチカチヤマンズ",
  "アキラ",
  "西園寺メカ子",
  "キャットマンダディ",
  "ホワイトラビット",
  "呪術師デスピエロ",
  "天誅ハヤブサ",
  "天空神ゼウス",
  "守護神アヌビス",
  "女神アフロディーテ",
  "太陽神アマテラス",
  "繁栄神ガネーシャ"
    ],
    [
        ""
    ]
]

const g984 = [
    [
        ""
    ],
    [
        ""
    ],
    [
              "曲射砲台ランチャーズ",
  "冥護の天女ルナーシャ",
  "マモルガ",
  "幼天女ルーナ",
  "特命機動アクセル",
  "花咲かじいさん",
  "ネコダイナザウルス",
  "砲龍ガンドロス",
  "明智光秀",
  "鉄籠のペガサ",
  "光翼神イシス",
  "鉄の精霊カッチン",
  "建築兵団スフィンクス",
  "カオルガ",
  "非命の王フォノウ",
  "サンダージャック",
  "いっすん法師",
  "運命の子フォノ",
  "光の女神シリウス",
  "周遊芸団カルーセルズ",
  "ネコ天狗",
  "海龍ダライアサン",
  "悲嘆の踊り子イズ",
  "氷の精霊フリズ",
  "服部半蔵",
  "狩猟娘テルン",
  "堕天神ルシファー",
  "踊り子イズ",
  "白騎士キュクロプス",
  "舌切りすずめ",
  "超竜戦機デス・トロイ",
  "闇の精霊ヤミィ",
  "オコルガ",
  "邪龍ヘヴィジャーク",
  "妖賢女リリン",
  "天草四郎",
  "召喚少年サトル",
  "ネコ王女",
  "黒獣ガルディアン",
  "空中商会コロンブス",
  "幼獣ガル",
  "石の精霊ゴロー",
  "地獄警官エマ",
  "オイルガ",
  "禍根の魔女キャスリィ",
  "冥界神ハデス",
  "マッドシューター・サキ",
  "厄災の子キャスリィ",
  "きんたろう",
  "ラスヴォース",
  "角龍グラディオス",
  "英雄令嬢メルシュ",
  "成田甲斐",
  "影傑ダークダルターニャ",
  "時空神クロノス",
  "ノビルガ",
  "亡者探偵ヴィグラー",
  "ネコクエスト",
  "温泉天国テルマエ",
  "雷の精霊ボルト",
  "風隼さくら",
  "古龍ガングリオン",
  "幼傑ダルターニャ",
  "黒無垢のミタマ",
  "風の精霊エアル",
  "水の精霊ミズリィ",
  "火の精霊メララ",
  "観測兵器ガリレオ",
  "双掌星のシシル＆コマリ",
  "今川義元",
  "黒獣ガオウ",
  "さるかに合戦",
  "巫女姫ミタマ",
  "海王神ポセイドン",
  "飛空襲撃ボンバーズ",
  "古代軍船ガレーズ",
  "帝国陸軍カタパルズ",
  "閃雷機兵レイ",
  "猫飯拳パイパイ",
  "幼獣ガオ",
  "ネコルガ",
  "アシルガ",
  "クビルガ",
  "テコルガ",
  "バララガ",
  "トゲルガ",
  "ネコアイス",
  "ネコマシン",
  "鬼にゃんま",
  "ネコシュバリエ",
  "ねこベビー",
  "ねこナース",
  "真田幸村",
  "前田慶次",
  "織田信長",
  "伊達政宗",
  "武田信玄",
  "上杉謙信",
  "風神のウィンディ",
  "雷神のサンディア",
  "猿帝のクウ",
  "召し豚のカイ",
  "宝杖のカッパーマイン",
  "冥界のカリファ",
  "地龍ソドム",
  "聖龍メギドラ",
  "竜騎士バルス",
  "神龍かむくら",
  "竜戦機ライデン",
  "覇龍ディオラムス",
  "うらしまタロウ",
  "ツルの恩返し",
  "ももたろう",
  "かさじぞう",
  "かぐやひめ",
  "カチカチヤマンズ",
  "アキラ",
  "西園寺メカ子",
  "キャットマンダディ",
  "ホワイトラビット",
  "呪術師デスピエロ",
  "天誅ハヤブサ",
  "天空神ゼウス",
  "守護神アヌビス",
  "女神アフロディーテ",
  "太陽神アマテラス",
  "繁栄神ガネーシャ"
    ],
    [
          "宵のイザナミ",
  "暁のイザナギ",
  "ネコ王子",
  "創造神ガイア",
  "超越科学者ヘヴン博士",
  "幻の精霊ルミナ",
  "終末兵器ムー",
  "レジェルガ",
  "ワンダー・モモコ",
  "うしわか丸",
  "天城龍バベル",
  "聖会長ジャンヌダルク",
  "宮本武蔵"
    ]
]

const g922 = [
    [
      "ネコ武闘家", "ネコマタドール", "ネコ探査機", "ネコボクサー", "ネコバサミ",
          "ねこ陰陽師", "サイキックネコ", "ねこ人魚", "ねこロッカー", "ブリキネコ",
          "たけうまねこ", "ねこガンマン", "ネコ魔剣士", "ネコアーチャー", "ネコ魔女",
          "ネコシャーマン", "ねこ占い師", "ねこ僧侶", "ねこ泥棒", "ねこ海賊",
          "ねこファイター", "ねこジュラ", "ネコエステ", "ネコ車輪", "ネコホッピング"
    ],
    [
  "スモウ・ザ・ミイラ",
  "スモウ・ザ・ミイラ",
  "スモウ・ザ・ミイラ",
  "ハロウィンねねこ",
  "ハロウィンねねこ",
  "ハロウィンねねこ",
  "洗脳されしネコ",
  "洗脳されしタンクネコ",
  "洗脳されしウシネコ",
  "泉のネコ女神",
  "ネコフェンシング",
  "ネコジャンパー",
  "ネコサーファー",
  "ネコトースター",
  "ネコスケート",
  "ネコバーベル",
  "窓辺の乙女ネコ",
  "ねこ寿司",
  "ネコバスたぶ",
  "ネコリンゴ",
  "ネコスイマー",
  "オタネコ",
  "ねこタツ",
  "ネコザイル",
  "ネコ番長",
  "ネコぼさつ"
    ],
    [
          "パンプキンソドム",
  "伯爵・真田幸村",
  "ウィンディスイート",
  "デビルサンディア",
  "ネコアイスゴースト",
  "竜騎士スカルバルス"
    ],
    [
        ""
    ],
]

 export { g452, g523, g696, g772,g861,g939, g915,g922,g946, g947, g948, g949, g950, g951, g962, g963, g965, g966, g969,g972,g973,g981, g982,g983,g984};
  

 //新規ガチャ用テンプレート　const g000 = [[],[],[],[],]