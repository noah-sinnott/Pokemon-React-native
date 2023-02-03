import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  centeredView: {
    display: 'flex',
    height: '90%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  container: { 
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  },

  images: {
    width: '70%',
    height: '40%',
  },
  
   button: {
    borderRadius: 20,  
    borderWidth: 1,
    padding: '5%',
    margin: 10
  },
  buttontext: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  
  stats: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '33%',
    flexWrap: 'wrap',
  }, 

  statItem: {
    flexBasis: '50%',
    textAlign: 'center',
  },

  statsContainer: {
    display: 'flex',
    alignContent: 'center',
    height: '30%',
  }, 
  title: {
    paddingTop: '10%',
  }
});
