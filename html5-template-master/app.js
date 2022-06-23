(() => {
    

document.querySelector('#ham').addEventListener('click', () => {
    document.querySelector('#ham').classList.toggle('open');
    document.querySelector('nav').classList.toggle('visible');
    document.querySelector('h1').classList.toggle('hidden');
    document.querySelector('#btn').classList.toggle('hidden');


}); 
    
    

})();