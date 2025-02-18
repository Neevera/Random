let currentBackground;

function changeBackground() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentBackground);
    document.body.style.backgroundColor = newColor;
    currentBackground = newColor;
}

setInterval(changeBackground, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Aku mau nanya, kamu mau tau aku pengen nanya apa atau ga?</h2>
        <button id="noBtn" style="position: absolute; left: 50px; top: 150px; background-color: red;">Gamau</button>
        <button id="yesBtn" style="background-color: green;">Iya, apa tuh?</button>
    `;

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    yesBtn.addEventListener("click", () => {
        nextPage();
    });
});

function nextPage() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Pencet salah satu ini aja ya, semoga ga salah pilih</h2>
        <button id="btn1" style="background-color: blue;">Pilih ini</button>
        <button id="btn2" style="background-color: blue;">Atau ini</button>
    `;

    document.getElementById("btn1").addEventListener("click", () => {
        finalPage();
    });

    document.getElementById("btn2").addEventListener("click", () => {
        const app = document.getElementById("app");
        app.innerHTML = `<h2>Jebakan!</h2><img src="hantu-placeholder.jpg" alt="Hantu" />`;
    });
}

function finalPage() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Kamu lebih suka makan makanan yang pedes banget tapi enak atau makanan yang pedes biasa tapi gaenak?</h2>
    `;
}
