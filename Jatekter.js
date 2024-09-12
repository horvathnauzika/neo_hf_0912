export default class Jatekter{
    #lista=[]
    #taroloElem
    constructor(lista, taroloElem){
        this.#lista=lista
        this.#taroloElem=taroloElem
        this.kepekMegjelenit();
        this.esemenykezelo();
    }

    kepekMegjelenit(){
        this.#lista.forEach((elem, index) => {
            this.#taroloElem.append(            
                `
                <div class="card col-xl-3 col-lg-4 col-md-6 col-sm-12">
                   <div class="card-body">
                       <img id="papagaj_${index}" src="${elem.kep}" alt="papagaj" class="minikep">
                   </div>
               </div>
               `
            )
        });
    }

    esemenykezelo(){
        $(".minikep").on("click", (event)=>{
            let index= Number(event.target.id.split('_')[1])
            const e=new CustomEvent("kivalaszt", {detail:index})
            window.dispatchEvent(e)
        })
    }
}