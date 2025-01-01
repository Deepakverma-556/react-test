import gridOne from "../assets/images/grid-img-1.webp"
import gridTwo from "../assets/images/grid-img-2.webp"
import gridThree from "../assets/images/grid-img-3.webp"
import gridFour from "../assets/images/grid-img-4.webp"
import gridFive from "../assets/images/grid-img-5.webp"
import gridSix from "../assets/images/grid-img-6.webp"
import gridSeven from "../assets/images/grid-img-7.webp"
import gridEight from "../assets/images/grid-img-8.webp"
import gridNine from "../assets/images/grid-img-9.webp"
import gridTen from "../assets/images/grid-img-10.webp"
import gridEleven from "../assets/images/grid-img-11.webp"
import gridTwelve from "../assets/images/grid-img-12.webp"
import { Right, Wrong } from "./icons"

export const GRID_LIST = [
    {
        myClass: "grid-item-1",
        image: gridOne,
        imageAlt: "grid-img-1"
    },
    {
        myClass: "grid-item-2",
        image: gridTwo,
        imageAlt: "grid-img-2"
    },
    {
        myClass: "grid-item-3",
        image: gridThree,
        imageAlt: "grid-img-3"
    },
    {
        myClass: "grid-item-4",
        image: gridFour,
        imageAlt: "grid-img-4"
    },
    {
        myClass: "grid-item-5",
        image: gridFive,
        imageAlt: "grid-img-5"
    },
    {
        myClass: "grid-item-6",
        image: gridSix,
        imageAlt: "grid-img-6"
    },
    {
        myClass: "grid-item-7",
        image: gridSeven,
        imageAlt: "grid-img-7"
    },
    {
        myClass: "grid-item-8",
        image: gridEight,
        imageAlt: "grid-img-8"
    },
    {
        myClass: "grid-item-9",
        image: gridNine,
        imageAlt: "grid-img-9"
    },
    {
        myClass: "grid-item-10",
        image: gridTen,
        imageAlt: "grid-img-10"
    },
    {
        myClass: "grid-item-11",
        image: gridEleven,
        imageAlt: "grid-img-11"
    },
    {
        myClass: "grid-item-12",
        image: gridTwelve,
        imageAlt: "grid-img-12"
    },
]

export const COMPETITION_LIST = [

    {
        service: "Mobile App",
        rift: <Wrong />,
        taxscouts: <Wrong />,
        coconut: <Right />,
        pie: <Right />,
    },
    {
        service: "Invoicing",
        rift: <Wrong />,
        taxscouts: <Wrong />,
        coconut: <Right />,
        pie: <Right />,
    },
    {
        service: "Bookkeeping",
        rift: <Wrong />,
        taxscouts: <Wrong />,
        coconut: <Right />,
        pie: <Right />,
    },
    {
        service: "Accountacy support",
        rift: <Right />,
        taxscouts: <Right />,
        coconut: <Wrong />,
        pie: <Right />,
    },
    {
        service: "Tax Filing",
        rift: <Right />,
        taxscouts: <Right />,
        coconut: <Right />,
        pie: <Right />,
    },
    {
        service: "Fee",
        rift: "Est: £300 per year",
        taxscouts: "£300 per year",
        coconut: "£9.00 p/m £108 per year",
        pie: "£6.99 or £9.99p/m £59.99 review fee £143.87 per year",
    },
]

export const CARD_LIST = [
    {
        title: "what is computer",
        description: "A computer is a machine that can store and process information. Most computers rely on a binary system, which uses two variables, 0 and 1, to complete tasks such as storing data, calculating algorithms, and displaying information."
    },
    {
        title: "what is cpu",
        description: "A computer is a machine that can store and process information. Most computers rely on a binary system, which uses two variables, 0 and 1, to complete tasks such as storing data, calculating algorithms, and displaying information."
    },
    {
        title: "what is code",
        description: "A computer is a machine that can store and process information. Most computers rely on a binary system, which uses two variables, 0 and 1, to complete tasks such as storing data, calculating algorithms, and displaying information."
    },
]