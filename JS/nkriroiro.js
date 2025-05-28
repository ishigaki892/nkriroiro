  // ボタン要素を取得
  const addButton = document.getElementById('addButton');
  const container = document.getElementById('container');
  const gchaSelect = document.getElementById('gcha_select');
  const findNext = document.getElementById('find_next');
  const dtugi = document.getElementById('dense_tugi');
  const updtugi = document.getElementById('updense_tugi');
  const url = new URL(window.location.href);
  import * as gachas from './chara_lists.js';
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
  	url.searchParams.set("seed", inputNumber);
  	url.searchParams.set("select", inputString);
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

	let dens, tyog, grare, sgacha, gachaname;
	    if (selectg === "949") { //アイアンウォーズ
	        dens = 9970;
	        tyog = 9470;
	        grare = 6970;
	        sgacha = gachas.g949;
	        gachaname = "アイアンウォーズ";
	    } else if (selectg === "965") { //プラチケ
	        dens = 10000;
	        tyog = 0;
	        grare = 0;
	        sgacha = gachas.g965;
	        gachaname = "プラチナガチャ";
	    } else if (selectg === "966") { //レジェチケ
	        dens = 9500;
	        tyog = 0;
	        grare = 0;
	        sgacha = gachas.g966;
	        gachaname = "レジェンドガチャ";
	    } else if (selectg === "962") { //ルガ族
	        dens = 9970;
	        tyog = 9470;
	        grare = 6970;
	        sgacha = gachas.g962;
	        gachaname = "ネコルガ族";
	    }　else if (selectg === "963") {
	        dens = 9970;
	        tyog = 9070;
	        grare = 6470;
	        sgacha = gachas.g963;
	        gachaname = "超ネコ祭";
	    } else if (selectg === "969") {
	        dens = 9970;
	        tyog = 9070;
	        grare = 6470;
	        sgacha = gachas.g969;
	        gachaname = "極ネコ祭";
	    } else if (selectg === "942") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g942;
			gachaname = "ダイナマイツ";
		} else if (selectg === "943") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g943;
			gachaname = "バサラーズ";
		} else if (selectg === "944") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g944;
			gachaname = "ギャラクシーギャルズ";
		} else if (selectg === "945") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g945;
			gachaname = "ドラゴンエンペラーズ";
		} else if (selectg === "946") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g946;
			gachaname = "ウルトラソウルズ";
		} else if (selectg === "947") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g947;
			gachaname = "ダークヒーローズ";
		} else if (selectg === "948") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g948;
			gachaname = "ギガントゼウス";
		} else if (selectg === "950") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g950;
			gachaname = "ギャルズモンスターズ";
		} else if (selectg === "951") {
			dens = 9970;
			tyog = 9470;
			grare = 6970;
			sgacha = gachas.g951;
			gachaname = "エレメンタルピクシーズ";
		} else if (selectg === "696") {
			dens = 10000;
			tyog = 9500;
			grare = 7000;
			sgacha = gachas.g969;
			gachaname = "レッドバスターズ";
		} else if (selectg === "452") {
			dens = 10000;
			tyog = 9500;
			grare = 7000;
			sgacha = gachas.g452;
			gachaname = "エアバスターズ";
		} else if (selectg === "915") {
			dens = 10000;
			tyog = 9500;
			grare = 7000;
			sgacha = gachas.g915;
			gachaname = "メタルバスターズ";
		} else if (selectg === "523") {
			dens = 10000;
			tyog = 9500;
			grare = 7000;
			sgacha = gachas.g523;
			gachaname = "波動バスターズ";
		} else if (selectg === "772") {
			dens = 10000;
			tyog = 9500;
			grare = 7000;
			sgacha = gachas.g772;
			gachaname = "超生命体バスターズ";
		} else if (selectg === "981") { 
			dens = 10000; 
			tyog = 9070; 
			grare = 6470; 
			sgacha = gachas.g981; 
			gachaname = "超ネコ祭"; 
		} else if (selectg === "982") { 
			dens = 10000; 
			tyog = 9070; 
			grare = 6470; 
			sgacha = gachas.g982; 
			gachaname = "極ネコ祭"; 
		}
