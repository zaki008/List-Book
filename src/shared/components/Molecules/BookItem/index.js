import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../styles/colors';
import { Font, Size } from '../../../styles/fonts';

const BookItem = ({title, author, price, image, onPress, type}) => {
  if(type === 'detail'){
    return (
      <TouchableOpacity style={styles.containerDetail} onPress={onPress}>
        <Image source={image} style={styles.book} />
        <View style={styles.contentDetail}>
          <Text style={styles.bookTitle(type)}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
          <Text style={styles.bookPrice}>{price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.wrapperBook} onPress={onPress}>
      <Image source={image} style={styles.book}
      />
      <Text style={styles.bookTitle}>{title}</Text>
      <Text style={styles.bookAuthor}>{author}</Text>
      <Text style={styles.bookPrice}>{price}</Text>
    </TouchableOpacity>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  wrapperBook: {
    marginTop: 10,
    alignSelf: 'flex-start',
    borderRadius: 8,
    marginRight: 12,
  },
  book: {
    width: 140,
    height: 160,
  },
  bookTitle: () => ({
    color: Colors.black1,
    fontFamily: Font.primary[500],
    marginTop: 10,
    fontSize: Size.medium,
  }),
  bookAuthor: {
    color: Colors.gray1,
    fontSize: Size.small,
    fontFamily: Font.primary[500],
  },
  bookPrice: {
    color: Colors.green1,
    fontSize: Size.medium,
    fontFamily: Font.primary[600],
  },
  containerDetail: {
    flexDirection: 'row',
    alignItems:'center'
  },
  contentDetail:{
    marginLeft:20
  }
});