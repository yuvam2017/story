const lightButton  = document.getElementById('lightButton') 
const darkButton = document.getElementById('darkButton');

lightButton.addEventListener('click',e => {
        darkButton.classList.remove('btn-dark');
        darkButton.classList.add('btn-light');
        lightButton.classList.remove('btn-light');
        lightButton.classList.add('btn-dark');
        document.body.classList.remove('dark-mode');
})

darkButton.addEventListener('click',e => {
        darkButton.classList.remove('btn-light');
        lightButton.classList.remove('btn-dark');
        darkButton.classList.add('btn-dark');
        lightButton.classList.add('btn-light');
        document.body.classList.add('dark-mode');
})