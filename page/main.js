let name = document.getElementsByClassName("name")[0]
let age = document.getElementsByClassName("age")[0]
let uni = document.getElementsByClassName("uni")[0]
let skills = document.getElementsByClassName("skill")[0]
let nameds = document.getElementsByClassName("nameds")[0]
let ageds = document.getElementsByClassName("ageds")[0]
let unids = document.getElementsByClassName("unids")[0]
let skillsds = document.getElementsByClassName("skillds")[0]
let sk1d = document.getElementById("sk1d")
let sk2d = document.getElementById("sk2d")
let sk3d = document.getElementById("sk3d")
let sk1s = document.getElementById("sk1s")
let sk2s = document.getElementById("sk2s")
let sk3s = document.getElementById("sk3s")
let devskills = document.getElementsByClassName("hsk")[0]
let softskills = document.getElementsByClassName("hsk")[1]
/*****************/
/******************/
name.addEventListener('mouseover', function nameapp() {
    nameds.style.opacity = '1';
    nameds.style.left = "0"
});
name.addEventListener('mouseout', function namedapp() {
    nameds.style.opacity = '0';
    nameds.style.left = "-5rem"
});

/*****************/
age.addEventListener('mouseover', function ageapp() {
    ageds.style.opacity = '1';
    ageds.style.left = "0"
});
age.addEventListener('mouseout', function agedapp() {
    ageds.style.opacity = '0';
    ageds.style.left = "-5rem";
});

/*****************/
uni.addEventListener('mouseover', function uniapp() {
    unids.style.opacity = '1';
    unids.style.left = "0"
});
uni.addEventListener('mouseout', function unidapp() {
    unids.style.opacity = '0';
    unids.style.left = "-4.8rem"
});

/*skill.addEventListener('mouseover', function mouseon3() {
    skillds.style.opacity = '1';
    skillds.style.left = "0"
});
skill.addEventListener('mouseout', function mousenon3() {
    skillds.style.opacity = '0';
    skillds.style.left = "-4.8rem"
});*/
/*****************/
skills.addEventListener("mouseover", function sk1dapp() {
    sk1d.style.opacity = "1"
    sk1d.style.left = "0"
})
skills.addEventListener("mouseout", function sk1ddapp() {
    setTimeout(function sk1ddapp() {
        sk1d.style.opacity = "0"
        sk1d.style.left = "-5rem"
    }, 1000);
})
/*****************/
skills.addEventListener("mouseover", function sk2dapp() {
    sk2d.style.opacity = "1"
    sk2d.style.left = "0"
})
skills.addEventListener("mouseout", function sk2ddapp() {
    setTimeout(function sk2ddapp() {
        sk2d.style.opacity = "0"
        sk2d.style.left = "-5rem"
    }, 750);
})
/*****************/
skills.addEventListener("mouseover", function sk3dapp() {
    sk3d.style.opacity = "1"
    sk3d.style.left = "0"
})
skills.addEventListener("mouseout", function sk3ddapp() {
    setTimeout(function sk3ddapp() {
        sk3d.style.opacity = "0"
        sk3d.style.left = "-5rem"
    }, 500);
})

/*****************/
skills.addEventListener("mouseover", function devskillsapp() {
    devskills.style.opacity = "1"
    devskills.style.left = "0"
})
skills.addEventListener("mouseout", function devskillsdapp() {
    setTimeout(function devskillsdapp() {
        devskills.style.opacity = "0"
        devskills.style.left = "-5rem"
    }, 1250);
})
/*****************/
skills.addEventListener("mouseover", function softskillsapp() {
    softskills.style.opacity = "1"
    softskills.style.left = "0"
})
skills.addEventListener("mouseout", function softskillsdapp() {
    setTimeout(function softskillsdapp() {
        softskills.style.opacity = "0"
        softskills.style.left = "-5rem"
    }, 1250);
})
/*****************/
skills.addEventListener("mouseover", function sk1sapp() {
    sk1s.style.opacity = "1"
    sk1s.style.left = "0"
})
skills.addEventListener("mouseout", function sk1sdapp() {
    setTimeout(function sk1dapp() {
        sk1s.style.opacity = "0"
        sk1s.style.left = "-5rem"
    }, 1000);
})
/*****************/
skills.addEventListener("mouseover", function sk2sapp() {
    sk2s.style.opacity = "1"
    sk2s.style.left = "0"
})
skills.addEventListener("mouseout", function sk2sdapp() {
    setTimeout(function() {
        sk2s.style.opacity = "0"
        sk2s.style.left = "-5rem"
    }, 750);
})
/*****************/
skills.addEventListener("mouseover", function sk3sapp() {
    sk3s.style.opacity = "1"
    sk3s.style.left = "0"
})
skills.addEventListener("mouseout", function sk3sdapp() {
    setTimeout(function sk3sdapp() {
        sk3s.style.opacity = "0"
        sk3s.style.left = "-5rem"
    }, 500);
})

/*************/

/*****************/
let scrl = document.getElementById("scrl")

window.onscroll = function () {
    console.log(window.scrollY)
    if (window.scrollY >= 800) {
        scrl.style.display = "block"

    } else {
        scrl.style.display = "none"
    }

}

scrl.onclick = function scrolling () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}