import React, { useEffect } from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ContentDetail, Gap, Header, Loading } from '../../shared/components';
import { bookDetailAction } from '../../shared/redux/actionTypes';
import Colors from '../../shared/styles/colors';

const BookDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.book);
  const {booksDetail, isLoading} = state;
  const Id = route.params;

  useEffect(() => {
    dispatch(bookDetailAction(Id));
  },[])
  return (
    <View style={styles.page}>
      <Header title={'Book Detail'} onPress={() => navigation.goBack()} />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          <Gap height={20} />
          {booksDetail !== undefined ? (
            <ContentDetail
              image={{uri: booksDetail.cover_image}}
              title={booksDetail.title}
              author={booksDetail.author}
              review={booksDetail.average_rating}
              desc={booksDetail.synopsis}
            />
          ) : (
            <Text>Kosong</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper:{
    marginHorizontal:12,
    marginVertical: 20,
  }
});
