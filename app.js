// declaramos una funcion con el mismo nombre "formEuroToDollar"
// const fromEuroToDollar = function(valueInEuro){
//     // convertimos el valor a dolares
//     let valueInDollar = valueInEuro * 1.2;
//     // retornamos el valor
//     return valueInDollar;
// }



function fromEuroToDollar(euros){
    let EurotoDollar = euros * 1.2;
    return EurotoDollar;
}

function fromDollarToYen(dollars){
    let DollarToEuro = dollars * 1.2;
    let DollarToYen = DollarToEuro * 127.9;
    return Math.floor(DollarToYen);
}

function fromYanToPound(yan){
    let yanToEuro = yan * 127.9;
    let euroToPound = yanToEuro * 0.8;
    return Math.floor(euroToPound)
}

// module.exports ={
//     fromDollarToYen, fromEuroToDollar, fromYanToPound,
// };
module.exports = { fromDollarToYen, fromYanToPound, fromEuroToDollar}