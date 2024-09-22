/*
        1. 开始事件==》开始按钮消失，禁止按钮显示
2. 生成随机数？？如何随机抽盒子来显示
3. 间隔一定毫秒数，随机隐藏一个小老鼠，并显示该位置的一个大老鼠
4. 只有捕捉到点击事件才会：隐藏大老鼠，显示小老鼠      
        */


// 当加载到js代码时就自动生成多个老鼠的元素
const groud = document.querySelector(".groud")
const miceCount=12
for (let index = 0; index < miceCount; index++) {
    const home = document.createElement("div")
    home.classList.add("home")
    
    const small = document.createElement("div")
    small.classList.add("small")

    const big = document.createElement("div")
    big.classList.add("big")
    big.textContent="鼠"

    home.append(small)
    home.append(big)
    groud.append(home)         
}

let start = document.querySelector(".start")
let stop = document.querySelector(".stop")

let home = document.querySelectorAll(".home")
let timer = document.querySelector(".timer")
let btn = document.querySelector(".btn")

mice = Array.from(home)
// 隐藏所有的大老鼠，显示所有的小老鼠
let init = function () {
    for (let i = 0; i < mice.length; i++) {
        mice[i].children[1].style.display = 'none'
        mice[i].children[0].style.display = 'block'
    }
}

// 一开始全部的大老鼠都隐藏
document.addEventListener("DOMContentLoaded", init())
let random = 0;
let timerId;
let second = 0;



start.addEventListener("click", () => {
    init()
    // 清空原来的计时文本
    clearInterval(timerId)
    second = 0
    timer.innerHTML = second

    // 隐藏开始按钮，显示停止按钮
    start.style.display = 'none'
    stop.style.display = 'block'
    btn.style.backgroundColor = '#ef8182'


    timerId = setInterval(function () {

        second++
        timer.innerHTML = second
        random = parseInt(Math.floor(Math.random() * mice.length));
        let randomBox = mice[random]

        console.log(randomBox)
        let small = randomBox.children[0]
        let big = randomBox.children[1]
        // 隐藏小老鼠，显示大老鼠
        small.style.display = 'none'
        big.style.display = 'block'
        // 随机隐藏一个小老鼠，并显示该位置的一个大老鼠
        // 捕捉鼠标点击事件，
        big.addEventListener("click", () => {
            big.style.display = 'none'
            small.style.display = 'block'
        })
    }, 1000)
})

stop.addEventListener("click", () => {
    clearInterval(timerId)

    // 显示开始按钮，隐藏停止按钮
    stop.style.display = 'none'
    start.style.display = 'block'
    btn.style.backgroundColor = '#86d1ec'
})