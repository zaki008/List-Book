import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BookItem, Gap, Header, Loading} from '../../shared/components';
import {BookState} from '../../shared/interface';
import {getBooksAction} from '../../shared/redux/actionTypes';
import {RootState} from '../../shared/redux/rootReducer';
import Colors from '../../shared/styles/colors';

const Book = ({navigation}: any) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.book);
  const {books, isLoading}: BookState = state;

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  return (
    <View style={styles.page}>
      <Header title={'List Books'} onPress={() => navigation.goBack()} />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          {books !== undefined ? (
            books.map(book => {
              return (
                <View key={book.id}>
                  <BookItem
                    type={'detail'}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    image={book.cover_image}
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
};

export default Book;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  wrapper: {
    padding: 20,
  },
});
