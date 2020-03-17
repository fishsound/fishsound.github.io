// JavaScript source code
var playerList = [ "Alex", "Nate", "Jony", "Clif"];

function onLoad() {
    createTable();
    populatePlayerList();
}

function createTable() {
    var table = document.getElementById("scoreTable");
    var text = "";

    for (p = 0; p < playerList.length; i++) {
        text += "<tr> <td>" + playerList[p] + "</td > <td>&nbsp;</td> <td>&nbsp;</td> </tr >";
    }
    table.innerHTML += text;
}

function populatePlayerList() {
    var list = document.getElementById("PlayerList");
    for (p = 0; p < playerList.length; i++) {
        text += "<option>" + playerList[p] + "</option>";
    }
    list.innerHTML = <option>Alex</option>
}