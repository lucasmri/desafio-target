function solution() {
  return `
    Ligue o primeiro interruptor e espere 5 minutos. 
    Desligue o primeiro interruptor.
    Ligue o segundo interruptor e deslique rapidamente.

    Vá à primeira sala:

    Se a lâmpada estiver quente, ela é controlada pelo primeiro interruptor.
    Se a lâmpada estiver morna, ela é controlada pelo segundo interruptor.
    Se a lâmpada estiver fria, ela é controlada pelo terceiro interruptor, que ainda não foi ligado.

    Vá à segunda sala:

    Agora você já sabe qual lâmpada corresponde ao primeiro interruptor, basta saber qual lâmpada é controlada pelo segundo, e o terceiro ficará óbvio.

    Repita os mesmos passos: 

    Se a lâmpada estiver quente, ela é controlada pelo primeiro interruptor.
    Se a lâmpada estiver morna, ela é controlada pelo segundo interruptor.
    Se a lâmpada estiver fria, ela é controlada pelo terceiro interruptor, que ainda não foi ligado.

    Pronto, agora você já sabe qual interruptor corresponde a cada lâmpada.
  `;
}

console.log(solution());