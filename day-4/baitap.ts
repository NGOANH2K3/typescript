const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const taps = $$('.tap-item') as NodeListOf<HTMLAreaElement>
const penes = $$('.tab-pane') as NodeListOf<HTMLAreaElement>

const line=$(".tabs .line") as HTMLBRElement | null;
const lineActive = $(".tab-item.active") as HTMLBRElement | null

if (line && lineActive){
    line.style.left = lineActive.offsetLeft + 'px'
    line.style.width = lineActive.offsetWidth + 'px'
}



taps.forEach((tab, index) => {
    const pane = penes[index];

    tab.addEventListener("click", function (event){
        const clickedTab = event.currentTarget as HTMLElement;

        const activeTab = $('.tab-item.active') as HTMLBRElement | null;
        const activePane = $('.tab-pane.active') as HTMLBRElement | null;

        if (activeTab) activeTab.classList.remove('active');
        if (activePane) activePane.classList.remove('active');

        if (line){
            line.style.left = `${clickedTab.offsetLeft}px`;
            line.style.width = `${clickedTab.offsetWidth}px`;
        }
        this.classList.add('active');
        pane.classList.add('active');
    })

})

