let monsterIcons = [{
        name: "anjanath",
        link: "./images/monster_icons/MHW-Anjanath_Icon.png"
    },
    {
        name: "azurer rathalos",
        link: "./images/monster_icons/MHW-Azure_Rathalos_Icon.png"
    },
    {
        name: "bazelgoose",
        link: "./images/monster_icons/MHW-Bazelgeuse_Icon.png"
    },
    {
        name: "behemoth",
        link: "./images/monster_icons/MHW-Behemoth_Icon.png"
    },
    {
        name: "black diablos",
        link: "./images/monster_icons/MHW-Black_Diablos_Icon.png"
    },
    {
        name: "deviljho",
        link: "./images/monster_icons/MHW-Deviljho_Icon.png"
    },
    {
        name: "diablos",
        link: "./images/monster_icons/MHW-Diablos_Icon.png"
    },
    {
        name: "dodogama",
        link: "./images/monster_icons/MHW-Dodogama_Icon.png"
    },
    {
        name: "great girros",
        link: "./images/monster_icons/MHW-Great_Girros_Icon.png"
    },
    {
        name: "great jagras",
        link: "./images/monster_icons/MHW-Great_Jagras_Icon.png"
    },
    {
        name: "jyuratodus",
        link: "./images/monster_icons/MHW-Jyuratodus_Icon.png"
    },
    {
        name: "kirin",
        link: "./images/monster_icons/MHW-Kirin_Icon.png"
    },
    {
        name: "kulu-ya-ku",
        link: "./images/monster_icons/MHW-Kulu-Ya-Ku_Icon.png"
    },
    {
        name: "kulve taroth",
        link: "./images/monster_icons/MHW-Kulve_Taroth_Icon.png"
    },
    {
        name: "kushala daora",
        link: "./images/monster_icons/MHW-Kushala_Daora_Icon.png"
    },
    {
        name: "lavasioth",
        link: "./images/monster_icons/MHW-Lavasioth_Icon.png"
    },
    {
        name: "legiana",
        link: "./images/monster_icons/MHW-Legiana_Icon.png"
    },
    {
        name: "lunastra",
        link: "./images/monster_icons/MHW-Lunastra_Icon.png"
    },
    {
        name: "nergigante",
        link: "./images/monster_icons/MHW-Nergigante_Icon.png"
    },
    {
        name: "odogaron",
        link: "./images/monster_icons/MHW-Odogaron_Icon.png"
    },
    {
        name: "paolumu",
        link: "./images/monster_icons/MHW-Paolumu_Icon.png"
    },
    {
        name: "pink rathian",
        link: "./images/monster_icons/MHW-Pink_Rathian_Icon.png"
    },
    {
        name: "pukei pukei",
        link: "./images/monster_icons/MHW-Pukei-Pukei_Icon.png"
    },
    {
        name: "radobaan",
        link: "./images/monster_icons/MHW-Radobaan_Icon.png"
    },
    {
        name: "rathalos",
        link: "./images/monster_icons/MHW-Rathalos_Icon.png"
    },
    {
        name: "rathian",
        link: "./images/monster_icons/MHW-Rathian_Icon.png"
    },
    {
        name: "teostra",
        link: "./images/monster_icons/MHW-Teostra_Icon.png"
    },
    {
        name: "tobi-kadachi",
        link: "./images/monster_icons/MHW-Tobi-Kadachi_Icon.png"
    },
    {
        name: "tzitzi-ya-ku",
        link: "./images/monster_icons/MHW-Tzitzi-Ya-Ku_Icon.png"
    },
    {
        name: "uragaan",
        link: "./images/monster_icons/MHW-Uragaan_Icon.png"
    },
    {
        name: "vaal hazak",
        link: "./images/monster_icons/MHW-Vaal_Hazak_Icon.png"
    },
    {
        name: "xeno'jiiva",
        link: "./images/monster_icons/MHW-Xeno'jiiva_Icon.png"
    },
    {
        name: "zorah magdaros",
        link: "./images/monster_icons/MHW-Zorah_Magdaros_Icon.png"
    }
]

const bodyElement = document.querySelector('body');
const startButton = document.querySelector('.start-select-btn');

function elementCheck(event) {
    if (event.target.className === 'start-select-btn') {
        console.log(event.target);
        monsterSelect();
    }
    if (event.target.className === 'faq-open-icon') {
        console.log("LAKA!");
        activateFaq();
    }
}

function monsterSelect() { //Selects the monster when 'quell your indecision' button is clicked.
    let button = document.querySelector(".start-select-btn");
    let grimalkyneIcon = document.querySelector(".grimalkyne-alert-div");
    let selectedItem = monsterIcons[Math.floor(Math.random() * monsterIcons.length)];
    let buttonNewText = selectedItem.name;
    grimalkyneIcon.classList.add("grimalkyne-activate");
    grimalkyneIcon.classList.remove("hidden");
    grimalkyneIcon.classList.add("visible");
    button.innerText = `${buttonNewText.toUpperCase()}`
    setTimeout(() => {
        grimalkyneIcon.classList.add("grimalkyne-deactivate");
        grimalkyneIcon.classList.remove("grimalkyne-activate");
    }, 9700);
    setTimeout(() => {
        button.innerText = "Quell Your Indecision";
        grimalkyneIcon.classList.remove("grimalkyne-deactivate");
        grimalkyneIcon.classList.remove("visible");
        grimalkyneIcon.classList.add("hidden");
    }, 10000);
    console.log(selectedItem.name);
}

function iconBgSelect() { //Selects the image that displays in the lower right corner.
    const parent = document.querySelector(".main-content-flex");
    let selectedItem = monsterIcons[Math.floor(Math.random() * monsterIcons.length)];
    let githubIcon = "./images/other/github-icon.png";
    const cornerImage = `
    <img class="github-icon" src="${githubIcon}" alt="github icon label">
    <a class="corner-image-link" href="https://github.com/IndecisiveBoolean" target="blank_">
    <img class="monster-icon" src="${selectedItem.link}" alt="Image of ${selectedItem.name} that links to github">
    </a>
    `
    parent.innerHTML += cornerImage;
}

function activateFaq() { //Handles the opening and closing css animations for the FAQ.
    let helpContainer = document.querySelector(".help-container");
    let bubbleDisplay = document.querySelector(".gajalaka-bubble");
    if (!helpContainer.classList.contains("open")) {
        helpContainer.classList.add("open");
        bubbleDisplay.classList.add("showBubble");
        bubbleDisplay.style.display = "block";
    } else {
        helpContainer.classList.remove("open");
        bubbleDisplay.classList.remove("showBubble");
        helpContainer.classList.add("closed");
        bubbleDisplay.classList.add("hideBubble");
        setTimeout(() => {
            helpContainer.classList.remove("closed");
            bubbleDisplay.classList.remove("hideBubble");
            bubbleDisplay.style.display = "none";
        }, 800);
    }
}

iconBgSelect();
bodyElement.addEventListener("click", elementCheck);