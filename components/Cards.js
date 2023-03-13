import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Cards = () => {
  return (
    <View style={styles.card}>
      <View>
        
        <Text style={styles.baslık}>Kendi Paketini Oluştur</Text>
        <Text style={styles.info}>Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          miktarlardan,sana özel bir paket oluşturalım.
        </Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f5f2',
    height: 200,

  },
 
  baslık: {
    fontSize: 37,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 90,
    marginLeft: 20,
    fontFamily: 'sans-serif-condensed',
  
  },
  info: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
    color: 'gray',
  },
});

export default Cards;