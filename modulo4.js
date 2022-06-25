//String con mi nombre
const nombre = "Nicolas ";

//String con mi apellido
const apellido = "Fontana";

//String que concatena nombre y apellido
let estudiante = `${nombre}${apellido}`
console.log(estudiante)

//String que convierte estudiante en mayus
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

//String que convierte estudiante en minus
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

//variable con el numero total de caracteres de estudiante
let numeroLetras = estudiante.length
console.log(numeroLetras)

//variable con la primera letra del nombre
let posicionPrimeraLetraNombre = estudiante.indexOf("Nicolas")
console.log(posicionPrimeraLetraNombre)
let primeraLetraNombre = estudiante.charAt(0)
console.log(primeraLetraNombre)

//Variable con la ultima letra del apellido
let posicionUltimaLetraApellido = estudiante.length - 1
console.log(posicionUltimaLetraApellido)
let UltimaLetraApellido = estudiante.charAt(posicionUltimaLetraApellido)
console.log(UltimaLetraApellido)

//String que elimina los espacios de la variable estudiante
let sinEspacios = `${nombre.trim()}${apellido.trim()}`
console.log(sinEspacios)

//Variable booleana que dice si nombre esta contenido en "estudiante"
let isContent = estudiante.includes(nombre)
console.log(isContent)