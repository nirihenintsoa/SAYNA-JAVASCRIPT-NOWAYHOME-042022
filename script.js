// Bouton hover

let btn = document.querySelectorAll('.btn')

btn.forEach(
    (b) => {
        b.onmouseover = (event) => {
            b.classList.remove("button2")
            b.classList.add("button1")
        }

        b.onmouseout = (event) => {
            b.classList.remove("button1")
            b.classList.add("button2")
        }
    }
)


let social = []
social.push(document.getElementById("sm-f"))
social.push(document.getElementById("sm-i"))
social.push(document.getElementById("sm-t"))
social.push(document.getElementById("sm-y"))

try {
    social.forEach(
        (e) => {
            e.onmouseover = (event) => {
                e.style.filter = "invert(100%)"
                e.style.filter = "invert(100%)"
            }
            e.onmouseout = (event) => {
                e.style.filter = "invert(0%)"
            }
        }
    )
} catch (error) {

}


// Naavbar titre underline

let titre = document.querySelectorAll('li>a')

titre.forEach(
    (t) => {
        t.onmouseover = (event) => {
            t.style.textDecoration = "underline"
        }

        t.onmouseout = (event) => {
            t.style.textDecoration = ""
        }
    }
)

// // marvel slide
// document.getElementById('marvel').style.left = 0
// document.getElementById('marvel').style.transition = 'left 2s linear 1s'


let h1 = document.querySelectorAll('h1')

h1.forEach(
    (e) => {
        animate(e)

    }
)


function animate(element) {
    let op = 0

    setInterval(
        () => {
            element.style.filter = `opacity(${op++}%)`
        }, 100
    )

}

// Zoom hero
let hero = document.querySelectorAll('.card-img-top')

hero.forEach(
    (h) => {
        h.onmouseover = (event) => {
            console.log("in");
            h.style.width = 100
            h.style.height = 100
        }

        h.onmouseout = (event) => {
            console.log("out");
            h.style.width = 100
            h.style.height = 100
        }
    }
)

// bonus

let fin = new Date('05/04/2022 8:0 AM');

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    console.log("Mety");
    let now = new Date();
    let distance = fin - now;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'Fin!';
        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + 'Jour ';
    document.getElementById('countdown').innerHTML += hours + 'heure ';
    document.getElementById('countdown').innerHTML += minutes + 'min ';
    document.getElementById('countdown').innerHTML += seconds + 'sec';
}

setInterval(showRemaining, 1000);






