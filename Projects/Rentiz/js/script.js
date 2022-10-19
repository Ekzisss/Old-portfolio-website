const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav');
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}

// FILTER

const filter = document.querySelector(".filter")

if (filter) {
    const items = filter.querySelectorAll(".block-filter")

    items.forEach(item => {
        item.addEventListener("click", event => {
            item.querySelector(".block-filter__icon").classList.toggle("_active");
            item.querySelector(".block-filter__dropdown").classList.toggle("_active");

            if (event.target.classList.contains("block-filter__item")) {
                item.querySelector(".block-filter__value").textContent = event.target.textContent;
            }
        })
    })
}


//theme

const theme_button = document.querySelector(".button__theme");
let theme = false;

theme_button.addEventListener("click", () => {
    theme? document.documentElement.style.setProperty("--sec_color", "#1AA090"):
    document.documentElement.style.setProperty("--sec_color", "rgb(189, 102, 102)");

    theme? document.documentElement.style.setProperty("--text_color", "#D6D6D6"):
    document.documentElement.style.setProperty("--text_color", "#e7bebe");
    theme = !theme;
})

//swiper

const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidersPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});