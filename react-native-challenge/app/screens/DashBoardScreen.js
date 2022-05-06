import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import { getArticles } from '../redux/actions/dashboardActions';

export default function DashBoardScreen(props) {
    let myevents = [];
    myevents = useSelector((state) => state.article.articles.response);
    // console.log("teeeeeeeeeeeeeeeeessssssttttt", myevents.docs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticles());
    }, []);
    return (
        <ScrollView>
            <View>
                {myevents.docs.length > 0 ? (
                    myevents.docs.map((event) => <ArticleCard />)
                ) : (
                    <Text>there is no events yet</Text>
                )}
            </View>
        </ScrollView>

    );
}
