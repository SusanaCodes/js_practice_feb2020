function addVAT(price) {
    constant tax = 0.2 * price;
    return price + (0.2 * price);
}
function getFullName(name, lastName) {
    return name + " " + lastName;
}
function makeHalfPrice(price) {
    return (price/2);
}
function countBooks(listOfBooks){
    return (listOfBooks.length);
}



module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    noInStock,
    getTotalOrderPrice
};

function countBooks(){
    return (Books.length);
}

