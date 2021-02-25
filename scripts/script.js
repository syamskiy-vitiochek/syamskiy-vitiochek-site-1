const calculate = () => {
    let data = prompt("Привет! Я калькулятор. Введите выражение, которое хотите посчитать.");
    if (data === null) {
        alert('Bвод отменён!')
    } else {
        try {
            data = data.replace(/,/g, ".");
            let result = eval(data);
            if (data === '') {
                alert('Bи ничего не ввели!');
            } else if (result === Infinity || result === -Infinity) {
                alert('На нуль делить нельзя!!!');
            } else if (isNaN(result)) {
                isError();
            } else {
                alert(result);
            }
        } catch {
            isError();
        }

    }
};
const isError = () => alert("Введите корректноё выражение!");
const calcucator = document.getElementById("calculator");
calcucator.addEventListener("click", calculate);