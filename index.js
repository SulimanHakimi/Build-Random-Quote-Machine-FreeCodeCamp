let textArea = document.getElementById("text");
let writerName = document.getElementById("author");
let btn = document.getElementById("new-quote");
let authorName = document.getElementById("authorName");

let i = 0;
async function apiCall() {
  const data = await fetch(
    "https://sulimanhakimi.github.io/freeCodeCamp-Joke-json/joke.json",
    {
      method: "GET",
    }
  );
  let jokes = await data.json();
  return jokes;
}
btn.addEventListener("click", () => {
  i++;
  apiCall().then((res) => {
    textArea.innerHTML = `<i class="fa fa-quote-left"></i> ${res.joke[i].joke}`;
    writerName.innerText = `- ${res.joke[i].writer}`;
    authorName.innerText = ` by ${res.joke[i].author}`;
  });
});
