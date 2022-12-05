const CardsInstructor = () => {
  const element = (srcImg, name, job, comment, last = false) => `
    <div class="col ${last ? "mx-auto mx-lg-0" : ""}">
      <div class="h-100 shadow-card-3 px-4 px-lg-5 py-4">
        <div class="mb-4 vstack align-items-center text-center">
          <div class="overflow-hidden rounded-circle container-perfil-instructor-img mb-3">
            <img
              src="${srcImg}"
              alt="..."
              class="w-100 h-100"
            />
          </div>
          <h3 class="h6 text-black mb-2">${name}</h3>
          <p class="mb-0 fs-7 text-primary fw-semibold">${job}</p>
        </div>
        <div>
          <p class="mb-0 text-center fs-7 fs-lg-6">
            “${comment}”
          </p>
        </div>
      </div>
    </div>
  `,
    elements = [
      [
        "/img/instructors/perfil2.jpg",
        "John Mark",
        "Senior Developer",
        "Education will be for you what you want it to be",
      ],
      [
        "/img/instructors/perfil1.jpg",
        "Lora Shrof",
        "Marketing Lead",
        "Knowledge has to be improved, challenged, and increased constantly, or it vanishes",
      ],
      [
        "/img/instructors/perfil3.jpg",
        "Zeng Chin",
        "Data Analist at Meta",
        "To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge",
        true,
      ],
    ];
  return elements.map(val => element(...val)).join("");
};

export const Instructors = () => {
  return `
    <section class="container mb-5">
      <header class="mb-4 mb-lg-5">
        <h2 class="h4 fw-normal-2 fw-lg-semibold m-0">Meet our instructors</h2>
      </header>
      <div class="row row-cols-2 row-cols-lg-3 gx-3 gx-lg-4 gy-4">
        ${CardsInstructor()}
      </div>
    </section>
  `;
};
