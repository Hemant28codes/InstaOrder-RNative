/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY = "5kHAguojQjRnzwb99BQh1VZHpGNnKSVZebagoj2A5plJS4VtzltBxsvxk4f_KkXDxvRJB1cpJxvh8p3jNsa3tzMgW6FDh66S4lwRx6DyTTIWTBclMs2jLHx0WtFKZHYx";

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Diego");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = async () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        const res = await fetch(yelpUrl, apiOptions);
        const json = await res.json();
        return setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())
        )
        );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
