import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import CustomPacket from './components/CustomPacket';


const App = () => {

  return (
 
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.container}>
            <Header />
            <Cards />
            <CustomPacket />
            <Footer />
          </View>
        </ScrollView>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f5f2',
  },
});

export default App;