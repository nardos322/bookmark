const arrowDown = document.querySelectorAll('.fa-chevron-down') as NodeListOf<HTMLDivElement>;
const arrowUp = document.querySelectorAll('.fa-chevron-up') as NodeListOf<HTMLDivElement>;
const questions: NodeListOf<HTMLDivElement> = document.querySelectorAll('.questions');


const answers: string[] = [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet molestias natus hic inventore, ratione qui, soluta voluptates ex eum aliquam tempora veniam exercitationem aliquid quisquam ab enim itaque nam!` ,`Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`, `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
sollicitudin ex et ultricies bibendum.
`, ` Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
vitae neque eget nisl gravida pellentesque non ut velit.`];

let a1 = document.createElement('p') as HTMLParagraphElement;
let a2 = document.createElement('p') as HTMLParagraphElement;
let a3 = document.createElement('p') as HTMLParagraphElement;
let a4 = document.createElement('p') as HTMLParagraphElement;

let pAnswers: HTMLParagraphElement[] = [a1, a2, a3, a4];

export function accordion(): void{
    for(let i = 0; i < questions.length; i++){
        pAnswers[i].textContent = answers[i];
        pAnswers[i].classList.add('answer-hide');
        questions[i].appendChild(pAnswers[i]);
    };
    
    
    for(let i = 0; i < arrowDown.length; i++){
    
        arrowDown[i].addEventListener('click', e =>{
           
            if(e.target){
                arrowDown[i].style.display = 'none';
                arrowUp[i].style.display = 'block';
                pAnswers[i].classList.toggle('answer-hide');
                pAnswers[i].classList.toggle('answer-show');
                questions[i].style.height = 'auto';
                questions[i].style.gap = '10px';
                questions[i].style.padding = '15px 0';
                
            };
        });
        arrowUp[i].addEventListener('click', e => {
            if(e.target){
                arrowUp[i].style.display = 'none';
                arrowDown[i].style.display = 'block';
                pAnswers[i].classList.toggle('answer-hide');
                pAnswers[i].classList.toggle('answer-show');
                questions[i].style.height = '40px';
                questions[i].style.gap = '0';
                questions[i].style.padding = '0';
            };
        });
    };
    
}




