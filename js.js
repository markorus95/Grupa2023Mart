// let obj = {
//     ime: "radovan",
//     prezime: "brajovic"
// }
alert('radi');
// console.log(window.);
// console.log(document.querySelector("#pera"))

// function Zaposleni(idsdf,ime,prezime,zanimanje,jmbg,godine,adresa,plata){
// this.id=idsdf;
// this.ime=ime;
// this.prezime=prezime;
// this.zanimanje=zanimanje;
// this.jmbg=jmbg;
// this.godine=godine;
// this.adresa=adresa;
// this.plata=plata;

// }

// Zaposleni.prototype.vratiPLatu=function(){//citaj i rati platu povecanu 10%

//     return this.plata*1.1;
// }

// Zaposleni.prototype.setujPlatu=function(){//setuj za 50%

//     this.plata=this.plata*1.5;
// }

// const zapos1=new Zaposleni(1,"Radovan","Brajovic","prof","332131231",2003,"Dasdaad",50000);
// console.log(zapos1)



// function Rukovodilac(id,ime,prezime, zanimanje,jmbg,godina,adresa,plata,koefisijent,sluzba){

//     Zaposleni.call(this,id,ime,prezime, zanimanje,jmbg,godina,adresa,plata);
//     this.koefisijent=koefisijent;
//     this.sluzba=sluzba;


// }
// Rukovodilac.prototype.prikaziAdresu=function(){

//     return this.adresa;
// }


// Rukovodilac.prototype=Object.create(Zaposleni.prototype);
// Rukovodilac.prototype.constructor=Rukovodilac;


// const rukov1=new Rukovodilac(2,"rasha","brajovic","adas","23422432",38,"DAdsad",22222,6,"ikt");
// console.table(rukov1)



class Zaposleni {
#id;
#ime;
#prezime;


    constructor(id, ime, prezime, zanimanje, jmbg, godine, adresa, plata) {
        this.#id = id;
        this.#ime = ime;
        this.#prezime = prezime;
        this.zanimanje = zanimanje;
        this.jmbg = jmbg;
        this.godine = godine;
        this.adresa = adresa;
        this.plata = plata;
    }
    vratiPlatu() {
        return this.plata;
    }
    setujPlatu(plataNova) {
        this.plata = plataNova;
    }

    get ime(){
 
        return this.#ime;
    }

set ime(novo){
    this.#ime=novo;
}


}
const zapsoleni1 = new Zaposleni(1, "radovan", "brajovic", "dasdas", "24869", 2014, "DAdsa", 23245);
// zapsoleni1.ime="Milos"

zapsoleni1.ime="MIlos";
console.log(zapsoleni1.ime);

class Rukovodilac extends Zaposleni {

    constructor(id, ime, prezime, zanimanje, jmbg, godine, adresa, plata, koef, sluzba) {
        super(id, ime, prezime, zanimanje, jmbg, godine, adresa, plata);
        this.koef = koef;
        this.sluzba = sluzba;


    }

    vratiPlatu(){

        return 2;
    }

}

const rukov1=new Rukovodilac(2,"rasha","brajovic","adas","23422432",38,"DAdsad",22222,6,"ikt");
console.table(rukov1)






