// function takeQuantity(id, oparator) {
//     const caseInput = document.getElementById(id);
//     const caseNumber = caseInput.value;

//     if (oparator == '+') {
//         const caseAmount = parseInt(caseNumber) + 1;
//         caseInput.value = caseAmount;
//     }
//     else {
//         const caseAmount = parseInt(caseNumber) - 1;
//         caseInput.value = caseAmount;
//     }
//     return caseInput;
// }

// take input quantity function
function updateQuantity(id, isIncresing) {
    const productInput = document.getElementById(id + '-number');
    let productNumber = productInput.value;
    const productAmount = parseInt(productNumber);
    if (isIncresing == true) {
        productNumber = productAmount + 1;
    }
    else if (isIncresing == false) {
        if (productInput.value > 0) {
            productNumber = productAmount - 1;
        }
    }

    productInput.value = productNumber;


    // update product price
    if (id == 'mobile') {
        const mobileTotal = document.getElementById('mobile-total');
        mobileTotal.innerText = productNumber * 1219;
    }
    else {
        const caseTotal = document.getElementById('case-total');
        caseTotal.innerText = productNumber * 59;
    }
}


document.getElementById('case-plus').addEventListener('click', function () {
    updateQuantity('case', true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateQuantity('case', false);
})


document.getElementById('phone-plus').addEventListener('click', function () {
    updateQuantity('mobile', true, 'mobile');
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateQuantity('mobile', false, 'mobile');
})