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
    height: 45,
    backgroundColor: Colors.white,
  },
  headerTxt: {
    alignSelf: 'center',
    marginTop: 12,
    color: Colors.black,
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
});
