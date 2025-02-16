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

// button
const otherbtn = document.getElementById("btn-other");
const annibtn = document.getElementById("btn-anni");
const competebtn = document.getElementById("btn-compete");
const tripbtn = document.getElementById("btn-trip");
//
const other = document.getElementById("other");
const anni = document.getElementById("anni");
const compete = document.getElementById("compete");
const trip = document.getElementById("trip")


otherbtn.addEventListener('DOCContentLoaded', ()=> {
    other.style.display='block';
    anni.style.display='none';
    compete.style.display='none';
    trip.style.display='none';
});
otherbtn.addEventListener('click', ()=> {
    other.style.display='block';
    anni.style.display='none';
    compete.style.display='none';
    trip.style.display='none';
});

annibtn.addEventListener('click', ()=> {
    other.style.display='none';
    anni.style.display='block';
    compete.style.display='none';
    trip.style.display='none';
});

competebtn.addEventListener('click', ()=> {
    other.style.display='none';
    anni.style.display='none';
    compete.style.display='block';
    trip.style.display='none';
});

tripbtn.addEventListener('click', ()=> {
    other.style.display='none';
    anni.style.display='none';
    compete.style.display='none';
    trip.style.display='block';
});

const images = document.querySelectorAll('.runhorselight img');

images.forEach( (img) => {
    img.addEventListener('mouseenter', ()=> {
        const container = event.target.closest('.runhorselight');
        container.style.animationPlayState = "paused";

        //改<h4>
        const title = event.target.closest('.container1').parentElement.querySelector('h4');
        const currentimg = event.target.src;
        if (currentimg.includes("images/others1.png"))title.textContent = "新生訓練";
        else if (currentimg.includes("images/others2.png")) title.textContent = "高一下期末";
        else if (currentimg.includes("images/others3.png")) title.textContent = "日本交流";
        else if (currentimg.includes("images/99ani_1.png")) title.textContent = "99 - 高一校慶!";
        else if (currentimg.includes("images/99ani_2.png")) title.textContent = "99 - 三代同堂";
        else if (currentimg.includes("images/100ani_1.png")) title.textContent = "100 - 化妝遊行";
        else if (currentimg.includes("images/100ani_2.png")) title.textContent = "100 - 精神總錦標!";
        else if (currentimg.includes("images/100ani_3.png")) title.textContent = "100 - 園遊會";
        else if (currentimg.includes("images/100ani_4.png")) title.textContent = "100 - 精神總錦標之冰淇淋";
        else if (currentimg.includes("images/100ani_5.png")) title.textContent = "100 - 愛河路跑";
        else if (currentimg.includes("images/trip1.png")) title.textContent = "20231229 - 中央公園班遊";
        else if (currentimg.includes("images/trip2.png")) title.textContent = "暑假班遊 - 草悟道";
        else if (currentimg.includes("images/trip3.png")) title.textContent = "暑假班遊 - 麗寶樂園";
        else if (currentimg.includes("images/trip4.png")) title.textContent = "暑假班遊 - 高美濕地";
        else if (currentimg.includes("images/tabletennis.png")) title.textContent = "班際桌球";
        else if (currentimg.includes("images/badminton1.png")) title.textContent = "班際羽球-冠軍!";
        else if (currentimg.includes("images/badminton2.png")) title.textContent = "班際羽球";
        else if (currentimg.includes("images/badminton3.png")) title.textContent = "班際羽球";
        else if (currentimg.includes("images/basketball1.png")) title.textContent = "班際籃球";
        else if (currentimg.includes("images/basketball2.png")) title.textContent = "班際籃球";
        else if (currentimg.includes("images/basketball3.png")) title.textContent = "班際籃球";
    });
    img.addEventListener('mouseleave', ()=> {
        const container = event.target.closest('.runhorselight');
        container.style.animationPlayState = "running";

        //改<h4>
        const title = event.target.closest('.container1').parentElement.querySelector('h4');
        title.textContent = "";
    });
});