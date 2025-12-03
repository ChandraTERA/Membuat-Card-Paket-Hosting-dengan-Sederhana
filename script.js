// function setActive(card) {
//     const cards = document.querySelectorAll(".card");
//     cards.forEach(c => c.classList.remove("active"));
//     card.classList.add("active");
// }

function setActive(card) {
    const cards = document.querySelectorAll(".card");

    // hapus class active dari semua card
    cards.forEach(c => c.classList.remove("active"));

    // aktifkan card yang sedang diklik
    card.classList.add("active");

    // ambil label-top dari kedua card
    const labels = document.querySelectorAll(".label-top");

    // reset semua label menjadi TERPOPULER
    // labels.forEach(label => {
    //     label.textContent = "TERPOPULER";
    // });

    // jika card yang diklik adalah Premium → ubah menjadi Langganan
    if (card.querySelector(".title").textContent.trim() === "Basic") {
        card.querySelector(".label-top").textContent = "PEMULA";
    }
    
     if (card.querySelector(".title").textContent.trim() === "Medium") {
        card.querySelector(".label-top").textContent = "PRO";
    }
  
  if (card.querySelector(".title").textContent.trim() === "Advanced") {
        card.querySelector(".label-top").textContent = "LANGGANAN";
    }
  
  if (card.querySelector(".title").textContent.trim() === "VIP") {
        card.querySelector(".label-top").textContent = "TERPOPULER";
    }
}

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
}

