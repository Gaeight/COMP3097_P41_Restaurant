import { Restaurant } from "../models/restaurant";

const restaurant = [
    {
        id: 1,
        name: "Gyubee",
        address: "335 Bloor Street West",
        phone: "4165519767",
        description: "Good Korean BBQ all you can eat",
        tags: "Asian",
        rating: 4
    },
    {
        id: 2,
        name: "Shinta",
        address: "280 West Beaver Creek",
        phone: "9055970305",
        description: "Good japanese BBQ all you can eat",
        tags: "Asian",
        rating: 5
    },    
    {
        id: 3,
        name: "Lazeez",
        address: "739 Davis Dr",
        phone: "9058360234",
        description: "Authentic Middle Eastern Food",
        tags: "Middle Eastern",
        rating: 4
    },
];

export const getRestaurants = () => restaurant;