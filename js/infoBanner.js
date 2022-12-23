AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      "dynamite": {
        banner_url: "./assets/posters/Dynamite-Info.webp",
        title: "Dynamite",
        released_year: " August 21,2020",
        description:
          "'Dynamite' is the band's first song fully recorded in English. It is an upbeat disco-pop song with elements of funk, soul, and bubblegum pop, and takes influence from 1970s music—it features snapping handclaps, echoing synths, and celebratory horns.",
      },
      butter: {
        banner_url: "./assets/posters/Butter-Info.webp",
        title: "Butter",
        released_year: "May 21,2021",
        description:
          "'Butter' is the band's second English-language single. Upon release, 'Butter' received positive reviews from music critics, with praise towards its catchiness. It was a commercial success, topping charts in Hungary, India, Japan, Malaysia, Mexico, Singapore, South Korea, the United States and Vietnam, as well as Billboard's Global 200 chart. The song also reached the top 10 in over 30 other countries worldwide.",
      },
      ptd: {
        banner_url: "./assets/posters/PTD-Info.webp",
        title: "Permission To Dance",
        released_year: "July 9,2021",
        description:
          "'Permission to Dance' is a stand-alone single. The song was also included as part of the CD release of the group's previous single 'Butter', and is the band's third English-language single. The song topped the charts in five countries and reached the top ten in ten other territories.",
      },
      "ytc": {
        banner_url: "./assets/posters/YTC-Info.jpg",
        title: "Yet To Come",
        released_year: "June 10,2022",
        description:
          " 'Yet to Come', The lead single from their first anthology album Proof. It is the band's first original Korean-language single since 2020's 'Life Goes On'.An alternative hip hop track, the song's lyrics are a reflection on the past nine years of the band's career while also looking forward to what the future holds. The song received generally positive reviews from critics.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
