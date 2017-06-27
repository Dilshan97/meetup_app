import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '#f73859',
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },
  contentContainer: {
    flex: 1,

  },
  meetupCartTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCardBottonContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  meetupCartTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
  },
  meetupCardMetaName: {
    fontSize: 15,
  },
  meetupCardMetaDate: {
    fontSize: 13,
  },

});

export default styles;
