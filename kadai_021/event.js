
//ボタンはid btn のことだよ
const btn1 = document.getElementById('btn');
//ボタンクリックしたときの処理
btn1 = addEventListener('click',()=>{
//ボタン2はid textのことだよ
const btn2 =document.getElementById('text');
//二秒後に
setTimeout(() =>{
//btn2の文字列はこれだよ
    btn2.textContent = 'ボタンをクリックし真下'
}, 2000); 
//text btn2の処理に 書き換えてね
text.appendChild(btn2);
 
});