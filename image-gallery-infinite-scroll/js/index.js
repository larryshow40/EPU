//images to load to create an infinite scroll
const imageData = [
  {
    id: "first",
    imageSrc: "arctic-guesthouse-igloos-fEw9RsoDEq4-unsplash.jpg",
  },

  {
    id: "second",
    imageSrc: "benigno-hoyuela-Z5PknsAvHkk-unsplash.jpg",
  },

  {
    id: "third",
    imageSrc: "benjamin-massello-twX-cWl-8OM-unsplash.jpg",
  },

  {
    id: "fourth",
    imageSrc: "chris-ainsworth-jUR9ZFNqL-w-unsplash.jpg",
  },

  { id: "fifth", imageSrc: "siri-louis-Qxr_U0KpdpA-unsplash.jpg" },
  { id: "sixth", imageSrc: "josh-rocklage-MM5-DtrFLn0-unsplash.jpg" },
  { id: "seventh", imageSrc: "1.JPG" },
];

//UI variables
let mainContainer = document.querySelector(".container");
let footerUI = document.querySelector(".loading");

//Random decision making function
function randomDecision(varaibleItem) {
  return Math.floor(Math.random() * varaibleItem);
}

// checks if the scroll is the end of the screen
function dynamicPostUpdate() {
  let contentHeight = mainContainer.offsetHeight;
  let verticalOffset = window.pageYOffset;
  let verticalDistance = verticalOffset + window.innerHeight;

  if (verticalDistance >= contentHeight) {
    footerUI.style.display = "block";
    setTimeout(function () {
      footerUI.style.display = "none";
      createMoreContents();
    }, 3000);
  } else {
    footerUI.style.display = "none";
  }
}

window.addEventListener("scroll", dynamicPostUpdate);

//continous creating and adding content to the mainContainer
function createMoreContents() {
  let postsPerSeconds = randomDecision(5);

  for (let count = 0; count < postsPerSeconds; count++) {
    const generatedDIV = document.createElement("div");
    generatedDIV.id = imageData[randomDecision(imageData.length)].id;

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    imgContainer.innerHTML = `<img src="./images/${
      imageData[randomDecision(imageData.length)].imageSrc
    }">`;

    generatedDIV.appendChild(imgContainer);
    mainContainer.appendChild(generatedDIV);
  }
}
