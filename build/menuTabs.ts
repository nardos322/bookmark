const menuTabs = document.querySelectorAll('.tab-show p') as NodeListOf<HTMLParagraphElement>;
const p1 = document.querySelector('.p1') as HTMLParagraphElement;
const p2 = document.querySelector('.p2') as HTMLParagraphElement;
const p3 = document.querySelector('.p3') as HTMLParagraphElement;
const tab1 = document.querySelector('.tab1') as HTMLElement;
const tab2 = document.querySelector('.tab2') as HTMLElement;
const tab3 = document.querySelector('.tab3') as HTMLElement;



export function tabs(): void{

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('tab-view') || !tab.classList.contains('tab-view')) {
                switch (tab.innerHTML) {
                    case 'Simple Bookmarking':
                        p1.classList.add('tab-view');
                        p2.classList.remove('tab-view');
                        p3.classList.remove('tab-view');
                        tab1.style.opacity = '1';
                        tab2.style.opacity = '0';
                        tab3.style.opacity = '0';
                        break;
                    case 'Speedy Searching':
                        p1.classList.remove('tab-view');
                        p2.classList.add('tab-view');
                        p3.classList.remove('tab-view');
                        tab1.style.opacity = '0';
                        tab2.style.opacity = '1';
                        tab3.style.opacity = '0';
                        break;
                    case 'Easy Sharing':
                        p1.classList.remove('tab-view');
                        p2.classList.remove('tab-view');
                        p3.classList.add('tab-view');
                        tab1.style.opacity = '0';
                        tab2.style.opacity = '0';
                        tab3.style.opacity = '1';
                        break;
                };


            };
        });
    });

}



