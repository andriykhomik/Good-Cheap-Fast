const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle=> {
    console.log (toggle.value);
    toggle.addEventListener('change', (e)=> {
        doTheTrick(e.target.id);
    })
})

function doTheTrick(theClickedOne){
    if (good.checked && cheap.checked && theClickedOne === 'fast'){
        good.checked = !good.checked;
        theClickedOne.checked = true;
    }
    if (good.checked && fast.checked && theClickedOne === 'cheap'){
        fast.checked = !fast.checked;
        theClickedOne.checked = true;
    }
    if (cheap.checked && fast.checked && theClickedOne === 'good'){
        cheap.checked = !cheap.checked;
        theClickedOne.checked = true;
    }
}
