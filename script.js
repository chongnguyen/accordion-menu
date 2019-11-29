let btnDropdowns = document.getElementsByClassName('btn-dropdown');
let dropdowns = document.getElementsByClassName('dropdown');

for(let i = 0, len = dropdowns.length; i < len; i++){
    createEventAcc(btnDropdowns[i], dropdowns[i]);
    console.log(dropdowns[i].before);
}

function createEventAcc(btn, dropdown){
    btn.addEventListener('click', function(event){
        var height = dropdown.style.maxHeight || '0px';
        if(height === '0px'){
            dropdown.style.maxHeight = '200px';
        } else {
            dropdown.style.maxHeight = '0px';
        }
    });

    btn.addEventListener('blur', function(event){
        dropdown.style.maxHeight = '0px';
    });
}