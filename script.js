document.getElementById('noButton').addEventListener('mouseover', function(e) {
    const button = e.target;
    const container = button.parentNode;

    // Losujemy odstęp od krawędzi kontenera
    const offset = 20;

    // Obliczamy nową pozycję przycisku "Nie" w granicach kontenera
    let newLeft = Math.random() * (container.clientWidth - button.clientWidth - offset) + offset;
    let newTop = Math.random() * (container.clientHeight - button.clientHeight - offset) + offset;

    // Ustawiamy przycisk na nowej pozycji
    button.style.left = newLeft + 'px';
    button.style.top = newTop + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').innerText = 'Hapi hapi hapi :DDD';
    document.getElementById('hiddenImage').style.display = 'block';  // Zmiana stylu obrazka, aby był widoczny
});