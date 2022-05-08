import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import Loading from '../components/Loading';
import { getArticles, FilterArticles } from '../redux/actions/dashboardActions';
import { List, ListItem, SearchBar } from 'react-native-elements';

function DashBoardScreen() {
    const myarticles = useSelector((state) => state.article);
    const filterdArticles = useSelector((state) => state.article.filteredArticles);
    // console.log("teeeeeeeeeeeeeeeeessssssttttt", myevents.docs);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [isLoadin, setIsLoading] = useState(false);
    const [isRefreshing, setisRefreshing] = useState(false);
    const [search, setSearch] = useState('');
    const loadUser = () => {
        setIsLoading(true);
    }
    const fetchMoreData = () => {
        if (!myarticles.isListend && !myarticles.moreLoading) {
            console.log("isListend", myarticles.isListend);
            console.log("moreLoading", myarticles.moreLoading);
            setPage(page + 1);
            console.log(page);
        }
    }

    const requetAPI = () => {
        dispatch(getArticles(page))
    }


    const handleMore = () => {
        setPage(page + 1);
        dispatch(getArticles(page));

        // console.log(page);

    }
    const renderFooter = () => (
        <View>
            {myarticles.moreLoading && <Loading />}
            {myarticles.isListend && <Text>No more articles now</Text>}
        </View>
    )
    const searchFilterFunction = (text) => {
        setSearch(text);
    }
    useEffect(() => {
        requetAPI();
        console.log("current page", page);
    }, [page]);

    useEffect(() => {
        dispatch(FilterArticles(search));
    }, [search]);

    const renderItem = ({ item }) => (
        <ArticleCard article={item} />
    );
    return (
        <View>
            <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={(text) => searchFilterFunction(text)}
                placeholder="Type Here..."
                lightTheme={true}
                value={search}

            />
            {search != "" ? (
                <FlatList
                    data={filterdArticles}
                    renderItem={renderItem}
                />

            ) : (
                <FlatList
                    data={myarticles.articles}
                    renderItem={renderItem}
                    onEndReachedThreshold={0.2}
                    onEndReached={fetchMoreData}
                    ListFooterComponent={renderFooter}
                />)}
        </View>

    );
}
export default DashBoardScreen;