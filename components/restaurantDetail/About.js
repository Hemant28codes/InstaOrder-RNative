/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Image } from "react-native";

// const yelpRestaurantInfo = {
//     name: 'Farmhouse Kitchen',
//     image: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
//     price: "$$",
//     reviews: '500',
//     categories: [{ title: 'Thai' }, { title: "Comfort Food" }, {title: "Coffee"}],
// };



// const image = "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";

// const title = "Farmhouse Kitchen";

// const description = "Thai * Comfort Food * $$ * 2 * 4 * (2913+)";

export default function About(props) {

    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(' • ');

    const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
        <Image source={{uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => {
    return (
        <Text style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
        }}>{props.name}</Text>
    );
};

const RestaurantDescription = (props) => {
    return (
        <Text style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}>{props.description}</Text>
    );
}
