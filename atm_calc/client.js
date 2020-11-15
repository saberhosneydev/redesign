function calculate(inputAmount) {
    let error = document.getElementById("error");
    if (inputAmount < 10 || isNaN(inputAmount)) {
        error.innerHTML = "عيب ميصحش كدة"
    } else if (inputAmount > 9999) {
        error.innerHTML = "اخرك 9999 جنية يبشا"
    } else {
        error.innerHTML = "";
        let amount = Array.from(inputAmount.toString()).map(Number);
        let _200 = 0, _100 = 0, _50 = 0, _20 = 0, _10 = 0;
        if (amount.length == 4) {
            amount[0] = parseInt(amount[0] + "000");
            _200 += amount[0] / 200;
            amount.splice(amount.indexOf(amount[0]), 1);

        }
        while (amount.length == 3) {
            console.log("while 3");
            if (amount[0] == 0) {
                amount.splice(amount.indexOf(amount[0]), 1);
                break;
            }
            switch (amount[0]) {
                case 1:
                    _100 += 1;
                    amount[0] = 0;
                    break;
                case 2:
                    _200 += 1;
                    amount[0] = 0;
                    break;
                default:
                    _200 += 1;
                    amount[0] -= 2;
                    break;
            }

        }
        while (amount.length == 2) {
            console.log("while 2");
            if (amount[0] == 0) {
                amount.splice(amount.indexOf(amount[0]), 1);
                break;
            }
            switch (amount[0]) {
                case 1:
                    _10 += 1;
                    amount[0] -= 1;
                    break;
                case 2:
                    _20 += 1;
                    amount[0] -= 2;
                    break;
                case 3:
                    _20 += 1;
                    _10 += 1;
                    amount[0] -= 3;
                    break;
                case 4:
                    _20 += 2;
                    amount[0] -= 4;
                    break;
                default:
                    _50 += 1;
                    amount[0] -= 5;
                    break;
            }

        }
        document.getElementById("outputAmount").innerHTML = `
        <td>${_200}</td>
<td>${_100}</td>
<td>${_50}</td>
<td>${_20}</td>
<td>${_10}</td>
<td>${amount[0] || 0}</td>
<td>${Math.ceil(inputAmount / 3000)}</td>
        `;
    }
}