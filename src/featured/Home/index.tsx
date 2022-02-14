import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../shared/styles/colors';
import {
  BookItem,
  CategoryItem,
  Gap,
  Header,
  Loading,
  Logout,
  TitleItemHome,
} from '../../shared/components';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksAction, logoutAction} from '../../shared/redux/actionTypes';
import {RootState} from '../../shared/redux/rootReducer';
import {BookState} from '../../shared/interface';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.book);
  const {topNewRelease, isLoading}: BookState = state;

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <View style={styles.page}>
      <Header type={'icon-filter'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TitleItemHome
            title="Top New Release"
            onPress={() => navigation.navigate('Book')}
          />
          <View style={styles.wrapperScroll}>
            {isLoading ? (
              <Loading />
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.book}>
                  <Gap width={16} />
                  {topNewRelease !== undefined ? (
                    topNewRelease.map(topRelease => {
                      return (
                        <BookItem
                          key={topRelease.id}
                          title={
                            topRelease.title.length < 12
                              ? topRelease.title
                              : `${topRelease.title.substr(0, 12)}...`
                          }
                          author={topRelease.author}
                          price={topRelease.price}
                          image={topRelease.cover_image}
                          onPress={() =>
                            navigation.navigate('BookDetail', topRelease.id)
                          }
                        />
                      );
                    })
                  ) : (
                    <Text>Kosong</Text>
                  )}
                  <Gap width={4} />
                </View>
              </ScrollView>
            )}
          </View>
          <Gap height={24} />
          <TitleItemHome title="Top Categories" />
          <Gap height={16} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <CategoryItem
                  title={'Drama'}
                  contentStyle={[{backgroundColor: Colors.purple1}]}
                />
                <CategoryItem
                  title={'Photograpy'}
                  contentStyle={[{backgroundColor: Colors.blue2}]}
                />
                <CategoryItem
                  title={'Basket'}
                  contentStyle={[{backgroundColor: Colors.orange1}]}
                />
                <CategoryItem
                  title={'Football'}
                  contentStyle={[{backgroundColor: Colors.green2}]}
                />
                <Gap width={4} />
              </View>
            </ScrollView>
          </View>
          <Gap height={24} />
          <View style={styles.logout}>
            <Logout onPress={handleLogout} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    padding: 16,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  book: {
    flexDirection: 'row',
  },
  category: {
    flexDirection: 'row',
  },
  logout: {
    alignItems: 'center',
  },
});
