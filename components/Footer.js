import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TextInput,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const handleSubmit = () => {
  console.log(email); // e-postayı işle
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(email); // e-postayı işle
  };

  return (
    <View style={styles.container2}>
     <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/')}>
       <Text style={styles.viewPackageButton}>beije.</Text>
     </TouchableOpacity>
      
      <Text style={styles.info2}>Arayı açmayalım!</Text>
      <Text style={styles.info3}>Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-posta adresin"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.emailbutton}>
        <Button title="Gönder" onPress={handleSubmit} color="#262626"  />
      </View>

      <Text style={styles.info4}>Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</Text>
      
      <View>
  <View style={styles.row}>
    <View>
      <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/packets')}>
        <Text style={styles.viewPackageButton}>Paketler</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/product/trial')}>
        <Text style={styles.viewPackageButton}>Deneme Paketi</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/beije-tr/')}>
        <Text style={styles.viewPackageButton}>Ekibimize katıl</Text>
      </TouchableOpacity>
    </View>

    <View >
      <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/')}>
        <Text style={styles.viewPackageButton}>Blog</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/know-us/faqs')}>
        <Text style={styles.viewPackageButton}>Sıkça Sorulan Sorular</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/know-us/why-beije')}>
        <Text style={styles.viewPackageButton}>Biz kimiz?</Text>
      </TouchableOpacity>
    </View>
  </View>

        
        <View style={styles.iconContainer}>
          <FontAwesome5 name="facebook-square" size={30} color="gray" onPress={() => Linking.openURL('https://www.facebook.com/beijewomen/')} />
          <FontAwesome5 name="instagram" size={30} color="gray" onPress={() => Linking.openURL('https://www.instagram.com/beijewomen/')} />
          <FontAwesome5 name="twitter" size={30} color="gray" onPress={() => Linking.openURL('https://twitter.com/beijewomen')} />
          <FontAwesome5 name="linkedin" size={30} color="gray" onPress={() => Linking.openURL('https://www.linkedin.com/company/beije-tr/?originalSubdomain=tr')} />
          <FontAwesome5 name="spotify" size={30} color="gray" onPress={() => Linking.openURL('https://open.spotify.com/user/ma20bga4ewhwt96kx1p92f2uv')}/>
        </View>
        
        <View style={styles.info5}>
          <Text style={styles.info5}> 2023 beije. Tüm hakları saklıdır.</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/know-us/kvkk')}>
            <Text style={styles.info5}>KVKKAydınlatma Metni</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/know-us/membership-agreement')}>
            <Text style={styles.info5}>Üyelik Sözleşmesi</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/know-us/privacy')}>
            <Text style={styles.info5}>Gizlilik Politikası</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/know-us/cookies')}>
            <Text style={styles.info5}>Çerez Politikası</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => Linking.openURL('https://beije.co/know-us/test-results')}>
            <Text style={styles.info5}>Test Sonuçları</Text>
          </TouchableOpacity>   

        </View>

       </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 500,
    backgroundColor:'#262626',
    marginTop: 50,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
    color: '#f9f5f2',
  },
  viewPackageButton: {
    
    color: '#f9f5f2',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    width: 400,
    marginTop: 10,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  info2: {
    color: '#f9f5f2',
    fontSize: 16,
    //fontWeight: 'bold',
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: 400,
    marginTop: 1,
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info3: {
    color: '#f9f5f2',
    fontSize: 12,
    //fontWeight: 'bold',
    //padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: 400,
    marginTop: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info4: {
    color: '#f9f5f2',
    fontSize: 12,
    //fontWeight: 'bold',
    //padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: 400,
    marginTop: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'column',
    height: 1100,
    backgroundColor:'#262626',
    marginTop: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
    marginTop: 100,
  },
  info5: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    //padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: 400,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
    marginTop: 100,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#f9f5f2',
    backgroundColor: '#262626',
    color: '#f9f5f2',
    marginLeft: 55,
  },
  emailbutton: {
    backgroundColor: '#f9f5f2',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 100,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    
  },
  

});

export default Footer;