import { showRandomMovie } from "./ui.js";
import { getGenres } from "./api.js";

const playBtn = document.getElementById("playBtn");

getGenres().then((genres) => populateGenreDropdown(genres));
playBtn.onclick = showRandomMovie;
