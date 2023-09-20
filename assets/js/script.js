const collection = [
    {
      name: "Extincta",
      author: "Victor Dixen",
      edition: "PKJ.",
      format: "Poche",
      releaseYear: 2023,
      picture: "../../assets/storage/extincta.jpg",
      genre: ["Dystopie", "Young Adult", "Fantaisie"],
      delItem: "Delete",
    },
    {
        name: "Shades of magic",
        author: "V.E. Schwab",
        edition: "Lumen",
        format: "Broché",
        releaseYear: 2017,
        picture: "../../assets/storage/shades-of-magic.jpg",
        genre: ["Fantaisie", "Young Adult", "Aventure"],
        delItem: "Delete",
      },
      {
        name: "La vie invisible d'Addie Larue",
        author: "V.E. Schwab",
        edition: "Lumen",
        format: "Relié",
        releaseYear: 2022,
        picture: "../../assets/storage/La-Vie-invisible-d-Addie-Larue.jpg",
        genre: ["Fantastique", "Malédiction", "Immortalité"],
        delItem: "Delete",
      },
      {
        name: "Poster Girl",
        author: "Veronica Roth",
        edition: "Michel Lafon",
        format: "Broché",
        releaseYear: 2022 ,
        picture: "../../assets/storage/poster_girl.jpg",
        genre: ["Dystopie", "Science-Fiction", "Thriller"],
        delItem: "Delete",
      },
      {
        name: "Vanja et le loup",
        author: "Margaret Owen",
        edition: "Pocket Jeunesse",
        format: "Broché",
        releaseYear: 2022,
        picture: "../../assets/storage/vanja-et-le-loup.jpg",
        genre: ["Contes revisités", "Fantaisie", "Young Adult"],
        delItem: "Delete",
      },
      {
        name: "Red Queen",
        author: "Victoria Aveyard",
        edition: "Le Livre de Poche",
        format: "Poche",
        releaseYear: 2016,
        picture: "../../assets/storage/red-queen.jpg",
        genre: ["Dystopie", "Young Adult", "Fantaisie"],
        delItem: "Delete",
      },
      {
        name: "Kalliopée",
        author: "Koko Nhan",
        edition: "Black Ink",
        format: "Broché",
        releaseYear: 2021 ,
        picture: "../../assets/storage/kalliopee.jpg",
        genre: ["Dystopie", "Romance", "Fantaisie"],
        delItem: "Delete",
      },
      {
        name: "The Effigies",
        author: "Sarah Raughley",
        edition: "Lumen",
        format: "Broché",
        releaseYear: 2017,
        picture: "../../assets/storage/the-effigies.jpg",
        genre: ["Dystopie", "Young Adult", "Fantastique"],
        delItem: "Delete",
      },
      {
        name: "Skyhunter",
        author: "Marie Lu",
        edition: "De Saxus",
        format: "Broché",
        releaseYear: 2023,
        picture: "../../assets/storage/skyhunter.jpg",
        genre: ["Dystopie", "Young Adult", "Aventure"],
        delItem: "Delete",
      },
      {
        name: "Les arcanes de tarot",
        author: "Charly Farrow",
        edition: "Auto-édité",
        format: "Broché",
        releaseYear: "Inconnu",
        picture: "../../assets/storage/les_arcanes_de_tarot.jpg",
        genre: ["Fantaisie", "Dystopie", "Dieux"],
        delItem: "Delete",
      },
      
];
const cards = document.querySelector(".collection")

// create elements
collection.forEach((collection) => {
  const card = document.createElement("article");
  card.classList.add("card");
  
  const picture = document.createElement("img");
  picture.src = collection.picture;
  card.appendChild(picture);
  picture.classList.add("picture");

  const name = document.createElement("h2");
  name.textContent = collection.name;
  card.appendChild(name);
  name.classList.add("name");

  const author = document.createElement("p");
  author.textContent = collection.author;
  card.appendChild(author);
  author.classList.add("author");

  const div2 = document.createElement("div");
  div2.textContent = collection.div2;
  card.appendChild(div2);
  div2.classList.add("div2");
  
  const edition = document.createElement("p");
  edition.textContent = collection.edition;
  div2.appendChild(edition);
  edition.classList.add("edition");

  const format = document.createElement("p");
  format.textContent = collection.format;
  div2.appendChild(format);
  format.classList.add("format");

  const releaseYear = document.createElement("p");
  releaseYear.textContent = collection.releaseYear;
  div2.appendChild(releaseYear);
  releaseYear.classList.add("releaseYear");

  const genre = document.createElement("div");
  card.appendChild(genre);
  genre.classList.add("genre");

  const genre1 = document.createElement("button");
  genre1.textContent = collection.genre[0];
  genre.appendChild(genre1);
  genre1.classList.add("genre1");

  const genre2 = document.createElement("button");
  genre2.textContent = collection.genre[1];
  genre.appendChild(genre2);
  genre2.classList.add("genre2");

  const genre3 = document.createElement("button");
  genre3.textContent = collection.genre[2];
  genre.appendChild(genre3);
  genre3.classList.add("genre3");
  
  const delItem = document.createElement("button");
  delItem.textContent = collection.delItem;
  delItem.classList.add("delItem");
  card.appendChild(delItem);

  cards.appendChild(card);
});

// add function to remove elements
let delButton = document.querySelectorAll(".delItem");

delButton.forEach(function (button) {
  button.addEventListener("click", function () {
    let listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
  })
});

// add function to sort
