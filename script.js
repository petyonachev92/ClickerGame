let money = 0;

function main() {
    let buttons = document.getElementsByTagName('button');
    document.getElementById('money').textContent = money;

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function() {addMoney(this)})
    }
    
}

function addMoney(btn) {

    console.log(btn);
    if(btn.className == 'disabled'){
        if(money < +btn.id){
            window.alert('You need more money to unlock this button!')
        } else {
            btn.className = 'enabled'
            money -= +btn.id;
        }
    } else {
        money += +btn.id;
    }

    let mon = document.getElementById('money')
    ;
    mon.textContent = money;
}

main();