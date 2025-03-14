const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const taps = $$(".tab-item");
const penes = $$(".tab-pane");
const line = $(".tabs .line");
const lineActive = $(".tab-item.active");
if (line && lineActive) {
    line.style.left = lineActive.offsetLeft + 'px';
    line.style.width = lineActive.offsetWidth + 'px';
}
taps.forEach((tab, index) => {
    const pane = penes[index];
    tab.addEventListener("click", function (event) {
        const clickedTab = event.currentTarget;
        const activeTab = $(".tab-item.active");
        const activePane = $(".tab-pane.active");
        if (activeTab)
            activeTab.classList.remove("active");
        if (activePane)
            activePane.classList.remove("active");
        if (line) {
            line.style.left = `${clickedTab.offsetLeft}px`;
            line.style.width = `${clickedTab.offsetWidth}px`;
        }
        this.classList.add("active");
        pane.classList.add("active");
    });
});

// const $ = document.querySelector.bind(document)
// const $$= document.querySelectorAll.bind(document)

// const tabs = $$(".tab-item");
// const penes = $$(".tab-pane");

// const line=$(".tabs .line");
// const lineActive = $(".tab-item.active");

// line.style.left = lineActive.offsetLeft + "px";
// line.style.width = lineActive.offsetWidth + "px";

// tabs.forEach((tab, index) => {
//     const pene = penes[index];
//     tab.onclick = function () {
//         $(".tab-item.active").classList.remove("active");
//         $(".tab-pane.active").classList.remove("active");

//         line.style.left = this.offsetLeft + "px";
//         line.style.width = this.offsetWidth + "px";

//         this.classList.add("active");
//         pene.classList.add("active");
//     };
// });
