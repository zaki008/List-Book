import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Font, Size} from '../../shared/styles/fonts'
import Colors from '../../shared/styles/colors'
import {BookItem, CategoryItem, Gap, Header, Link, Loading, Logout} from '../../shared/components'
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction, logoutAction } from '../../shared/redux/actionTypes';

const Home = ({navigation}) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.book);
  const {topNewRelease, isLoading} = state;

  useEffect(() => {
    dispatch(getBooksAction());
  },[])

  const handleLogout =  () => {
    dispatch(logoutAction());
  }

  return (
    <View style={styles.page}>
      <Header type={'icon-filter'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Top New Release</Text>
            <Link
              type="secondary"
              title={'View all'}
              size={Size.medium}
              onPress={() => navigation.navigate('Book')}
            />
          </View>
          <View style={styles.wrapperScroll}>
            {isLoading ? (
              <Loading />
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.book}>
                  <Gap width={16} />
                  {topNewRelease !== undefined ? (
                    topNewRelease.map((book, index) => {
                      return (
                        <BookItem
                          key={index}
                          title={
                            book.title.length < 12
                              ? book.title
                              : `${book.title.substr(0, 12)}...`
                          }
                          author={book.author}
                          price={`$${book.price.toLocaleString('en-US')}`}
                          image={{uri: book.cover_image}}
                          onPress={() =>
                            navigation.navigate('BookDetail', book.id)
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
          <View style={styles.wrapper}>
            <Text style={styles.title}>Top Categories</Text>
            <Link type="secondary" title={'View all'} size={Size.medium} />
          </View>
          <Gap height={16} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <CategoryItem title={'Drama'} color={Colors.purple1} />
                <CategoryItem title={'Photograpy'} color={Colors.blue2} />
                <CategoryItem title={'Basket'} color={Colors.orange1} />
                <CategoryItem title={'Football'} color={Colors.green2} />
                <Gap width={4} />
              </View>
            </ScrollView>
          </View>
          <Gap height={24} />
          {/* <View style={styles.wrapper}>
            <Text style={styles.title}>Top New Release</Text>
            <Link type="secondary" title={'View all'} size={Size.medium} />
          </View> */}
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
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Size.medium,
    fontFamily: Font.primary[500],
    color: Colors.black1,
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
  logout:{
    alignItems:'center'
  }
});
