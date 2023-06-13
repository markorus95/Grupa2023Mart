export class FirmView{

    constructor(firma){
        if (!Array.isArray(firma.radnici)){
            throw new Error("Nepravilan objekat tj nije niz!")
        }
        this.firma=firma;
    }

    crtaj(){

        const nazivFirme=document.createElement("div");
        nazivFirme.innerHTML=this.firma.naziv;
        document.body.appendChild(nazivFirme);

        const tabela=document.createElement("table");
        document.body.appendChild(tabela);

        this.firma.radnici.forEach(element => {
            
        const red=document.createElement("tr");
         tabela.appendChild(red);

         const naziv=document.createElement("td");
         naziv.innerHTML=element.naziv;
         red.appendChild(naziv);

         const plata=document.createElement("td");
         plata.innerHTML=element.plata;
         red.appendChild(plata);
        });

        const e=document.createElement("p");
        e.textContent="Total plate je "+ this.firma.vratiUkupanZbirPlata();
        document.body.appendChild(e);
            




    }
}