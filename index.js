const boxes = document.querySelectorAll('.box')
const text = document.querySelector('.text')
const text2 = document.querySelector('.text2')
const texts = document.querySelector('.texts')

// for (let i = 0; i < boxes.length; i++) {
//     const box = boxes[i]
//     box.addEventListener('mouseover', function() {
//         const targetText = this.dataset.targetText
//         text.innerText = targetText
//     })
// }
var i = 1
i = 2 
console.log(i);

for (let box of boxes) {
    box.addEventListener('mouseover', function() {
        const targetText = this.dataset.text
        text2.innerText = targetText
        texts.classList.add('active');
    })

    box.addEventListener('mouseleave', function() {
        text.innerText = text2.innerText
        texts.classList.remove('active');
    })
}

// for (let i in boxes) {
//     const box = boxes[i]
//     console.log(i, box)
//     box.addEventListener('mouseover', function() {
//         const targetText = this.dataset.targetText
//         text.innerText = targetText
//     })
// }