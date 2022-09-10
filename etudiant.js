function Tmatiere(code, nom, volumeHoraire, prof, assistant, drapeau) {
  this.code = code;
  this.nom = nom;
  this.volumeHoraire = volumeHoraire;
  this.prof = prof;
  this.assistant = assistant;
  this.drapeau = drapeau;
}
function Tdebouche(code, nom) {
  this.code = code;
  this.nom = nom;
}
function Tparcours(code, nom, debouches) {
  this.code = code;
  this.nom = nom;
  this.debouches = debouches;
}
function Tnote(code, valeur) {
  this.code = code;
  this.valeur = valeur;
}
function Tetudiant(
  {mat,
  nom,
  dateNaiss,
  lieuNaiss,
  sexe,
  taille,
  poids,
  parcours,
  }
) {
  this.mat = mat;
  this.nom = nom;
  this.dateNaiss = dateNaiss;
  this.lieuNaiss = lieuNaiss;
  this.sexe = sexe;
  this.taille = taille;
  this.poids = poids;
  this.parcours = parcours;
}

Tetudiant.prototype.inscription = function(){
  const {mat, nom, dateNaiss, lieuNaiss, sexe, taille, poids, parcours} = this

  const objet = {
    mat : mat,
    nom : nom,
    dateNaiss : dateNaiss,
    lieuNaiss : lieuNaiss, 
    sexe : sexe, 
    taille : taille,
    poids : poids,
    parcours : parcours
  }

  if(localStorage.getItem('Etudiant') === null){
    let data = []
    data.push(objet)
    localStorage.setItem('Etudiant', JSON.stringify(data))
  }else {
    let data = JSON.parse(localStorage.getItem('Etudiant'))
    data.push(objet)
    localStorage.setItem('Etudiant', JSON.stringify(data))
  }
}

let btnnouv = document.getElementById("nouv");
btnnouv.addEventListener('click', function () {
  let blocetud = document.getElementById("blocetud");
  blocetud.style.display = "block";
});

let etu
let i = 0;
let btnregister = document.getElementById("register");
btnregister.addEventListener('click', function () {
  let sexe = document.getElementById("Mas");

  const objet = {
    mat: document.getElementById("matricule").value,
    nom: document.getElementById("nom").value,
    dateNaiss: document.getElementById("date").value,
    lieu: document.getElementById("lieu").value,
    taille: document.getElementById("taille").value,
    poids: document.getElementById("poids").value,
    parcours: document.getElementById("parcours").value,
    sexe: document.getElementById("Mas").value,
  };

  const Sexe = () => {
    if (sexe.checked) return "HOMME";
    else return "FEMME";
  };
   


  etu = new Tetudiant(objet);
  i++;
  tabl = document.getElementById("tab");
  tr = document.createElement("tr");
  td1 = document.createElement("td");
  td1.innerHTML = i;
  td2 = document.createElement("td");
  td2.innerHTML = etu.mat;
  td3 = document.createElement("td");
  td3.innerHTML = "<a href='accueil.html'>" + etu.nom + "</a>";
  td5 = document.createElement("td");
  td5.innerHTML = etu.parcours;
  td6 = document.createElement("td");
  td6.innerHTML = etu.sexe;
  td7 = document.createElement("td");
  let date = new Date(etu.dateNaiss);
 let date2=new Date()
 let d22=date2.getFullYear()

  let an = date.getFullYear();
  
  td7.innerHTML = (d22 - an);
  td8=document.createElement("button")
  td8.innerHTML="+";

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tabl.appendChild(tr);

  document.getElementById("matricule").value = "";
  document.getElementById("nom").value = "";
  document.getElementById("date").value = "";
  document.getElementById("lieu").value = "";
  document.getElementById("taille").value = "";
  document.getElementById("poids").value = "";
  document.getElementById("parcours").value = "";
  document.getElementById("Mas").value = "";
});

let btnajou = document.getElementById("ajouter");
btnajou.addEventListener("click", function () {
  let blocmat = document.getElementById("form1");
  blocmat.style.display = "block";
});

let btn = document.getElementById("bouton");
//let mat=new Tmatiere('B1', 'Bootstrap', 20, 'Dr Rodrigue', 'Sandrine', 'TP');
let tabl;
let tr;
let td1, td2, td3, td4, td5;
btn.addEventListener("click", (e) => {
  e.preventDefault();


  let mat = new Tmatiere(
    document.getElementById("code1").value,
    document.getElementById("nom1").value,
    document.getElementById("volume1").value,
    document.getElementById("prof").value,
    document.getElementById("ass").value,
    document.getElementById("drap").value
  );

  table = document.getElementById("table");
  tr = document.createElement("tr");
  td1 = document.createElement("td");
  td1.innerHTML = mat.code;
  td2 = document.createElement("td");
  td2.innerHTML = mat.nom;
  td3 = document.createElement("td");
  td3.innerHTML = mat.volumeHoraire;
  td4 = document.createElement("td");
  td4.innerHTML = mat.prof;
  td5 = document.createElement("td");
  td5.innerHTML = mat.assistant;
  td6 = document.createElement("td");
  td6.innerHTML = mat.drapeau;


  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  table.appendChild(tr);

  document.getElementById("code1").value = "";
  document.getElementById("nom1").value = "";
  document.getElementById("volume1").value = "";
  document.getElementById("prof").value = "";
  document.getElementById("ass").value = "";
  document.getElementById("drap").value = "";
});

let newnote = document.getElementById("newnote");
newnote.addEventListener("click", function () {
  let nnote = document.getElementById("notef");
  nnote.style.display = "block";
});

let ajoutnote=document.getElementById("ajoutnote");
  ajoutnote.addEventListener('click',function(e) {
    e.preventDefault();


let note= new Tnote(
  document.getElementById("matiere").value,
  document.getElementById("note").value
);
tablen = document.getElementById("tablen");
tr = document.createElement("tr");
td1 = document.createElement("td");
td1.innerHTML = note.code;
td2 = document.createElement("td");
td2.innerHTML = note.valeur;

tr.appendChild(td1);
  tr.appendChild(td2);
tablen.appendChild(tr);

  document.getElementById("matiere").value = "";
  document.getElementById("note").value = "";
  });