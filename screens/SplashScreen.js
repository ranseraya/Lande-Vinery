import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';

export default function SplashScreen({ navigation }) {
useEffect(() => {
  const timer = setTimeout(() => {
    navigation.replace('MainTabs');
  }, 10000);
  return () => clearTimeout(timer);
}, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Lande Vinery</Text>
      <Text style={styles.tag}>Hijaukan Rumah, Panen Anggur</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#eafaf1'},
  logo:{width:120, height:120, marginBottom:16},
  title:{fontSize:28, fontWeight:'700'},
  tag:{marginTop:8, color:'#2d7a3e'}
});
