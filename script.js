document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  const toggleAnimationButton = document.getElementById("toggle-animation");
  const animatedText = document.getElementById("animated-text");
  let animationPaused = false;

  // Função para calcular o próximo dia 14 e o nome do mês
  const getNext14th = () => {
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      let targetMonth = currentMonth + 1; // Próximo mês
      let targetYear = currentYear;

      if (targetMonth > 11) {
          targetMonth = 0; // Volta para Janeiro
          targetYear++;    // Incrementa o ano
      }

      const targetDate = new Date(targetYear, targetMonth, 14, 0, 0, 0);
      const monthNames = [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
          "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];

      return { targetDate, monthName: monthNames[targetMonth] };
  };

  const { targetDate, monthName } = getNext14th();

  // Atualizar o contador
  const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate - now; // Diferença em milissegundos

      if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          countdownElement.textContent = `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s para o dia 14 de ${monthName}`;
      } else {
          countdownElement.textContent = `Chegou o dia 14 de ${monthName}!`;
      }
  };

  // Controlar animação
  toggleAnimationButton.addEventListener("click", () => {
      if (animationPaused) {
          animatedText.style.animationPlayState = "running";
          toggleAnimationButton.textContent = "⏸ Pause";
      } else {
          animatedText.style.animationPlayState = "paused";
          toggleAnimationButton.textContent = "▶ Play";
      }
      animationPaused = !animationPaused;
  });

  updateCountdown(); // Atualiza imediatamente
  setInterval(updateCountdown, 1000); // Atualiza a cada segundo
});
