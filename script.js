const searchEl=document.querySelector('.search-bar-container');
const magnifierEl=document.querySelector('.magnifier');

magnifierEl.addEventListener('click',()=>{
 searchEl.classList.toggle('active')
})