// console.log('javascript is running')
function validate(){
    const userName = document.getElementById('username').value
    const password = document.getElementById('userPassword').value
    // console.log(userName)
    // console.log(password)

if (userName == 'chinnu' || password =='black2'){
    open('next.html')
} else{
    alert('incorrect login credentials ')
}


}