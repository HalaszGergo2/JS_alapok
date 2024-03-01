window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
});

function elemekElerese1() {
    const BEKIIR = document.querySelectorAll("section h2")[0]
    let tartalom = document.getElementById("f1").innerHTML
    console.log(tartalom)
}
function elemekElerese2() {
    const ELEM = document.getElementById("ide")
    ELEM.innerHTML = `
    <p>Jó reggelt!</p>
    `
}
function elemekElerese3() {
    const ELEMCLASS = document.getElementsByClassName("ide")[0]
    ELEMCLASS.innerHTML = `
    <p>Jó reggelt</p>
    `
}
function elemekElerese4(){
    const ELEMLISTA = document.getElementsByClassName("lista")[0]
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
    ELEMLISTA.innerHTML += szoveg
}
function elemekFormazasa1(){
    const MEGFOG = document.getElementsByClassName("lista")[0]
    MEGFOG.classList.add("formazott")
}

function esemenyKezeles1(){
    const GOMBMEG = document.querySelectorAll("#lista gomb")
    GOMBMEG[i].addEventListener("click", elemekElerese4)

}