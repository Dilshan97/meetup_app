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
    backgroundColor: '$greenColor',
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'opnsen',
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
    fontFamily: 'opnsen',
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
    fontFamily: 'opnsenBold',
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'opnsen',
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'opnsenLight',
  },

});

export default styles;
