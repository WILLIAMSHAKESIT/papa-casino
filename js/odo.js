var jp_e = document.querySelector("#JackpotMoney");

var jp_om = new Odometer({
    el: jp_e,
    value: 0,
    format: "(,ddd).dd",
});

setTimeout(function(){ 
    var jppp = (new Date).getTime() + "";
    jppp = jppp.substring(2, 12) / 100 + 1455434 + "",
    0 === parseInt(jppp.substr(0, -1)) && console.log("0");
    jp_om.update(jppp);
}, 1000);