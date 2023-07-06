import {Platform, StyleSheet, I18nManager} from 'react-native';
import Colors from '../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    backgroundColor: Colors.white,
  },
  backArrow: {
    marginTop: 7,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerTitle: {
    alignSelf: 'center',
    marginTop: 12,
    color: Colors.black,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 260,
  },
  innerContainer: {
    padding: 18,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: Colors.black,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  discount: {
    color: Colors.red,
    fontWeight: 'bold',
  },
  price: {
    color: Colors.black,
    fontWeight: 'bold',
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
