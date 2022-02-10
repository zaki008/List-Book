import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Book1 } from '../../assets/image';
import { BookItem, Gap, Header, Loading } from '../../shared/components';
import { getBooksAction } from '../../shared/redux/actionTypes';
import Colors from '../../shared/styles/colors';

const Book = ({navigation}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.book);

    useEffect(() => {
    dispatch(getBooksAction());
    }, []);
  return (
    <View style={styles.page}>
      <Header title={'List Books'} onPress={() => navigation.goBack()} />
      {state.isLoading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          {state.books !== undefined ? (
            state.books.map((book) => {
              return (
                <View key={book.id}>
                  <BookItem
                    type={'detail'}
                    title={book.title}
                    author={book.author}
                    price={`$${book.price.toLocaleString('en-US')}`}
                    image={{uri: book.cover_image}}
                    onPress={() => navigation.navigate('BookDetail', book.id)}
                  />
                  <Gap height={40} />
                </View>
              );
            })
          ) : (
            <Text>Empty</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
}

export default Book

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  wrapper:{
    padding: 20,
  }
});