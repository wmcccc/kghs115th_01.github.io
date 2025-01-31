const darkcolor = {
    'body':{
        'backgroundColor':'#003366',
        'color':'white'
    },
    'header':{
        'backgroundColor':'#6699CCd0',
        'color':'black'
    },
    'header a:hover':{
        'backgroundColor':'#99CCFFd0',
    },
    'h1':{
        'color':'#FFFFCC'
    },
    '.card':{
        'borderColor':'#CCFFFF'
    },
    '.navbar a':{
        'backgroundColor':'#031527d0',
    },
    '.navbar a:hover':{
        'backgroundColor':'#184f87d0',
    },
    '.ques':{
        'backgroundColor':'#92eeee',
        'color':'black'
    },
    '.ans':{
        'backgroundColor':'#92eeee',
        'color':'black'
    }
};

const brightcolor = {
    'body':{
        'backgroundColor':'#F0E4D4',
        'color':'black'
    },
    'header':{
        'backgroundColor':'#C9AB9B',
        'color':'black'
    },
    'header a:hover':{
        'backgroundColor':'white',
    },
    'h1':{
        'color':'#917B56'
    },
    '.card':{
        'borderColor':'#D18063'
    },
    '.navbar a':{
        'backgroundColor':'#A2B59F',
    },
    '.navbar a:hover':{
        'backgroundColor':'#D2D5B8',
    },
    '.ques':{
        'backgroundColor':'#F6B99D',
        'color':'black'
    },
    '.ans':{
        'backgroundColor':'#EECFBB',
        'color':'black'
    },
    'a':{
        'color':'black'
    }
};

let isBright = true;

function changeColor(){
    const colorScheme = isBright ? darkcolor : brightcolor; // ?後面第一個是False 第二個是True
    for (let selector in colorScheme){
        let elements=document.querySelectorAll(selector);
        elements.forEach(element =>{
            let styles=color[selector];
            for (let style in styles){
                element.style[style]=styles[style];
            }
        });
    }
    isBright=!isBright; 
}

document.addEventListener('DOMContentLoaded',()=>{
    const button=document.querySelector('#changecolor');
    button.addEventListener('click',changeColor);
})

function scrollToElement(elementId){
    const element=document.getElementById(elementId);
    if (element){
        element.scrollIntoView({behavior:'smooth',block:'start'});
    }
}