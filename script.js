const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");

const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getjoke = () => {
  jokecontainer.classList.remove("fade");
  fetch(URL)
    .then((data) => data.json())
    .then((item) => {
      jokecontainer.textContent = `${item.joke}`;
      jokecontainer.classList.add("fade");
    });
};

btn.addEventListener("click", getjoke);
getjoke();