// 追加用　else if (selectg === "000") { dens = 10000; tyog = 0000; grare = 0000; sgacha = gachas.g000; gachaname = "ガチャ名"; }

  	function getValue(aaaa) {
  		if (aaaa >= dens) {
  			return 3;
  		} else if (aaaa >= tyog) {
  			return 2;
  		} else if (aaaa >= grare) {
  			return 1;
  		} else if (aaaa >= 0) {
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
  			kaburi.splice(result2 % sgacha[0].length, 1);
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

  	let kaburib = "";
  	let maenob = "";
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

  		nameb = sgacha[getValue(result15)][result144 % sgacha[getValue(result15)].length];

  		if (maenob === nameb && getValue(result15) == 0) {
  			const kaburi = sgacha[0].concat();
  			kaburi.splice(result144 % sgacha[0].length, 1);
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

  			//昇格伝説
  			if (selectg != "966" && selectg != "965" && 9940 <= aread[i - 1] &&
  				aread[i - 1] <= dens) {
  				updens_next.push(i + "A")
  			}
  			if (selectg != "966" && selectg != "965" && 9940 <= bread[i - 1] &&
  				bread[i - 1] <= dens) {
  				updens_next.push(i + "B")
  			}
  			//伝説次の表示
  			if (selectg != "966" && selectg != "965" && aread[i - 1] >= dens) {
  				dens_next.push(i + "A")
  			}
  			if (selectg != "966" && selectg != "965" && bread[i - 1] >= dens) {
  				dens_next.push(i + "B")
  			}

  			//通常激レア処理
  			if (selectg != "966" && selectg != "965" && aread[i - 1] >= grare) {
  				rows[i].querySelector('.charas').style.backgroundColor = '#ffff00';
  			}
  			if (selectg != "966" && selectg != "965" && bread[i - 1] >= grare) {
  				rows[i].querySelector('.charas-right').style.backgroundColor =
  					'#ffff00';
  			}
  			//通常超激処理(確率違うところだけ先に作って残りはelseで処理する)
  			if (aread[i - 1] >= tyog) {
  				rows[i].querySelector('.charas').style.backgroundColor = '#ff0033';
  			}
  			if (bread[i - 1] >= tyog) {
  				rows[i].querySelector('.charas-right').style.backgroundColor =
  					'#ff0033';
  			}

  			//昇格超激処理
  			if (aread[i - 1] >= 9070 &&
  				aread[i - 1] <= 9500) {
  				rows[i].querySelector('.charas').style.backgroundColor = '#ff6633';
  			}
  			if (bread[i - 1] >= 9070 &&
  				bread[i - 1] <= 9500) {
  				rows[i].querySelector('.charas-right').style.backgroundColor =
  					'#ff6633';
  			}

  			if (namesa[i - 1].includes('フォノ') || namesa[i - 1].includes('ミタマ') ||
  				namesa[i - 1].includes('イズ') || namesa[i - 1].includes("ダルターニャ") ||
  				namesa[i - 1].includes("ガル") || namesa[i - 1].includes('ガオウ') || namesa[
  					i - 1].includes('キャス') || namesa[i - 1].includes("閃雷機兵") || namesa[i -
  					1].includes('エマ') || namesa[i - 1].includes('光の女神シリウス') || namesa[i -
  					1].includes('風隼') || namesa[i - 1].includes('パイパイ')) {
  				rows[i].querySelector('.charas').style.backgroundColor = '#00ffff';
  			}
  			if (namesb[i - 1].includes('フォノ') || namesb[i - 1].includes('ミタマ') ||
  				namesb[i - 1].includes('イズ') || namesb[i - 1].includes("ダルターニャ") ||
  				namesb[i - 1].includes("ガル") || namesb[i - 1].includes('ガオウ') || namesb[
  					i - 1].includes('キャス') || namesb[i - 1].includes("閃雷機兵") || namesb[i -
  					1].includes('エマ') || namesb[i - 1].includes('光の女神シリウス') || namesb[i -
  					1].includes('風隼') || namesb[i - 1].includes('パイパイ')) {
  				rows[i].querySelector('.charas-right').style.backgroundColor =
  					'#00ffff';
  			}

  			//昇格伝説処理
  			if (selectg != "966" && selectg != "965" && 9940 <= aread[i - 1] &&
  				aread[i - 1] <= dens) {
  				rows[i].querySelector('.charas').style.backgroundColor = '#6633ff';
  			}
  			if (selectg != "966" && selectg != "965" && 9940 <= bread[i - 1] &&
  				bread[i - 1] <= dens) {
  				rows[i].querySelector('.charas-right').style.backgroundColor =
  					'#6633ff';
  			}
  			//伝説処理
  			if (aread[i - 1] >= dens) {
  				rows[i].querySelector('.charas').style.backgroundColor = '#9900cc';
  			}
  			if (bread[i - 1] >= dens) {
  				rows[i].querySelector('.charas-right').style.backgroundColor =
  					'#9900cc';
  			}

  		}
  		dtugi.textContent = dens_next
  		updtugi.textContent = updens_next;
  	};
  	let sa = [];
  	let sb = [];

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