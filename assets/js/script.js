const collection = [
    {
      name: "Extincta",
      author: "Victor Dixen",
      edition: "PKJ.",
      format: "Poche",
      releaseYear: 2023,
      picture: "./assets/storage/extincta.jpg",
      genre: ["Dystopie", "Young Adult", "Fantaisie"],
      delItem: "./assets/storage/trash.png",
      link: "https://booknode.com/extincta_03071615",
    },
    {
        name: "Shades of magic",
        author: "V.E. Schwab",
        edition: "Lumen",
        format: "Broché",
        releaseYear: 2017,
        picture: "./assets/storage/shades-of-magic.jpg",
        genre: ["Fantaisie", "Young Adult", "Aventure"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/shades_of_magic_tome_1_01494415",
      },
      {
        name: "La vie invisible d'Addie Larue",
        author: "V.E. Schwab",
        edition: "Lumen",
        format: "Relié",
        releaseYear: 2022,
        picture: "./assets/storage/La-Vie-invisible-d-Addie-Larue.jpg",
        genre: ["Fantastique", "Malédiction", "Immortalité"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/la_vie_invisible_daddie_larue_02439564",
      },
      {
        name: "Poster Girl",
        author: "Veronica Roth",
        edition: "Michel Lafon",
        format: "Broché",
        releaseYear: 2022 ,
        picture: "./assets/storage/poster_girl.jpg",
        genre: ["Dystopie", "Science-Fiction", "Thriller"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/poster_girl_03455714",
      },
      {
        name: "Vanja et le loup",
        author: "Margaret Owen",
        edition: "Pocket Jeunesse",
        format: "Broché",
        releaseYear: 2022,
        picture: "./assets/storage/vanja-et-le-loup.jpg",
        genre: ["Contes revisités", "Fantaisie", "Young Adult"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/vanja_et_le_loup_03401252",
      },
      {
        name: "Red Queen",
        author: "Victoria Aveyard",
        edition: "Le Livre de Poche",
        format: "Poche",
        releaseYear: 2016,
        picture: "./assets/storage/red-queen.jpg",
        genre: ["Dystopie", "Young Adult", "Fantaisie"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/red_queen_tome_1_01338074",
      },
      {
        name: "Kalliopée",
        author: "Koko Nhan",
        edition: "Black Ink",
        format: "Broché",
        releaseYear: 2021 ,
        picture: "./assets/storage/kalliopee.jpg",
        genre: ["Dystopie", "Romance", "Fantaisie"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/kalliopee_tome_1_le_sacrifice_dune_princesse_03362539",
      },
      {
        name: "The Effigies",
        author: "Sarah Raughley",
        edition: "Lumen",
        format: "Broché",
        releaseYear: 2017,
        picture: "./assets/storage/the-effigies.jpg",
        genre: ["Dystopie", "Young Adult", "Fantastique"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/the_effigies_tome_1_les_flammes_du_destin_02129643",
      },
      {
        name: "Skyhunter",
        author: "Marie Lu",
        edition: "De Saxus",
        format: "Broché",
        releaseYear: 2023,
        picture: "./assets/storage/skyhunter.jpg",
        genre: ["Dystopie", "Young Adult", "Aventure"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/skyhunter_tome_1_larme_secrete_03356804",
      },
      {
        name: "Les arcanes de tarot",
        author: "Charly Farrow",
        edition: "Auto-édité",
        format: "Broché",
        releaseYear: "Inconnu",
        picture: "./assets/storage/les_arcanes_de_tarot.jpg",
        genre: ["Fantaisie", "Dystopie", "Dieux"],
        delItem: "./assets/storage/trash.png",
        link: "https://booknode.com/les_arcanes_de_tarot_tome_1_le_pendu_03429086",
      },    
];
let filteredCollection = collection
const cards = document.querySelector(".collection")
 
function generateHTML(array) {
  
  // create elements
  array.forEach((collection) => {
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
  
    const genre1 = document.createElement("p");
    genre1.textContent = collection.genre[0];
    genre.appendChild(genre1);
    genre1.classList.add("genre1");
  
    const genre2 = document.createElement("p");
    genre2.textContent = collection.genre[1];
    genre.appendChild(genre2);
    genre2.classList.add("genre2");
  
    const genre3 = document.createElement("p");
    genre3.textContent = collection.genre[2];
    genre.appendChild(genre3);
    genre3.classList.add("genre3");
    
    const delItem = document.createElement("button");
    delItem.classList.add("delItem");
    card.appendChild(delItem);
  
    const delItemImg = document.createElement("img");
    delItemImg.src = collection.delItem;
    delItem.appendChild(delItemImg);
    delItemImg.classList.add("delItemImg");

    const learnMore = document.createElement("button");
    learnMore.classList.add("learnMore");
    card.appendChild(learnMore);

    const learnMoreLink = document.createElement("a");
    learnMoreLink.textContent = "Plus d'infos";
    learnMoreLink.href = collection.link;
    learnMoreLink.target = "_blank";
    learnMoreLink.classList.add("learnMoreLink");
    learnMore.appendChild(learnMoreLink);
    
    cards.appendChild(card);
  });
}

//call function with filtred collection
generateHTML(filteredCollection);

// function to delete from the collection
function deleteFromCollection(title) {
    let itemIndex = collection.findIndex(item => item.name == title);
    collection.splice(itemIndex, 1);
}


function listenForDelete() {
  // add function to remove elements
  let delButton = document.querySelectorAll(".delItem");
  // on click function
  delButton.forEach(function (button) {
    button.addEventListener("click", function () {
      // add class to animate
      button.parentNode.classList.add("animate");
      // get the book title and delete it
      let listItem = button.parentNode;
      deleteFromCollection(listItem.getElementsByTagName("h2")[0].innerText);
      // time out for animation
      setTimeout(()=>{
        listItem.parentNode.removeChild(listItem);
      },500);
    })
  });
}
listenForDelete();




const options = document.getElementById('genre-select')
// event listener on change option (input)
options.addEventListener("change", function () {
  filterByGenre(options.value)
})

// add the function to sort
function filterByGenre(filterString) {
  // if the value option is none
  if (filterString == "none") {
    cards.innerText = "";
    //generate the collection
    generateHTML(collection);
    // without the deleted ones
    listenForDelete();
  }
  else{
    filteredCollection = collection.filter(item => item.genre.includes(filterString));
    cards.innerText = "";
    // generate filter collection
    generateHTML(filteredCollection);
    // without the deleted ones
    listenForDelete();
  }
}
