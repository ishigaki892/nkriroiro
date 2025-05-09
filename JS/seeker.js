const seekButton = document.querySelector('.seekbutton');

import * as gachas from './chara_lists.js';
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

let dens, tyog, grare, sgacha, gachaname;
    if (selectg === "949") { //アイアンウォーズ
        dens = 9970;
        tyog = 9470;
        grare = 6970;
        sgacha = gachas.g949;
        gachaname = "アイアンウォーズ";
    } 

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
seekButton.addEventListener('click', () => {
    console.log(dens);
    let namea;
    let seeda = 1;
    for (let i = 0; i < 10; i++) {
        
            const xorshift = new Xorshift32(seeda);
            const results = [];
            for (let i = 0; i < 2; i++) {
                results.push(xorshift.random());
            }
            const result1 = results[0] % 10000;
            const result2 = results[1];
            seeda = result2;
            namea = sgacha[getValue(result1)][result2 % sgacha[getValue(result1)].length];
            console.log(namea);
    }
    
});
