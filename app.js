function submitBirth(){
    const birthDay = document.querySelector("#birthday").value
    var y = Number(birthDay.split('-')[0])
    var m = Number(birthDay.split('-')[1])
    var d = Number(birthDay.split('-')[2])
    const today = new Date()
    var ty = today.getFullYear()
    var tm = today.getMonth() + 1
    var td = today.getDate()
    
    age = ty - y // 2023 - 2011 = 12
    if(m > tm || (m == tm && d > td)) { // 4 > 4 = false
        age = age - 1
    }

    document.getElementById('converted').innerHTML = "만 " + age + " 세"
}