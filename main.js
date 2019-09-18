//全てのToDoと作業中ToDoと完了済みToDoを格納しておく配列を作成する
const toDoListAll = [];
let selectedList = "all";
var divToDoList = document.getElementById("toDoList");
var radioButtons = document.getElementById("radioButtons");

//ID、TODO、STATUSを含むオブジェクトに作り替える
const objectizeToDoList = () => {
    toDoListAll.length = 0;
    var idNum = 0;
    for (var toDo of toDoListAll) {
        toDoListAll.push({ID: idNum, TODO: toDo, STATUS: "作業中"});
        idNum ++;
    }
}

//toDoListの配列の中に含まれているアイテムを取り出して、HTMLで表示するためのリスト化を行っている。
const showToDoList = () => {
    var toDoListWithId = "";
    console.log(selectedList);
    for (let i = 0; i < toDoListAll.length; i ++){
        //ラジオボタンで選択されている項目に合わせて表示する項目を変える
        if(selectedList === "all"){
            toDoListWithId += `<div id = ${i}}>${i+1} ${toDoListAll[i]["TODO"]} <input type = "button" value = ${toDoListAll[i]["STATUS"]}><input type = "button" value = "削除"></div>`;
            console.log(toDoListAll[i]["STATUS"]);
        }else{
            if (toDoListAll[i]["STATUS"] == selectedList){
                
                toDoListWithId += `<div id = ${i}}>${i+1} ${toDoListAll[i]["TODO"]} <input type = "button" value = ${toDoListAll[i]["STATUS"]}><input type = "button" value = "削除"></div>`;

            }
        }
    }
    document.getElementById("toDoList").innerHTML = toDoListWithId;
}

//ラジオボタンが押された時に発生する動作
radioButtons.addEventListener("click", (selectedRadio) => {
    if (selectedRadio.target.value != null){
        //ラジオボタン部分がクリックされた時にだけ表示リスト更新
        selectedList = selectedRadio.target.value;
        showToDoList();
    }
})


//ボタンがクリックされたときに発生する動作を定義する
divToDoList.addEventListener("click", (selectedToDo) => {
    //クリックされたボタンが削除だった場合には、こちらのケースが作動する
    if (selectedToDo.target.value == "削除") {
        indexNum = parseInt(selectedToDo.target.parentNode.id);
        toDoListAll.splice(indexNum,1);
    //クリックされたボタンがステータスボタンだった場合には、こちらのケースが作動する
    } else {
        indexNum = parseInt(selectedToDo.target.parentNode.id);
        const status = toDoListAll[indexNum]["STATUS"];
        
        if (status == "作業中") {
            toDoListAll[indexNum]["STATUS"] = "完了";
        }else {
            toDoListAll[indexNum]["STATUS"] = "作業中";
        }
    }
    showToDoList();
})


//新しいTodoを追加して、表示するToDoリストを更新している
document.getElementById("addToDo").addEventListener('click', () => {
    toDoListAll.push({ID : 0, TODO : document.getElementById("toDo").value, STATUS : "作業中"});
    showToDoList();
},)