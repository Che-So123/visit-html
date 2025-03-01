const username = 'qwerty'
const password = '234567891'


document.getElementById('but').addEventListener('click', function(){
    const userInp = document.getElementById('user').value;
    const passInp = document.getElementById('pass').value;

    if (userInp === username && passInp === password){
        window.open('../4/osn.html')
    }
})