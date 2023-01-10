const day_of_week = new Date().getDay()
//console.log(`É o ${day_of_week}º dia da semana útil.`)

switch (day_of_week) {
    case 1:
        week = "Segunda-feira"
        break;

    case 2:
        week = "Terça-feira"
        break;

    case 3:
        week = "Quarta-feira"
        break;

    case 4:
        week = "Quinta-feira"
        break;

    case 5:
        week = "Sexta-feira"
        break;

    case 6:
        week = "Sábado"
        break;

    case 7:
        week = "Domingo"
        break;

    default:
        break;



}
//console.log(week) //NOME DO DIA DA SEMANA (PELO MEU SWITCH)

//console.log(new Date().getDay()) //DIA DA SEMANA (Nº)

//console.log(new Date().getDate())//DIA DO MÊS

//=========================================================
//Mostrando mês (em número):
let number_month = (new Date().getMonth() + 1) //JS inicia o mês em '0', esse +1 corrige

//'if' usa 23 linhas
if (number_month === 1) {
    current_month = "Janeiro"
} else if (number_month === 2) {
    current_month = "Fevereiro"
} else if (number_month === 3) {
    current_month = "Março"
} else if (number_month === 4) {
    current_month = "Abril"
} else if (number_month == 5) {
    current_month = "Maio"
} else if (number_month === 6) {
    current_month = "JuNho"
} else if (number_month === 7) {
    current_month = "JuLho"
} else if (number_month === 8) {
    current_month = "Agosto"
} else if (number_month === 9) {
    current_month = "Setembro"
} else if (number_month === 10) {
    current_month = "Outubro"
} else if (number_month === 11) {
    ccurrent_month = "Novembro"
} else
    current_month = "Dezembro"

    //console.log(current_month)
//=========================================================

//ANO apenas
//console.log(new Date().getFullYear())

//Deixando hora loca:
//console.log(new Date().toLocaleTimeString('pt-BR'))

console.log(`${week}, ${(new Date().getDate())} de ${current_month}(${(new Date().getMonth() + 1)}) de ${(new Date().getFullYear())}. Horário de brasília: ${(new Date().toLocaleTimeString('pt-BR'))}`)
//console.log(`Horário: ${(new Date().toLocaleTimeString('pt-BR'))}`)
console.log("")
//hora universal. No Brasil é UTC - 3
console.log(`UNIVERSAL TIME:`) 
console.log(new Date())