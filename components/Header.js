import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { Linking } from 'react-native';



const Header = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/beijelogo2.png')} />
      <View style={{ justifyContent: 'space-around', flexDirection: 'row', width: 180 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
          <Ionicons name="cart-outline" size={30} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={30} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={30} color="#262626" />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isMenuOpen} onBackdropPress={toggleMenu} animationIn="slideInRight" animationOut="slideOutRight">
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL('https://beije.co/product/pads')}>
            <Text style={styles.menuItemText}>Ürünler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL('https://beije.co/know-us/why-beije')}>
            <Text style={styles.menuItemText}>Biz Kimiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL('https://beije.co/donation-culture')}>
            <Text style={styles.menuItemText}>Bağış Kültürü</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL('https://beije.co/')}>
            <Text style={styles.menuItemText}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL('https://beije.co/custom-packet')}>
            <Text style={styles.menuItemText}>Kendi Paketini Oluştur!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

  );
};
     


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f5f2',
    borderBottomColor: 'lightgray',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 10,
  },
  menuButton: {
    marginRight: 20,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: -20,
    right: -20,
    bottom: 0,
    
    height: '33%',
    backgroundColor: '#f9f5f2',
    paddingHorizontal: 0,
    marginTop: 100,
    justifyContent: 'flex-start',
    //alignItems: 'center',
  },

  menuOverlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    

    //backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: 'gray',
  },
  menuItemText: {
    fontSize: 20,
    color: '#262626',
  },
  
});


export default Header;