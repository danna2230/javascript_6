





let numero = 42;
console.log(numero);
let persona = {
    nombre:"pepito",
    edad: 151,
    estatura:168
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.estatura);
console.log(["nombre"]);
persona.edad = 16;
console.log(["edad"]);
console.log(persona.edad);
persona.estatura = 152;
console.log(persona.estatura);

persona["nombre"] = "miguel";

console.log (persona["nombre"]);

let propiedad_1 = "equipo";
persona[propiedad_1] = "real madrid";
console.log(persona);

delete persona.estatura;
console.log(persona);

let animales = ["chanchito","caballo","gallina","loro"];
console.log(animales[2]);
 
animales[4] = "perro";
console.log(animales);

animales[10] = "jichi";
console.log(animales);

console.log(typeof animales);

