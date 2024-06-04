const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


document.addEventListener('DOMContentLoaded', (event) => {
    // Select the register button
    const registerButton = document.getElementById('register');

    // Add click event listener to the button
    registerButton.addEventListener('click', function() {
        const url = 'https://forms.gle/oZ1u9SE1vtKBteFUA'; // Replace with the actual registration URL
        window.open(url, '_blank'); // Open the link in a new tab
    });
});