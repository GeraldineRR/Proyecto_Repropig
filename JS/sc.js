    // Script para acordeón CRUD
    const titles = document.querySelectorAll(".crud-title");

    titles.forEach(title => {
      title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        title.classList.toggle("active");
        content.classList.toggle("open");
      });
    });