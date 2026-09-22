let quartosDisponiveis = 5;
let reservaConfirma = true;

let statusReserva = (reservaConfirmada && quartoDisponiveis > 0) ? "Reversa confirmada"
                  : (quartosDisponiveis > 0) ? "Aguardando confirmação"
                  : "Sem quatos disponiveis";

console.log(statusReserva); // Saída: "Reserva confirmada"