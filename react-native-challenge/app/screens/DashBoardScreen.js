import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import Loading from '../components/Loading';
import { getArticles, FilterArticles } from '../redux/actions/dashboardActions';
import { SearchBar } from 'react-native-elements';

function DashBoardScreen() {
    const myarticles = useSelector((state) => state.article);
    const filterdArticles = useSelector((state) => state.article.filteredArticles);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('');
    const fetchMoreData = () => {
        if (!myarticles.isListend && !myarticles.moreLoading) {
            setPage(page + 1);
        }
    }

    const requetAPI = () => {
        dispatch(getArticles(page));
    }
    const renderFooter = () => (
        <View style={style.footerText}>
            {myarticles.moreLoading && <View><Loading /></View>}
            {myarticles.isListend && <Text>No more articles now</Text>}
        </View>
    )
    const searchFilterFunction = (text) => {
        setSearch(text);
    }
    useEffect(() => {
        requetAPI();
    }, [page]);

    useEffect(() => {
        dispatch(FilterArticles(search));
    }, [search]);

    const renderItem = ({ item }) => (
        <ArticleCard article={item} />
    );
    return (
        <View style={style.container}>
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
                    onEndReachedThreshold={0}
                    onEndReached={fetchMoreData}
                    ListFooterComponent={renderFooter}

                />)}
        </View>

    );
}
export default DashBoardScreen;

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    footerText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
});


