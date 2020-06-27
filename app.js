function getNumber(num){
    var result = document.getElementById("history-value");
    result.value += num;
}
function clearResult(num){
    var result = document.getElementById("result-value");
    var history = document.getElementById("history-value");
    result.value = "0";
    history.value = ""
}
function getResult(){
    var history = document.getElementById("history-value");
    var result = document.getElementById("result-value")
    result.value = eval(history.value);
}
