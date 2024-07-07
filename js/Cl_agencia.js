export default class Cl_agencia{
    constructor() {
        this.conT = 0;
        this.contTC = 0;
        this.contTA = 0;
        this.contTB = 0;
    }
    procesarSuscriptor(sus){
        this.conT ++;
        if(sus.tipoPlan == "C"){
            this.contTC ++;
        }
        if(sus.tipoPlan == "A"){
            this.contTA ++;
        }
        if(sus.tipoPlan == "B"){
            this.contTB ++;
        }
        
    }
    porcNoConect(){
       return this.contTC * (100/this.conT);
    }
    planFav(){
        if(this.contTA > this.contTB && this.contTA > this.contTC){
            return "El Plan favorito fue el A";
        } else if(this.contTB < this.contTC){
            return "EL plan favorito es el C";
        } else if(this.contTB > this.contTC){
            return "El plan favorito es el B";
        } else{
            return "El plan A, B, C son favoritos por igual";
        }
        
    }
}