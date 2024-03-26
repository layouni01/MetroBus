import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomAppBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    borderTopWidth:1,
    borderRadius: 20,
   

    borderTopColor: '#cccccc',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconText:{
fontSize:12,
fontWeight:"800",
  },
});

export default styles;
