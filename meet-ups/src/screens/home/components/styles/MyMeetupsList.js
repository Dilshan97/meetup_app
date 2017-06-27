import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  meetupCard: {
    height: 200,
    width: 175,
    // marginHorizontal: '1.5%',
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '#f73859',
  },
  meetupCartTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCartTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
  },

});

export default styles;
