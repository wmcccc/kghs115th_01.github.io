const darkcolor = {
    'body': {
        'backgroundColor': 'black',
        'color': 'white'
    },
    '#headimg h3': {
        'backgroundColor': '#0099ff82',
        'color': 'black'
    },
    "#a4_1 h3" : {
        'backgroundColor': '#0099ff82',
    }, 
    'a': {
        'color':'white'
    },
    'h1': {
        'color': '#FFFFCC'
    },
    '.navbar a': {
        'color': 'white',
    },
    '.card': {
        'borderColor': '#CCFFFF'
    },
    '.description':{
        'color':'white'
    },
    '.ques': {
        'backgroundColor': '#92eeee',
        'color': 'black'
    },
    '.ans': {
        'backgroundColor': '#92eeee',
        'color': 'black'
    }
    
};

const brightcolor = {
    'body': {
        'backgroundColor': '#f1f8f9',
        'color': 'black'
    },
    '#headimg h3': {
        'backgroundColor': '#A1D8E8',
        'color': 'white'
    },
    '#a4_1 h3': {
        'backgroundColor': '#A1D8E8',
        'color': 'white'
    },
    'a': {
        'color':'black'
    },
    'h1': {
        'color': '#8cb9e6' // 馬卡龍藍
    },
    '.navbar a': {
        'color': 'white',
    },
    '.card': {
        'borderColor': '#A9D8E4' // 淺藍邊框
    },
    '.description':{
        'color':'black'
    },
    '.ques': {
        'backgroundColor': '#F7D1E0', // 淺粉色背景
        'color': 'black'
    },
    '.ans': {
        'backgroundColor': '#F3C6A0', // 馬卡龍橘黃色背景
        'color': 'black'
    },
    'a': {
        'color': 'black' // 所有連結文字為黑色
    }
};

// 用於存儲當前狀態
let isBright = true;

// 將配色保存到localStorage
function saveColorScheme(isBright) {
    localStorage.setItem('isBright', isBright);
}

// 讀取並應用配色
function applyColorScheme() {
    const savedColorScheme = localStorage.getItem('isBright');
    if (savedColorScheme !== null) {
        isBright = JSON.parse(savedColorScheme); // 轉為boolean類型
    }

    const colorScheme = isBright ? brightcolor : darkcolor;
    for (let selector in colorScheme) {
        let elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            let styles = colorScheme[selector];
            for (let style in styles) {
                element.style[style] = styles[style];
            }
        });
    }
}

// 切換配色並保存狀態
function changeColor(){
    isBright = !isBright;
    const colorScheme = isBright ? brightcolor : darkcolor;
    for (let selector in colorScheme){
        let elements=document.querySelectorAll(selector);
        elements.forEach(element => {
            let styles=colorScheme[selector];
            for (let style in styles){
                element.style[style]=styles[style];
            }
        });
    }
    saveColorScheme(isBright);
}

// 頁面載入時應用保存的配色
document.addEventListener('DOMContentLoaded', () => {
    applyColorScheme(); // 應用配色
    const button = document.querySelector('#changecolor');
    button.addEventListener('click', changeColor);
});

function toggleText(){
    var hiddenText = document.getElementById("yesno3");
    if (hiddenText.style.display=='none' || hiddenText.style.display==''){
        hiddenText.style.display='block';
    }
    else{
        hiddenText.style.display='none';
    }
}