soma(200, 148)

function soma(n1, n2){
    let rank = n1 - n2
        if (rank <= 10){
        let nivelXp = "Ferro"
            console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivelXp)
        }else if (rank <= 20){
            nivelXp = "Bronze"
            console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivelXp)
        }else if (rank <= 50){
            nivelXp ="Prata"
            console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivelXp)
        }else if (rank <= 80){
            nivelXp = "Ouro"
            console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivelXp)
        }else if (rank <= 90){
            nivelXp = "Diamante"
            console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivelXp)
        }else if (rank <= 100){
            nivelXp = "Lendario"
            console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivelXp)
        }else {
            nivelXp = "Imortal"
            console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivelXp)
        }
}

