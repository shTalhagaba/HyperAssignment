import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Colors from '../../common/colors';

function CommentSection(props) {
  const {item, onPress} = props;
  return (
    <>
      <View style={styles.rowContainer}>
        <View style={styles.rowContainer1}>
          <Image source={item.image} style={styles.userImage} />
          <Text allowFontScaling={false} style={styles.userName}>
            안녕 나 응애{' '}
          </Text>
          <Image
            source={require('../../assets/images/tick.png')}
            style={styles.verified}
          />
          <Text allowFontScaling={false} style={styles.postedDate}>
            1일전
          </Text>
        </View>

        <View style={styles.rowContainer2}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <Text allowFontScaling={false} style={styles.comment}>
        어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
        아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
        기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
        올라온다고 하니 꼭 봐주세용~!
      </Text>

      <View style={styles.heartContainer}>
        <Image
          source={require('../../assets/images/heart.png')}
          style={styles.heart}
        />
        <Image
          source={require('../../assets/images/message.png')}
          style={styles.message}
        />
      </View>

      <View style={styles.subInnerRow}>
        <View style={styles.row}>
          <Image source={item.image} style={styles.userImage} />
          <Text allowFontScaling={false} style={styles.userName}>
            안녕 나 응애{' '}
          </Text>
          <Image
            source={require('../../assets/images/tick.png')}
            style={styles.verified}
          />
          <Text allowFontScaling={false} style={{fontSize: 12, marginTop: 1}}>
            1일전
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <Text allowFontScaling={false} style={styles.reply}>
        오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
      </Text>
      <Image
        source={require('../../assets/images/heart.png')}
        style={styles.replyImage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  rowContainer1: {
    flexDirection: 'row',
  },
  userImage: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  userName: {
    color: Colors.black,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  verified: {
    marginRight: 6,
    marginTop: 2,
  },
  postedDate: {
    fontSize: 12,
    marginTop: 1,
  },
  rowContainer2: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    marginRight: 1,
    borderRadius: 50,
    backgroundColor: 'rgba(175, 185, 202, 1)',
  },
  comment: {
    paddingLeft: 55,
    paddingRight: 10,
  },
  heartContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  heart: {
    marginLeft: 50,
  },
  message: {
    marginLeft: 7,
  },
  subInnerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginLeft: 40,
  },
  row: {
    flexDirection: 'row',
  },
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  reply: {
    paddingLeft: 95,
    paddingRight: 10,
  },
  replyImage: {
    marginLeft: 90,
    marginTop: 5,
  },
});

export default CommentSection;
