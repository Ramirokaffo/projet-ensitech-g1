document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("student-form");
  const studentTableBody = document.querySelector("table tbody");

  studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentData = gatherFormData();
    if (validateFormData(studentData)) {
      addStudentToTable(studentData);
      resetForm();
    }
  });

  function gatherFormData() {
    return {
      id: document.getElementById("student-id").value.trim(),
      firstName: document.getElementById("first-name").value.trim(),
      lastName: document.getElementById("last-name").value.trim(),
      email: document.getElementById("email").value.trim(),
      country: document.getElementById("country").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      photo: document.getElementById("student-photo").files[0],
    };
  }

  function validateFormData(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s+()-]{7,15}$/;

    if (
      !data.id ||
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.country ||
      !data.phone ||
      !data.photo
    ) {
      alert("Tous les champs sont obligatoires.");
      return false;
    }

    if (!emailRegex.test(data.email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return false;
    }

    if (!phoneRegex.test(data.phone)) {
      alert("Veuillez entrer un numéro de téléphone valide.");
      return false;
    }

    return true;
  }

  function addStudentToTable(data) {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${data.id}</td>
            <td>${data.lastName}</td>
            <td>${data.firstName}</td>
            <td>${data.email}</td>
            <td>${data.country}</td>
            <td>${data.phone}</td>
            <td><img src="${URL.createObjectURL(
              data.photo
            )}" alt="Photo d'identité" style="width: 2cm; height: 2cm; object-fit: cover;" /></td>
            <td>
                <a href="#" class="edit-link">Modifier</a> |
                <a href="#" class="archive-link">Archiver</a> |
                <a href="#" class="delete-link">Supprimer</a>
            </td>
        `;

    studentTableBody.appendChild(row);
    addRowEventListeners(row);
  }

  function addRowEventListeners(row) {
    row.querySelector(".edit-link").addEventListener("click", (event) => {
      event.preventDefault();
      editStudent(row);
    });

    row.querySelector(".archive-link").addEventListener("click", (event) => {
      event.preventDefault();
      archiveStudent(row);
    });

    row.querySelector(".delete-link").addEventListener("click", (event) => {
      event.preventDefault();
      deleteStudent(row);
    });
  }

  function editStudent(row) {
    // Implémenter la logique d'édition
    alert("Fonctionnalité d'édition à implémenter.");
  }

  function archiveStudent(row) {
    // Implémenter la logique d'archivage
    alert("Fonctionnalité d'archivage à implémenter.");
  }

  function deleteStudent(row) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")) {
      row.remove();
    }
  }

  function resetForm() {
    studentForm.reset();
  }
});
document.getElementById("download-excel").addEventListener("click", () => {
  const studentData = gatherFormData();

  if (validateFormData(studentData)) {
    downloadExcel(studentData);
  }
});

function downloadExcel(data) {
  const ws = XLSX.utils.json_to_sheet([data]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Étudiant");

  XLSX.writeFile(wb, "Formulaire_Étudiant.xlsx");
}

function gatherFormData() {
  return {
    "ID Étudiant": document.getElementById("student-id").value.trim(),
    Prénom: document.getElementById("first-name").value.trim(),
    Nom: document.getElementById("last-name").value.trim(),
    Email: document.getElementById("email").value.trim(),
    "Pays d'origine": document.getElementById("country").value.trim(),
    "N° de Téléphone": document.getElementById("phone").value.trim(),
    // Notez que les fichiers (comme les photos) ne peuvent pas être directement inclus dans Excel via ce script.
  };
}

function validateFormData(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s+()-]{7,15}$/;

  if (
    !data["ID Étudiant"] ||
    !data["Prénom"] ||
    !data["Nom"] ||
    !data["Email"] ||
    !data["Pays d'origine"] ||
    !data["N° de Téléphone"]
  ) {
    alert("Tous les champs sont obligatoires.");
    return false;
  }

  if (!emailRegex.test(data.Email)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return false;
  }

  if (!phoneRegex.test(data["N° de Téléphone"])) {
    alert("Veuillez entrer un numéro de téléphone valide.");
    return false;
  }

  return true;
}
