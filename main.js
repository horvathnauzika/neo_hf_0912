import { papagajok } from "./adatok.js";
import Kartya from "./Kartya.js";
import Jatekter from "./Jatekter.js";


const taroloElem = $(".kartya")
let kartya = new Kartya(papagajok, taroloElem)

const kepekElem = $(".jatekter")
new Jatekter(papagajok, kepekElem)

$(window).on("kivalaszt", (event)=>{
    kartya.ujkep(event.detail)
})