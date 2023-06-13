export class Firma{


    constructor(naziv,radnici){
        this.naziv=naziv;
        this.radnici=radnici;
    }

    vratiUkupanZbirPlata(){
        
        let zbir=0;

        this.radnici.forEach(element => {

            zbir=zbir+element.plata;
            
        });  
    return zbir;
    }
}