import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { Slider } from 'react-native-elements';


const CustomPacket = () => {
  const [product, setProduct] = useState(null);

  //function MyComponent() {
    const [standardPedQuantity, setStandardPedQuantity] = useState(0);
    const [superPedQuantity, setSuperPedQuantity] = useState(0);
    const [superPlusPedQuantity, setSuperPlusPedQuantity] = useState(0);
    const [beijeGunlukPedQuantity, setBeijeGunlukPedQuantity] = useState(0);
    const [beijeSuperGunlukPedQuantity, setBeijeSuperGunlukPedQuantity] = useState(0);
    const [beijeMiniTamponQuantity, setBeijeMiniTamponQuantity] = useState(0);
    const [beijeStandartTamponQuantity, setBeijeStandartTamponQuantity] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    
  

  return (
    <View style={styles.container}>
      <View style={styles.packets}>
        <TouchableOpacity
          onPress={() => setProduct('beije-ped')}
          style={styles.packet}>
         
          <Text style={styles.packetText}>Beije Ped</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setProduct('beije-gunluk-ped')}
          style={styles.packet}>
         
          <Text style={styles.packetText}>Beije günlük ped</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setProduct('beije-tampon')}
          style={styles.packet}>
         
          <Text style={styles.packetText}>Beije Tampon</Text>
        </TouchableOpacity>

        {/* diğer ürünler */}
      </View>
    
      {product === 'beije-ped' && (
        <View style={styles.productOptions}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.productOptionText}>Standart Ped</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={60}
              step={10}
              thumbTintColor="#262626"
              trackStyle={{ height: 5, backgroundColor: '#f9f5f2' }}
              value={standardPedQuantity}
              onValueChange={(value) => setStandardPedQuantity(value)}
              
            />
            <Text style={styles.sliderValue}>{standardPedQuantity}</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.productOptionText}>Süper Ped</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={60}
              step={10}
              thumbTintColor="#262626"
              trackStyle={{ height: 5, backgroundColor: '#f9f5f2' }}
              value={superPedQuantity}
              onValueChange={(value) => setSuperPedQuantity(value)}
            />
            <Text style={styles.sliderValue}>{superPedQuantity}</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.productOptionText}>Süper+ Ped</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={60}
              step={10}
              thumbTintColor="#262626"
              trackStyle={{ height: 5, backgroundColor: '#f9f5f2' }}
              value={superPlusPedQuantity}
              onValueChange={(value) => setSuperPlusPedQuantity(value)}
            />
            <Text style={styles.sliderValue}>{superPlusPedQuantity}</Text>
          </View>
        </View>
      )}
    
    {product === 'beije-gunluk-ped' && (
        <View style={styles.productOptions}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.productOptionText}>Günlük Ped</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={10}
              thumbTintColor="#262626"
              trackStyle={{ height: 5, backgroundColor: '#f9f5f2' }}
              value={beijeGunlukPedQuantity}
              onValueChange={(value) => setBeijeGunlukPedQuantity(value)}
            />
            <Text style={styles.sliderValue}>{beijeGunlukPedQuantity}</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.productOptionText}>Süper Gunlük Ped</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={10}
              thumbTintColor="#262626"
              trackStyle={{ height: 5, backgroundColor: '#f9f5f2' }}
              value={beijeSuperGunlukPedQuantity}
              trackMarks={10}
              onValueChange={(value) => setBeijeSuperGunlukPedQuantity(value)}
            />
            <Text style={styles.sliderValue}>{beijeSuperGunlukPedQuantity}</Text>
          </View>
          
        </View>
      )}


{product === 'beije-tampon' && (
  <View style={styles.productOptions}>
  <View style={{ marginTop: 20 }}>
    <Text style={styles.productOptionText}>Mini Tampon</Text>
    <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={60}
      step={10}
      thumbTintColor="#262626"
      trackStyle={{ height: 5, backgroundColor: '#f9f5f2' }}
      value={beijeMiniTamponQuantity}
      onValueChange={(value) => setBeijeMiniTamponQuantity(value)}
    />
    <Text style={styles.sliderValue}>{beijeMiniTamponQuantity}</Text>
  </View>
  <View style={{ marginTop: 20 }}>
    <Text style={styles.productOptionText}>Standart Tampon</Text>
    <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={60}
      step={10}
      thumbTintColor="#262626"
      trackStyle={{ height: 5, backgroundColor: '#f9f5f2' }}
      value={beijeStandartTamponQuantity}
      onValueChange={(value) => setBeijeStandartTamponQuantity(value)}
    />
    <Text style={styles.sliderValue}>{beijeStandartTamponQuantity}</Text>
  </View>
  
</View>
)} 
    <TouchableOpacity style={styles.packButton}>
      <Text style={styles.packButtonText}>Paketini Gör</Text>
    </TouchableOpacity>
    </View>
    
  );
}


//const newLocal = '';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  },
  packets: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  packet: {
    margin: 10,
    padding: 10,
    
  },
  packetText: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 90,
    textAlign: 'center',
  },
  productOptions: {
    marginTop: 10,
    padding: 10,
  },
  productOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,

  },
  productOptionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepperButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  stepperValue: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  packButton: {
    backgroundColor: '#262626',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 130,
    textAlign: 'center',
    marginTop: 30,
    
  },
  packButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  slider: {
    width: 350,
    height: 40,
    
  },
  sliderValue: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },

  

});

export default CustomPacket;