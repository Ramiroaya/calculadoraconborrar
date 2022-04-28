let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnSumar = <HTMLButtonElement>document.getElementById("btnSumar");
let btnRestar = <HTMLButtonElement>document.getElementById("btnRestar");
let btnMultiplicar = <HTMLButtonElement>(
  document.getElementById("btnMultiplicar")
);
let btnDividir = <HTMLButtonElement>document.getElementById("btnDividir");
let btnPotencia = <HTMLButtonElement>document.getElementById("btnPotencia");
let btnBorrar = <HTMLButtonElement>document.getElementById("btnBorrar");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let rotulo3 = <HTMLParagraphElement>document.getElementById("rotulo3");
let rotulo4 = <HTMLParagraphElement>document.getElementById("rotulo4");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");

function sumar(numero1: number, numero2: number): number {
  return numero1 + numero2;
}
function restar(numero1: number, numero2: number): number {
  return numero1 - numero2;
}
function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}
function dividir(numero1: number, numero2: number): number {
  return numero1 / numero2;
}
function potenciar(base: number, exponente: number): number {
  return Math.pow(base, exponente);
}
function borrar(numero1: number, numero2: number) {
  numero1 = 0;
  numero2 = 0;
}
//rotulo1.innerHTML = "Ingrese el primer digito";
//rotulo2.innerHTML = "Ingrese el segundo digito";
rotulo3.innerHTML = "Elija la operacion a realizar";

btnEnviar1.addEventListener("click", () => {
  let primerNumero = Number(dato1.value);

  btnEnviar2.addEventListener("click", () => {
    let segundoNumero = Number(dato2.value);

    btnSumar.addEventListener("click", () => {
      let resultado = Number(sumar(primerNumero, segundoNumero));
      rotulo4.innerHTML = " La suma de los numeros es:" + resultado;
      console.log("La suma de los numeros es:" + resultado);
    });
    btnRestar.addEventListener("click", () => {
      let resultado = restar(primerNumero, segundoNumero);
      rotulo4.innerHTML = "La resta de los numeros es:" + resultado;
      console.log("La resta de los numero es:" + resultado);
    });
    btnMultiplicar.addEventListener("click", () => {
      let resultado = multiplicar(primerNumero, segundoNumero);
      rotulo4.innerHTML = "La multiplicacion de los numeros es:" + resultado;
      console.log("La multiplicacion de los numero es:" + resultado);
    });
    btnDividir.addEventListener("click", () => {
      let resultado = dividir(primerNumero, segundoNumero);
      rotulo4.innerHTML = "La division de los numeros es:" + resultado;
      console.log(" La division de los numeros es:" + resultado);
    });

    btnPotencia.addEventListener("click", () => {
      if (segundoNumero === 0) {
        console.log("El resultado es:1");
      } else {
        let resultado = Number(potenciar(primerNumero, segundoNumero));
        rotulo4.innerHTML = "La potencia es:" + resultado;
        console.log("La potencia  es:" + resultado);
      }
    });
    btnBorrar.addEventListener("click", () => {
      borrar(primerNumero, segundoNumero);
      rotulo4.innerHTML =
        "Los numero ingresados fueron borrados, por favor vuelva a ingresar otros numeros";
      console.log(
        "Los numeros ingresados fueron borrados, por favor vuelva a ingresar otros numeros"
      );
    });
  });
});
