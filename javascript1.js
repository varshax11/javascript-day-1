function calculateTotal(item, quantity) {
    let price;

    switch (item.toLowerCase()) {
        case 'pizza':
            price = 200;
            break;
        case 'burger':
            price = 300;
            break;
        case 'biriyani':
            price = 250;
            break;
        case 'apple juice':
            price = 150;
            break;
        case 'idli':
            price = 80;
            break;
    }

    return price * quantity;
}

let total = 0;


total += calculateTotal('pizza', 2); 
total += calculateTotal('burger', 1); 
total += calculateTotal('idli', 3); 


if (total > 500) {
    total = total - (total * 0.1);
}

console.log("Total Price: ₹" + total.toFixed(2));
