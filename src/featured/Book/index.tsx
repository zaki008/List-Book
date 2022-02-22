import {Formik, useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BookItem, Gap, Header, Loading, Search} from '../../shared/components';
import {BookState} from '../../shared/interface';
import {getBooksAction, SETBOOK} from '../../shared/redux/actionTypes';
import {RootState} from '../../shared/redux/rootReducer';
import Colors from '../../shared/styles/colors';

const Book = ({navigation}: any) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.book);
  const {books, isLoading}: BookState = state;
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: values => {
      let searchBook = books.filter(res => {
        return Object.values(res.title)
          .join('')
          .toLowerCase()
          .includes(values.search.toLowerCase());
      });
      values.search = '';
      dispatch({
        type: SETBOOK,
        payload: searchBook.map(book => {
          return {
            key: book.id,
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            cover_image: book.cover_image,
          };
        }),
      });
    },
  });

  const handleReset = () => {
    dispatch(getBooksAction());
  };

  return (
    <View style={styles.page}>
      <Header title={'List Books'} onPress={() => navigation.goBack()} />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          <Search
            name={'search'}
            onChangeText={formik.handleChange('search')}
            value={formik.values.search}
            onPress={formik.handleSubmit}
            onReset={handleReset}
          />
          <Gap height={20} />
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
    padding: 10,
  },
});
