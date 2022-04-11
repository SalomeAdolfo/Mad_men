import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-native-elements';
import baseURL from '../routes/api';

const url = '/api/psicologos';
//Defino las rutas para la navegacion por rutas.
export default function UbicacionScreen() {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  function getId(id){
    console.log(id)
  }
  const getPsicologos = async () => {
    try {
      const response = await fetch(baseURL + url);
      const json = await response.json();
      setInfo(json.data);
      console.log(json.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPsicologos();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            top: '-18%',
            fontSize: 35,
            fontWeight: 'bold',
            color: '#cb997e',
          }}>
          Contactos
        </Text>
      </View>

      <FlatList
        data={info}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <View>
            <Card containerStyle={{borderRadius:15, elevation:15, shadowColor:'#00BFFF'}}>
              <Image source={require('../../assets/img/background_main.jpg')} style={{width:100, height:100, alignSelf:'center', borderRadius: 50}}/>
              <Text style={{color: 'black', alignSelf:'center', fontWeight: '200'}}>
                {item.nombre} {item.apellido_paterno} {item.apellido_materno}
              </Text>
              <Button type='outline' title={'Registrar cita'} titleStyle={{color:'black', fontWeight:'100', fontSize: 15}} buttonStyle={{borderColor:'#00BFFF', marginVertical:2,borderRadius:10}}onPress={()=> getId(item.id)} />
            </Card>
          </View>
        )}
      />
      <View style={{height:80}}/>
    </View>
  );
}
