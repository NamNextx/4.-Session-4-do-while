function input() {
    do {
        value = parseInt(prompt("Nhập vào số từ 1 -> 10"));
        alert("Số bạn vừa nhập là " + value);
    } while (value >=1 && value <= 10);

    }
window.onload=input;