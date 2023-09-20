/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let arrOf_Sections = Array.from(document.querySelectorAll("[data-nav]"));
// var section1 = document.querySelectorAll("[data-nav]")[0];
// var section2 = document.querySelectorAll("[data-nav]")[1];
// var section3 = document.querySelectorAll("[data-nav]")[2];
// arrOf_Sections.push(section1, section2, section3);
console.log(arrOf_Sections);

// build the nav
function addToNav() {
   let navBar = document.querySelector("#navbar__list");
   for (let i = 1; i <= arrOf_Sections.length; i++) {
      let sectionitem = document.createElement("li");
      let sectionlink = document.createElement("a");
      sectionitem.appendChild(sectionlink);
      sectionlink.classList.add("menu__link");
      sectionlink.href = `#section${i}`;
      sectionlink.textContent = `section ${i}`;
      sectionlink.classList.add(`section${i}`);
      navBar.prepend(sectionitem);
   }
}
addToNav();

//add active to current section
window.onscroll = function () {
   document.querySelectorAll("section").forEach((active) => {
      if (
         active.getBoundingClientRect().top >= -400 &&
         active.getBoundingClientRect().top <= 150
      ) {
         active.classList.add("your-active-class");
      } else {
         active.classList.remove("your-active-class");
      }
   });
};

//change button text on hover
let button = document.querySelector("button");
button.addEventListener("mouseover", (event) => {
   button.innerHTML = "Add New Section";
   button.style.fontSize = "1rem";
   button.style.border = " solid  ";
});
button.addEventListener("mouseout", (event) => {
   button.innerHTML = "+";
   button.style.fontSize = "2rem";
   button.style.border = " dashed orange ";
});
var x = 4;
button.addEventListener("click", (event) => {
   let maindiv = document.querySelector("main");

   let newsection = document.createElement("section");
   newsection.innerHTML = `<section id="section${x}" data-nav="Section ${x}" class="your-active-class">
      <div class="landing__container">
        <h2>Section ${x}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
          dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
          imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
          bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
          elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
          nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
          semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
          luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
          porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;
   x += 1;
   maindiv.appendChild(newsection);
   arrOf_Sections.push(document.querySelector(`section${x}`));
   addNewToNav();
});
function addNewToNav() {
   let navBar = document.querySelector("#navbar__list");
   let sectionitem = document.createElement("li");
   let sectionlink = document.createElement("a");
   sectionitem.appendChild(sectionlink);
   sectionlink.classList.add("menu__link");
   sectionlink.href = `#section${x - 1}`;
   sectionlink.textContent = `section ${x - 1}`;
   sectionlink.classList.add(`section${x}`);
   navBar.prepend(sectionitem);
}
//scroll to top  on load function
window.onbeforeunload = function () {
   window.scrollTo(0, 0);
};
//smooth scroll all
function scrInto(id) {
   document.querySelector(id).scrollIntoView({
      behavior: "smooth",
   });
}
