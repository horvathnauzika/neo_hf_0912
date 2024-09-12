export default class Kartya{
    #lista=[]
    #szuloElem;
    #index = 0;

    constructor(lista, szuloElem){
        this.#lista=lista;
        this.#szuloElem=szuloElem;
        this.papagajKiir();
    }

    papagajKiir(){
        this.#szuloElem.html('')
        this.#szuloElem.append(
        `
            <div>
            <h2>${this.#lista[this.#index].cim}</h2>
            <img src="${this.#lista[this.#index].kep}" alt="papagaj">
            <p>${this.#lista[this.#index].leiras}</p>
            <button class="bal"><<</button>
            <button class="jobb">>></button>
            </div>
        `
        )
        $(".bal").on("click", ()=>{
            this.elozoKep();
        })
        $(".jobb").on("click", ()=>{
            this.kovetkezoKep();
        })
    }

    ujkep(index){
        this.#index = index;
        this.papagajKiir();
    }

    kovetkezoKep(){
        if(this.#index!=this.#lista.length-1){
            this.#index+=1
        }
        this.papagajKiir();
    }

    elozoKep(){
        if(this.#index != 0){
            this.#index-=1
        }
        this.papagajKiir();
    }
}