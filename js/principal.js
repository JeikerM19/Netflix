import Cl_suscriptor from "./Cl_suscriptor.js";
import Cl_agencia from "./Cl_agencia.js";

let suscriptor1 = new Cl_suscriptor(15457858, "A");
let suscriptor2 = new Cl_suscriptor(15457859, "B");
let suscriptor3 = new Cl_suscriptor(15457667, "B");

let agencia = new Cl_agencia();

agencia.procesarSuscriptor(suscriptor1);
agencia.procesarSuscriptor(suscriptor2);
agencia.procesarSuscriptor(suscriptor3);

let salida = document.getElementById("Salida");
salida.innerHTML += " <br> El suscriptor con la cedula " + suscriptor1.ced + " paga " + suscriptor1.precioPagar(); 
salida.innerHTML += " <br> El suscriptor con la cedula " + suscriptor2.ced + " paga " + suscriptor2.precioPagar();
salida.innerHTML += " <br> El suscriptor con la cedula " + suscriptor3.ced + " paga " + suscriptor3.precioPagar();
salida.innerHTML += " <br> Porcentaje de clientes que no pagaron servicio de conexión: " + agencia.porcNoConect();
salida.innerHTML += " <br> Cuál es el plan favoritos: " + agencia.planFav();