let Nota

Nota = prompt("Qual Foi Sua Nota?")

switch(Nota.toUpperCase()){
    case"A":
        alert("Excelente")
        break;
    
    case"B":
        alert("Ótimo")
        break;

    case"C":
        alert("Bom")
        break;

    case"D":
        alert("Regular")
        break;

    case"E":
        alert("Ruim")
        break;

    case"F":
        alert("Nos vemos de novo ano que vem...")
        break;
    
    default:
        alert("Desculpe não conseguimos logalizar sua nota")
        break;
}