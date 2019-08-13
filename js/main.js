let skillsBtn = document.getElementById("skillsBtn");
let skillsModal = document.getElementById("skillsModal")
let aboutMeBtn = document.getElementById("aboutMeBtn");
let aboutMeModal = document.getElementById("aboutMeModal");
const repos = document.getElementById("repos");

skillsBtn.onclick = () => {
    skillsModal.style.display = "block"
}

aboutMeBtn.onclick = () => {
    aboutMeModal.style.display = "block"
}

window.onclick = function (e) {
    if (e.target == skillsModal || e.target == aboutMeModal) {
        skillsModal.style.display = "none"
        aboutMeModal.style.display = "none"
    }
}

const url = 'https://api.github.com/users/samomatik/repos?sort=updated';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        let myRepos = data.filter(repo => repo.fork == false)
        console.log(myRepos);
        return myRepos.map(function(repo) {
             let card = createNode('section'),
                 h3 = createNode('h3'),
                 p = createNode('p'),
                 button = createNode('a'),
                 launch = createNode('a');;
            
            h3.innerHTML = `${repo.name}`;
            p.innerHTML = `${repo.description}`;
            button.href = `${repo.html_url}`;
            button.target = `_blank`;
            button.innerHTML = `Go To Repo`;
            card.classList.add('card', 'shadow');
            button.classList.add('btn');
            append(card, h3);
            append(card, p);
            append(card, button);
            if (repo.homepage) {
                launch.href = `${repo.homepage}`;
                launch.target = `_blank`;
                launch.innerHTML = `Launch`;
                launch.classList.add('btn');
                append(card, launch);
            }
            append(repos, card);
        })
    })
    .catch(function(err) {
        console.log(err);
    })