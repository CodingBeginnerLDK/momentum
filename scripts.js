//const : 상수, 바뀌지 않는 변수
//let : 값이 바꾸는게 가능
//변수명은 공백이 없어야됨, 공백이 필요하다면 다음 단어가 대문자로

const playerName = "ldk";
const playerPoint = 121212;
const playerHandsome = false;
const playerFat = "little bit";

//Object
const player =  {
    name : "ldk",
    point : 121212,
    handsome : false,
    fat : "little bit"
}

console.log(player);
console.log(player.name);
console.log(player["point"]);
console.log(player.handsome);
console.log(player.fat);