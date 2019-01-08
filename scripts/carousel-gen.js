

// let monsterIcons = [
//     {name: "anjanath", link: "../images/MHW-Anjanath_Icon.png"},
//     {name: "azurer rathalos", link: "../images/MHW-Azure_Rathalos_Icon.png"},
//     {name: "bazelgoose", link: "../images/MHW-Bazelgeuse_Icon.png"},
//     {name: "behemoth", link: "../images/MHW-Behemoth_Icon.png"},
//     {name: "black diablos", link: "../images/MHW-Black_Diablos_Icon.png"},
//     {name: "deviljho", link: "../images/MHW-Deviljho_Icon.png"},
//     {name: "diablos", link: "../images/MHW-Diablos_Icon.png"},
//     {name: "dodogama", link: "../images/MHW-Dodogama_Icon.png"},
//     {name: "great girros", link: "../images/MHW-Great_Girros_Icon.png"},
//     {name: "great jagras", link: "../images/MHW-Great_Jagras_Icon.png"},
//     {name: "jyuratodus", link: "../images/MHW-Jyuratodus_Icon.png"},
//     {name: "kirin", link: "../images/MHW-Kirin_Icon.png"},
//     {name: "kulu-ya-ku", link: "../images/MHW-Kulu-Ya-Ku_Icon.png"},
//     {name: "kulve taroth", link: "../images/MHW-Kulve_Taroth_Icon.png"},
//     {name: "kushala daora", link: "../images/MHW-Kushala_Daora_Icon.png"},
//     {name: "lavasioth", link: "../images/MHW-Lavasioth_Icon.png"},
//     {name: "legiana", link: "../images/MHW-Legiana_Icon.png"},
//     {name: "lunastra", link: "../images/MHW-Lunastra_Icon.png"},
//     {name: "nergigante", link: "../images/MHW-Nergigante_Icon.png"},
//     {name: "odogaron", link: "../images/MHW-Odogaron_Icon.png"},
//     {name: "paolumu", link: "../images/MHW-Paolumu_Icon.png"},
//     {name: "pink rathian", link: "../images/MHW-Pink_Rathian_Icon.png"},
//     {name: "pukei pukei", link: "../images/MHW-Pukei-Pukei_Icon.png"},
//     {name: "radobaan", link: "../images/MHW-Radobaan_Icon.png"},
//     {name: "rathalos", link: "../images/MHW-Rathalos_Icon.png"},
//     {name: "rathian", link: "../images/MHW-Rathian_Icon.png"},
//     {name: "teostra", link: "../images/MHW-Teostra_Icon.png"},
//     {name: "tobi-kadachi", link: "../images/MHW-Tobi-Kadachi_Icon.png"},
//     {name: "tzitzi-ya-ku", link: "../images/MHW-Tzitzi-Ya-Ku_Icon.png"},
//     {name: "uragaan", link: "../images/MHW-Uragaan_Icon.png"},
//     {name: "vaal hazak", link: "../images/MHW-Vaal_Hazak_Icon.png"},
//     {name: "xeno'jiiva", link: "../images/MHW-Xeno'jiiva_Icon.png"},
//     {name: "zorah magdaros", link: "../images/MHW-Zorah_Magdaros_Icon.png"}
// ]

// function iconBgSelect() {
//         const img = document.createElement("img");
//         const parent = document.querySelector(".main-content-flex");
//         let selectedItem = monsterIcons[Math.floor(Math.random() * monsterIcons.length)];
//         img.setAttribute("src", `${selectedItem.link}`);
//         img.setAttribute("alt", `${selectedItem.name}`);
//         img.classList += "monster-icon";
//         parent.appendChild(img);
// }

// // function carouselImageGet() {
// //     monsterIcons.map(carouselArrCreate);
// // }

// function monsterSelect() {
//   let button = document.querySelector(".start-select-btn");
//   let selectedItem = monsterIcons[Math.floor(Math.random() * monsterIcons.length)];
//   let buttonNewText = selectedItem.name;
//   button.innerText = `${buttonNewText.toUpperCase()}`
//   console.log(selectedItem.name);
// }

// function carouselAnimate() {// currently unused
//   $('.autoplay').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 1000,
//   });
// }


// iconBgSelect()
// carouselAnimate();


// // function getIconsJSON() {
// //     let xhttp = new XMLHttpRequest();
// //     xhttp.onreadystatechange = function() {
// //       if (this.readyState == 4 && this.status == 200) {
// //         let response = JSON.parse(this.responseText);
// //         carouselImageGet(response)
// //         responseJson = response; 
// //       }
// //     };
// //     xhttp.open("GET", "http://localhost:8000/scripts/icons.json", true);
// //     xhttp.send();
// //     console.log(responseJson);
// //   }