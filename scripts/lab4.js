function sumValues(num1, num2, add) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }

    if (add) {
        let result = 0;
        result = num1 + num2;
        return result;
    } else {
        return false;  // FIXED: was `return !add`
    }
}

function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || typeof discount !== 'number') {
        return false;
    }

    if (prices.length === 0) return false;  // FIXED: return false for empty array

    const discounted = [];
    const length = prices.length;
    for (let i = 0; i < length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };
