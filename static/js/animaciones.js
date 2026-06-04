document.addEventListener("DOMContentLoaded", () => {

    const contador = document.getElementById("contador");

    if (!contador) return;

    const total = parseInt(contador.dataset.total);

    let actual = 0;

    const intervalo = setInterval(() => {

        actual++;

        contador.textContent = actual;

        if (actual >= total) {
            contador.textContent = total;
            clearInterval(intervalo);
        }

    }, 80);

});