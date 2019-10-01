// import * as AT from '../actionType'
import nid from "nanoid"

const initialState = {
    popular: [
        {
            title: "Cotton Green Underwear Black Out Edition (XL)",
            img: "https://res.cloudinary.com/dct4oinuz/image/upload/v1569928348/images/test-bag_1_d07zy6.jpg", // t
            price: 2600,
            code: nid(10)
        },
        {
            title: "Cotton Green Underwear Green Out Edition",
            img: "https://res.cloudinary.com/dct4oinuz/image/upload/v1569928691/images/test-bag_2_hz75wn.jpg", // t
            price: 2600,
            code: nid(10)
        },
        {
            title: "Cotton Edition (L)",
            img: "https://res.cloudinary.com/dct4oinuz/image/upload/v1569928348/images/test-bag_1_d07zy6.jpg", // t
            price: 2900,
            code: nid(10)
        },
        {
            title: "Underwear Black Out Edition",
            img: "https://res.cloudinary.com/dct4oinuz/image/upload/v1569928691/images/test-bag_2_hz75wn.jpg", // t
            price: 2200,
            code: nid(10)
        },
        {
            title: "Cotton Out Edition (M)",
            img: "https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true", // t
            price: 1290,
            code: nid(10)
        },
        {
            title: "Out Biz Edition",
            img: "https://res.cloudinary.com/dct4oinuz/image/upload/v1569929642/images/black_suitcase_qc2bbx.jpg", // t
            price: 2292,
            code: nid(10)
        },
        {
            title: "Out Biz Six",
            img: "https://res.cloudinary.com/dct4oinuz/image/upload/v1569929955/images/sa2black_rhgkb9.jpg", // t
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
