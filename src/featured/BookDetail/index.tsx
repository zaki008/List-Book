import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  ContentDetail,
  Gap,
  Header,
  Loading,
  Search,
} from '../../shared/components';
import {BookState} from '../../shared/interface';
import {bookDetailAction} from '../../shared/redux/actionTypes';
import {RootState} from '../../shared/redux/rootReducer';
import Colors from '../../shared/styles/colors';

interface BookDetail {
  navigation: any;
  route: any;
}

const BookDetail = ({navigation, route}: BookDetail) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.book);
  const {bookDetail, isLoading}: BookState = state;
  const Id = route.params;

  useEffect(() => {
    dispatch(bookDetailAction(Id));
  }, []);

  return (
    <View style={styles.page}>
      <Header title={'Book Detail'} onPress={() => navigation.goBack()} />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          <Gap height={20} />
          {bookDetail !== undefined ? (
            <ContentDetail
              image={bookDetail.cover_image}
              title={bookDetail.title}
              author={bookDetail.author}
              review={bookDetail.average_rating}
              desc={bookDetail.synopsis}
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
  wrapper: {
    marginHorizontal: 12,
    marginVertical: 20,
  },
});
