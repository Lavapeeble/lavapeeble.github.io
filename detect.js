//fadein animation
const hiddenthings = document.querySelectorAll(".hidden")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

hiddenthings.forEach((thing) => observer.observe(thing));


//infinite scroll
const container = document.querySelector("body")
const original = container.querySelector("main")
const copy = original.cloneNode(true)

const change = 30
window.scrollTo (0, change)

container.appendChild(copy)
window.addEventListener("scroll", () => {
    const halfway = original.clientHeight

    if (window.scrollY > halfway + change) {
        window.scrollTo(0, window.scrollY - halfway)
        textchange(1)
    } else if (window.scrollY < change) {
        window.scrollTo(0, halfway + window.scrollY)
        textchange(0)
    }
})

//infinite scroll text change
function textchange(increase) {
    document.querySelectorAll(".againstring").forEach((textappearance) => {
            if (increase > 0) {
                const againtxt = document.createTextNode(" again");
                textappearance.appendChild(againtxt);
            } else {
                textappearance.lastChild.remove();
                }
        })
}

// const container = document.querySelector("body")
// const original = container.querySelector("main")
// const threshold = 200

// window.addEventListener("scroll", () => {
//     if(window.scrollY > original.clientHeight + threshold) {
//         copy = original.cloneNode(true)
//         container.appendChild(copy)
//     }
// })