function submitBirth(){
    const birthDay = document.querySelector("birthday").value
    var y = birthDay.split('-')[0]
    var m = birthDay.split('-')[1]
    var d = birthDay.split('-')[2]
    loadToday()
}

function loadToday(){
    const today = new Date()
    var ty = today.getFullYear()
    var tm = today.getMonth()
    var td = today.getDate()
    convert()
}

function convert(){
    age = ty - y
    if(m == tm){
        if(d == td){
            age = age + 1
        }
    }
}