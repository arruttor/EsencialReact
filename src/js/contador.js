function Contador(){
    this.numero = 0;

    this.incrementar = function (){
        this.numero++;
    }
    this.decrementar = function () {
        this.numero--;
    }
}


const Contador1 = new Contador();

Contador1.incrementar();
Contador1.incrementar();
Contador1.incrementar();
Contador1.incrementar();
Contador1.incrementar();

console.log(Contador1.numero)