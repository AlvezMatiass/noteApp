import { Text, View, StatusBar, ActivityIndicator, SafeAreaView } from 'react-native';
import { styles } from './style';
import RootNavigator from './navigation';
import { useFonts } from 'expo-font';
//import { Provider } from 'react-redux';
//import { store } from './store';

export default function App() {

  const [loaded] = useFonts({
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf')
  })

  if(!loaded) {
    return (
      <View style={styles.loaded}>
        <ActivityIndicator />
      </View>
    )
  }

  return (

    //<Provider store={store} >
      <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={'#212121'} />
          <RootNavigator />
      </SafeAreaView>
    //</Provider>
  );
}
