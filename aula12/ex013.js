var agora = new Date();
var diaSem = agora.getDay();

diaSem = 9
switch (diaSem) {
    case 0:
        console.log("Hoje é Domingo");
        break;
    case 1:
        console.log("Hoje é Segunda-feira");
        break;
    case 2:
        console.log("Hoje é terça-feira");
        break;
    case 3:
        console.log("Hoje é quarta-feira");
        break;
    case 4:
        console.log("Hoje é quinta-feira");
        break;
    case 5:
        console.log("Hoje é sexta-feira");
        break;
    case 6:
        console.log("Hoje é Sábado");
        break;
    default:
        console.log('Dia invalido')
}
