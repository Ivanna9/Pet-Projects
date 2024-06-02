function simulateMontyHall(trials) {
    let stayWins = 0;
    let switchWins = 0;

    for (let i = 0; i < trials; i++) {
        // Случайный выбор правильной двери
        const winningDoor = Math.floor(Math.random() * 3);
        // Случайный выбор игрока
        const playerChoice = Math.floor(Math.random() * 3);

        // Если игрок остается с первоначальным выбором и выигрывает
        if (playerChoice === winningDoor) {
            stayWins++;
        } else {
            switchWins++;
        }
    }

    console.log(`Out of ${trials} trials:`);
    console.log(`Staying wins: ${stayWins} (${(stayWins / trials * 100).toFixed(2)}%)`);
    console.log(`Switching wins: ${switchWins} (${(switchWins / trials * 100).toFixed(2)}%)`);
}

// Запускаем симуляцию 10000 раз
simulateMontyHall(100000);
