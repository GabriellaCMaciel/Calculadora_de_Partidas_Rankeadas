let jogador = (resultadoPartidas(50, 17))

function resultadoPartidas(vitorias, derrotas) {
    saldoPartidas = vitorias - derrotas
    return saldoPartidas
}

function rankPartidas(saldoPartidas) {
    switch (true) {

        case (saldoPartidas <= 10):
            return "Ferro";
            break
        case (saldoPartidas >= 11 && saldoPartidas <= 20):
            return "Bronze";
            break
        case (saldoPartidas >= 21 && saldoPartidas <= 50):
            return "Prata";
            break
        case (saldoPartidas >= 51 && saldoPartidas <= 80):
            return "Ouro";
            break
        case (saldoPartidas >= 81 && saldoPartidas <= 90):
            return "Diamante";
            break
        case (saldoPartidas >= 91 && saldoPartidas <= 100):
            return "Lendário";
            break
        case (saldoPartidas >= 101):
            return "Imortal";
            break
    }
}

let nivel = rankPartidas(saldoPartidas)

console.log(`O Herói tem de saldo de ${saldoPartidas} e está no nível de ${nivel}`)