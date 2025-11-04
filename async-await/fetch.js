const API_URL = "https://api.github.com/users/divyanshgkmit";

const div = document.getElementById("mainDiv");

async function getGithubUser() {
    try {
        const data = await fetch(API_URL);
        const user = await data.json();
        func(user);
        console.log(user);
    } catch (err) {
        console.log(err);
    }
}

getGithubUser();


const func = (user) => {
  const h1 = document.createElement("h1");
  h1.innerText = `GitHub User: ${user.login}`;
  div.appendChild(h1);
};
