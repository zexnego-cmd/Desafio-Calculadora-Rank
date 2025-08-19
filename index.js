let getRankTT = soma(90, 50)
let value = (90 - 50)


function soma(n1, n2){
    let rank = n1 - n2
    if (rank <= 10){
    return "Ferro"
}else if (rank <= 20){
    return "Bronze"
}else if (rank <= 50){
    return "Prata"
}else if (rank <= 70){
    return "Ouro"
}else if (rank <= 80){
    return "Platina"
}else if (rank <= 90){
    return "Ascendente"
}else if (rank <= 100){
    return "Imortal"
}else {
    return "Radiante"
}
}

console.log ("O Herói tem de saldo de " + value + " está no nível de " + getRankTT)