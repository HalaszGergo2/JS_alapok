window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
  
});

function elemekElerese1() {
    let tartalom = $("#f1").html()
    console.log(tartalom)
}
function elemekElerese2() {
$("#ide").html("<p>Jó reggelt!</p>")
}
function elemekElerese3() {
    $(".ide").html("<p>Jó reggelt</p>")

}
function elemekElerese4(){
    
    let szoveg = ""
    for (let index = 0; index < 5; index++) {
        let generaltSzam = Math.floor(Math.random()*20)+10
        szoveg += `
         <ul>
            <li>${generaltSzam}</li>
        </ul>
        `
    }
    szoveg += `<button id="gomb">Átmásol</button>`
    $(".lista").html(szoveg)
}
function elemekFormazasa1(){
    const MEGFOG = $(".lista").addClass("formazott")

}

function esemenyKezeles1(){
    const TART=$(".lista ")
    const IDE=$(".lista button")
    IDE.on("click", function(){
        $(".kattintasutan").html(TART.html())
    })
    

}

function esemenyKezeles2(){
    const ELEM=$(".feladat")
    ELEM.html("<button>OK</button>")
    const GOMB=$(".feladat button")
    GOMB.on("click", function(){
        $(".feladat").html("<div id='kep'><img src='kutya.jpg'></div>")
        esemenyKezeles3();
    })
}

function esemenyKezeles3(){
    const KEP=$("#kep img")
    KEP.on("mouseenter", function(event){
        console.log("valami")
        $(event.target).css("width","100px")
    })
}