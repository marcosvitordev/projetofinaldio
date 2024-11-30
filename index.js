const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o nome do herói
rl.question("Qual é o nome do herói? ", (nome) => {
  // Solicita a XP do herói
  rl.question("Qual é a quantidade de XP do herói? ", (xp) => {
    xp = parseInt(xp); // Converte a XP para número inteiro

    let nivel;

    // Verifica o nível de XP e atribui o nível correspondente
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else if (xp >= 10001) {
      nivel = "Radiante";
    }

    // Exibe a mensagem final com o nome e o nível do herói
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

    // Fecha a interface de leitura
    rl.close();
  });
});