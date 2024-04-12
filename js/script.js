// Array di oggeti del team

const memberTeam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "./img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "./img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

//  Stampo in console le informazioni di ciascun membro del team
// utilizzo forEach()
memberTeam.forEach((member) => {
  console.log(
    `Name: ${member.name}, Role: ${member.role}, Photo:${member.photo}`
  );
});

// Prelevo il div per inserire  le card in pagina
const teamCard = document.getElementById("team-card");

memberTeam.forEach((member) => {
  // Creo le stringhe da stampare
  const printToHtml = `
        <div class="col-lg-4 col-md-6 mb-2">
            <div class="card">
                <img src="${member.photo}" alt="">
                <div class="card-body">
                    <h5 class="card-title text-center">${member.name}</h5>
                    <p class="card-text text-center">${member.role}</p>
                </div>
            </div>
        </div>
    `;

  // Stampa in pagina
  teamCard.innerHTML += printToHtml;
});


// SUPER BONUS
// Creare un form tramite quale si potrà aggiungere membri del team

// Clikc bottone:
//  - prelevare dati dal form
//  - creare oggetto del nuovo membro
//  - aggungere il membro nell'array
//  - stampa del nuovo membro in pagina
//  - ripulire i campi del form