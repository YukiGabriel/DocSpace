const btn = document.querySelectorAll('#card');
const overlay = document.getElementById('overlay');
const closeModalBtn = document.getElementById('close-modal');

const planets = [
  { name: "Mercúrio", description: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol." },
  { name: "Vênus", description: "Vênus é o segundo planeta do Sistema Solar e o mais quente." },
  { name: "Terra", description: "Terra é o terceiro planeta do Sistema Solar e o único conhecido com vida." },
  { name: "Marte", description: "Marte é o quarto planeta do Sistema Solar e conhecido como 'Planeta Vermelho'." },
  { name: "Júpiter", description: "Júpiter é o maior planeta do Sistema Solar e um gigante gasoso." },
  { name: "Saturno", description: "Saturno é o sexto planeta do Sistema Solar e famoso por seus anéis." },
  { name: "Urano", description: "Urano é o sétimo planeta do Sistema Solar, um gigante gasoso com um eixo de rotação inclinado." },
  { name: "Netuno", description: "Netuno é o oitavo planeta do Sistema Solar, um gigante gasoso distante." }
]

let currentImageIndex = 0;

closeModalBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

btn.forEach((button, index) => {
  button.addEventListener('click', () => {
    const planet = planets[index];
    document.getElementById('modal-title').textContent = planet.name;
    document.getElementById('modal-description').textContent = planet.description;
    overlay.classList.remove('hidden');
  });
});

