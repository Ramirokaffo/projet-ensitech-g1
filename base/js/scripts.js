// // document.addEventListener("DOMContentLoaded", function () {
//   // Gestion des onglets (Manuellement / Importer CSV)
//   const navLinks = document.querySelectorAll(".nav-link");
//   const forms = document.querySelectorAll("form");

//   navLinks.forEach((link, index) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();

//       // Retirer l'active des autres onglets
//       navLinks.forEach((nav) => nav.classList.remove("active"));

//       // Ajouter l'active à l'onglet cliqué
//       link.classList.add("active");

//       // Afficher le formulaire correspondant et masquer les autres
//       forms.forEach((form, formIndex) => {
//         form.style.display = formIndex === index ? "block" : "none";
//       });
//     });
//   });

//   // Par défaut, afficher le formulaire "Manuellement" et masquer l'autre
//   forms[0].style.display = "block"; // Formulaire "Manuellement"
//   if (forms[1]) forms[1].style.display = "none"; // Formulaire "Importer CSV" (si présent)

//   // Gestion de la soumission du formulaire "Manuellement"
//   const formManually = document.querySelector("form");
//   formManually.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Récupérer les données du formulaire
//     const formData = new FormData(formManually);

//     // Créer un objet pour stocker les données
//     const studentData = {};
//     formData.forEach((value, key) => {
//       studentData[key] = value;
//     });

//     // Afficher les données dans la console (remplacer par une action réelle)
//     console.log("Données du formulaire:", studentData);

//     // Exemple d'action : Envoi vers une API ou affichage dans la page
//     alert("Étudiant ajouté avec succès !");

//     // Réinitialiser le formulaire après soumission
//     formManually.reset();
//   });
// });
// Nouveau scripts
document.addEventListener("DOMContentLoaded", function () {
  // Gestion des onglets (Manuellement / Importer CSV)
  const navLinks = document.querySelectorAll(".nav-link");
  const forms = document.querySelectorAll("form");

  navLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Retirer l'active des autres onglets
      navLinks.forEach((nav) => nav.classList.remove("active"));

      // Ajouter l'active à l'onglet cliqué
      link.classList.add("active");

      // Afficher le formulaire correspondant et masquer les autres
      forms.forEach((form, formIndex) => {
        form.style.display = formIndex === index ? "block" : "none";
      });
    });
  });

  // Par défaut, afficher le formulaire "Manuellement" et masquer l'autre
  forms[0].style.display = "block"; // Formulaire "Manuellement"
  if (forms[1]) forms[1].style.display = "none"; // Formulaire "Importer CSV" (si présent)

  // Gestion de la soumission du formulaire "Manuellement"
  const formManually = forms[0];
  const studentList = document.querySelector("#add-student");

  formManually.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les données du formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const adresse = document.getElementById("adresse").value;
    const dateNaissance = document.getElementById("dateNaissance").value;
    const genre = document.getElementById("genre").value;

    // Ajouter les données dans le formulaire "Étudiant"
    document.getElementById("first-name").value = prenom;
    document.getElementById("last-name").value = nom;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = telephone;

    // Si vous avez des champs supplémentaires dans le formulaire "Étudiant"
    // vous pouvez les remplir ici aussi, par exemple :
    // document.getElementById('country').value = "Pays d'origine";

    // Afficher les données dans la console (pour test) ou effectuer d'autres actions
    console.log("Étudiant ajouté:", {
      nom,
      prenom,
      email,
      telephone,
      adresse,
      dateNaissance,
      genre,
    });

    // Réinitialiser le formulaire après soumission
    formManually.reset();
  });
});
