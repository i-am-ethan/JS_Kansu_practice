//関数について
//入力、処理、出力
//引数、処理、出力

//引数なし、戻り値なし

function test(){
    console.log('test');
}
test();

//引数あり、戻り値なし
const comment = 'コメント';

//引数と処理は同じでなければならない

function getComment(string){
    console.log(string);
}

getComment(comment);

//引数なし、戻り値あり

function getNumberOfComment(){
    return 5;
}

console.log(getNumberOfComment());

//引数２つ、戻り値あり

function sumPrice(int1, int2){
    let int3 = int1 + int2;
    return int3;
}

const total = sumPrice(3,5);
console.log(total);

