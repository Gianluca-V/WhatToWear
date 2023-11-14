import * as ClothesClasses from "./clothes.js";
async function PopulateTable() {
    const clothesData = await JSON.parse(localStorage.getItem('clothes'));
    const clothesTableBody = document.querySelector(".table__body");
    // Clear existing table rows
    clothesTableBody.innerHTML = "";
    console.log(clothesData);
    // Loop through the clothes data and create table rows
    try {
        clothesData.forEach((clothes) => {
            const row = clothesTableBody.insertRow();
            // Add data cells
            row.innerHTML = `
          <td class="table__cell table__cell--clothes" data-cell="Cuerpo">${clothes.name}</td>
          <td class="table__cell table__cell--clothes" data-cell="Cuerpo">${clothes.type}</td>
          <td class="table__cell table__cell--clothes" data-cell="Cuerpo">${clothes.temperature}</td>
          <td class="table__cell table__cell--actions">
              <button class="table__button table__button--delete" data-id="${clothes.name}"><svg class="table__svg table__svg--delete" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
          </td>
      `;
        });
    }
    catch (e) {
        console.error(e);
    }
    const addButton = document.querySelector(".add-button");
    const deleteButtons = document.querySelectorAll(".table__button--delete");
    const closeButton = document.querySelector(".form__close");
    const formContainer = document.querySelector(".form-container");
    addButton.addEventListener("click", function () {
        document.querySelector(".form__action").textContent = "Agregar";
        formContainer.showModal();
        document.querySelector(".form__input#name").value = "";
        document.querySelector(".form__input#type").value = "";
        document.querySelector(".form__input#temperature").value = 5;
        removeAllEventListeners(document.querySelector(".form__input--submit"));
        const submitButton = document.querySelector(".form__input--submit");
        submitButton.addEventListener("click", async (e) => {
            e.preventDefault();
            const name = document.querySelector(".form__input#name").value;
            const type = document.querySelector(".form__input#type").value;
            const temperature = document.querySelector(".form__input#temperature").value;
            const newCloth = new ClothesClasses.Clothes(name, type, temperature);
            if (localStorage.getItem("clothes")) {
                const storedClothes = JSON.parse(localStorage.getItem("clothes"));
                storedClothes.append(newCloth);
                console.log(storedClothes);
            }
            else {
                const clothesToStore = JSON.stringify("[" + newCloth + "]");
                localStorage.setItem("clothes", clothesToStore);
            }
            //localStorage.setItem("clothes","");
            formContainer.close();
            PopulateTable();
        });
    });
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", async function (e) {
            const id = e.target.closest("[data-id]").getAttribute("data-id");
            if (!confirm(`Estas seguro? esto eliminara el elemento ${id} para siempre`))
                return;
            //await API.clothes.Delete(id);
            alert("elemento eliminado");
            PopulateTable();
        });
    });
    closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        const hash = window.location.hash.slice(1);
        formContainer.close();
    });
}
PopulateTable();
function removeAllEventListeners(element) {
    const clonedElement = element.cloneNode(true); // Create a clone of the element
    // Replace the element with its clone to remove all event listeners
    element.parentNode.replaceChild(clonedElement, element);
}
