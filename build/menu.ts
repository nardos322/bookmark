const iconBurger = document.querySelector('#icon-burger') as HTMLImageElement;
const iconClose  = document.querySelector('#icon-close') as HTMLImageElement;
const navBar = document.querySelector('.nav-bar') as HTMLElement;
const navList  = document.querySelector('.nav-list') as HTMLUListElement;
const logo: HTMLImageElement = document.querySelector('.nav-logo');
const header: HTMLHeadingElement = document.querySelector('.hero');



export function burger(): void{
    iconBurger.addEventListener('click', () =>{
        if(iconBurger.classList.contains('icon-show')){
            iconBurger.classList.remove('icon-show');
            iconBurger.classList.add('icon-shut-down');
            iconClose.classList.remove('icon-shut-down');
            iconClose.classList.add('icon-show');
            navList.style.transform = "translateY(0)";
            navList.style.zIndex = '2';
            navList.style.position = 'fixed';
            
            logo.src = 'src/images/logo-bookmark-white.svg';
            navBar.style.zIndex = '3';
            navBar.style.position = 'fixed';
            header.style.height = '85px';
            navBar.style.width = '100%';
            navBar.style.paddingRight = '50px';
        };
        
    });
    
    iconClose.addEventListener('click', () => {
        if(iconClose.classList.contains('icon-show')){
            iconClose.classList.remove('icon-show');
            iconClose.classList.add('icon-shut-down');
            iconBurger.classList.remove('icon-shut-down');
            iconBurger.classList.add('icon-show');
            logo.src = 'src/images/logo-bookmark.svg';
            navList.style.transform = "translateY(-100%)";
            navBar.style.paddingRight = '0px';
            navBar.style.position = 'relative';
            
        };
    });
}


