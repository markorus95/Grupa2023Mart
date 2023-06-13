import { FirmView } from "./FirmView.js";
import { Firma } from "./Firma.js";
import { Radnik } from "./Radnik.js";

const r1=new Radnik(1,"Radnik1",2002,34);
const r2=new Radnik(2,"Radnik2",3444,33);
const r3=new Radnik(3,"Radnik3",7000,31);
const r4=new Radnik(4,"Radnik4",5000,37);
const r5=new Radnik(5,"Radnik5",4000,34);

let niz1=[r1,r2,r3];
let niz2=[r4,r5];

const firma=new Firma("Comtrade",niz1);
const firma2=new Firma("Microsoft",niz2);

const view1=new FirmView(firma);
const view2=new FirmView(firma2);



view1.crtaj();
view2.crtaj();