// Header
const heightHeader = 100;
const btnOpenMenu = document.querySelector(".header__btn");
const mobileNav = document.querySelector(".nav_mobile");
const header = document.querySelector(".header");

btnOpenMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("nav_mobile--active");
    btnOpenMenu.classList.toggle("header__btn--active");
    header.classList.toggle("header--active");
    hides_showVerticalScrolling();
});


// Intro
const openModal = document.querySelector(".intro__content-item-back-video-btn");
const blockModal = document.querySelector(".intro__content-modal");
const closeModal = blockModal.querySelector(".intro__content-modal-content-close");

openModal.addEventListener("click", () => {
    blockModal.classList.add("intro__content-modal--active");
});

closeModal.addEventListener("click", () => {
    blockModal.classList.remove("intro__content-modal--active");
});


// Anchor
const anchorLinks = document.querySelectorAll(".link-anchor");

bruteForceLinks(anchorLinks);

function ScrollToElement(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - heightHeader,
        behavior: "smooth",
    });
};

function bruteForceLinks(anchorLinks, blockItems) {
    anchorLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const block = document.querySelector(`.${event.currentTarget.dataset.block}`);

            if (mobileNav.classList.contains("nav_mobile--active")) {
                mobileNav.classList.remove("nav_mobile--active");
                btnOpenMenu.classList.remove("header__btn--active");
                header.classList.remove("header--active");
                hides_showVerticalScrolling();
            };

            ScrollToElement(block);
        });
    });
};


// Modules
const modulesBlocks = document.querySelectorAll(".modules__content-items ul li");

modulesBlocks.forEach((block) => {
    const btnOpen = block.querySelector(".modules__content-item-content-btn");

    btnOpen.addEventListener("click", () => {
        const currentItem = event.currentTarget.closest(".modules__content-item-content-area");
        const activeBlock = currentItem.querySelector(".modules__content-item-content-items");

        activeBlock.classList.toggle("modules__content-item-content-items--active");

        if (activeBlock.classList.contains("modules__content-item-content-items--active")) {
            event.currentTarget.querySelectorAll("span")[1].innerHTML = "Скрыть";
        } else {
            event.currentTarget.querySelectorAll("span")[1].innerHTML = "Подробнее";
        };
    });
});


// Common
function hides_showVerticalScrolling() {
    /* Скрывает вертикальную прокрутку (чтобы не было тряски контента при появления popup).  */

    let overflow;

    const body = document.querySelector("body");

    const widthScroll = window.innerWidth - mobileNav.clientWidth;

    if (mobileNav.classList.contains("nav_mobile--active")) {
        overflow = "hidden";
    } else {
        overflow = "auto";
    };

    body.style.cssText = `
		padding-right: ${widthScroll}px;
		overflow: ${overflow};
	`;
};