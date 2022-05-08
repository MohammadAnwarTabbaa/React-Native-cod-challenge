// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import ArticleCard from '../components/ArticleCard';
// import Loading from '../components/Loading';
// import { getArticles } from '../redux/actions/dashboardActions';
// import { List, ListItem } from 'react-native-elements';

// function DashBoardScreen() {
//     const myarticles = useSelector((state) => state.article.articles);
//     // console.log("teeeeeeeeeeeeeeeeessssssttttt", myevents.docs);
//     const dispatch = useDispatch();
//     const [page, setPage] = useState(1);
//     const [isLoadin, setIsLoading] = useState(false);
//     const [isRefreshing, setisRefreshing] = useState(false);
//     const loadUser = () => {
//         setIsLoading(true);
//     }



//     const handleMore = () => {
//         setPage(page + 1);
//         dispatch(getArticles(page));

//         // console.log(page);

//     }

//     useEffect(() => {
//         // dispatch(getArticles(page));
//         console.log(page);

//     }, []);
//     const renderItem = ({ item }) => (
//         <ArticleCard article={item} />
//     );
//     return (
//         myarticles && myarticles.length > 0 ? (
//             <FlatList
//                 data={myarticles}
//                 renderItem={renderItem}
//                 keyExtractor={i => i._id}
//                 onEndReached={handleMore}
//                 onEndReachedThreshold={0}

//             />

//         ) : <Loading />



//     );
// }
// export default DashBoardScreen;



import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import Loading from '../components/Loading';
import { getArticles } from '../redux/actions/dashboardActions';
import { List, ListItem } from 'react-native-elements';

function DashBoardScreen() {
    const myarticles = useSelector((state) => state.article);
    // console.log("teeeeeeeeeeeeeeeeessssssttttt", myevents.docs);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [isLoadin, setIsLoading] = useState(false);
    const [isRefreshing, setisRefreshing] = useState(false);
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

    useEffect(() => {
        requetAPI();
        console.log("current page", page);
    }, [page]);

    const renderItem = ({ item }) => (
        <ArticleCard article={item} />
    );
    return (
        <FlatList
            data={myarticles.articles}
            renderItem={renderItem}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            ListFooterComponent={renderFooter}
        />


    );
}
export default DashBoardScreen;