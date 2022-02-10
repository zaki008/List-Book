import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Book1, IcStar } from '../../../../assets/image';
import Colors from '../../../styles/colors';
import { Font, Size } from '../../../styles/fonts';

const ContentDetail = ({image, title, author, review, desc}) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={image} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <View style={styles.Wrapper}>
          <View style={styles.wrapperStar}>
            <Image source={IcStar} style={styles.star} />
            <Image source={IcStar} style={styles.star} />
            <Image source={IcStar} style={styles.star} />
            <Image source={IcStar} style={styles.star} />
            <Image source={IcStar} style={styles.star} />
          </View>
          <Text style={styles.review}>{review} Review</Text>
        </View>
      </View>
      <Text style={styles.desc}>{desc}</Text>
    </>
  );
};

export default ContentDetail

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.primary[500],
    fontSize: Size.h5,
    color: Colors.black1,
    textAlign: 'center'
  },
  author: {
    fontFamily: Font.primary[500],
    fontSize: Size.medium,
    color: Colors.gray1,
  },
  img: {
    width: 180,
    height: 300,
  },
  Wrapper: {
    flexDirection: 'row',
  },
  wrapperStar: {
    flexDirection: 'row',
  },
  star: {
    width: 24,
    height: 24,
  },
  review: {
    marginLeft: 8,
    color: Colors.blue2,
    fontSize: Size.h6,
    fontFamily: Font.primary[600],
  },
  desc:{
    color:Font.primary[500],
    color:Colors.black1,
    fontSize:Size.medium,
    padding: 20,
    lineHeight:24,
  }
});