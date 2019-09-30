// import * as AT from '../actionType'
import nid from "nanoid"

const initialState = {
    popular: [
        {
            title: "Cotton Green Underwear Black Out Edition",
            img: "https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true", // t
            price: 2600,
            code: nid(10)
        },
        {
            title: "Cotton Green Underwear Green Out Edition",
            img: "https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true", // t
            price: 2600,
            code: nid(10)
        },
        {
            title: "Cotton Edition",
            img: "https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true", // t
            price: 2900,
            code: nid(10)
        },
        {
            title: "Underwear Black Out Edition",
            img: "https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true", // t
            price: 2200,
            code: nid(10)
        },
        {
            title: "Cotton Out Edition",
            img: "https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true", // t
            price: 1290,
            code: nid(10)
        },
        {
            title: "Out Biz Edition",
            img: "https://www.trippluggage.ie/images/products/standard/2825.jpg", // t
            price: 2292,
            code: nid(10)
        },
        {
            title: "Out Biz Six",
            img: "https://www.reisenthel.com/out/pictures/generated/product/1/780_780_75/m1_LC7053_pic1.jpg", // t
            price: 2190,
            code: nid(10)
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
