function submitBirth(){
    const birthDay = document.querySelector("birthday").value
    var y = birthDay.split('-')[0]
    var m = birthDay.split('-')[1]
    var d = birthDay.split('-')[2]
    loadToday()
}

function loadToday(){
    const today = new Date()
    var year = today.getFullYear()
    var month = today.getMonth()
    var day = today.getDate()
}