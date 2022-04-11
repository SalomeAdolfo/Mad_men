import {View, Text, ScrollView} from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Akira } from 'react-native-textinput-effects';
import { Button, Card } from 'react-native-elements';
import baseURL from '../routes/api';


const RegisterScreen = () => {
    const [nombre,setNombre] = useState('')
    const [paterno,setPeterno] = useState('')
    const [materno,setMaterno] = useState('')
    const [sexoo, setSexo] = useState('')
    const [fechaNac, setFecha] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    //declaración de rutas para el post
    const url = '/api/usuarios'
    //inicio del post a usuarios

    const _postUser = async(nom,primer_apellido,segundo_apellido,sexo,fecha_nacimiento,numero_telefono,direccion,contrasenia) =>{
        try{
            const res = await fetch( baseURL+url,{
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nom,
                    primer_apellido: primer_apellido,
                    segundo_apellido:segundo_apellido,
                    sexo:sexo,
                    fecha_nacimiento:fecha_nacimiento,
                    numero_telefono:numero_telefono,
                    email:direccion,
                    password:contrasenia
                }),
            }).then(res=>res.json())
            .catch(e=>console.log("Error" + e))
            .then(response => {
                console.log('Success '+response)
            });
        }catch(e){
            console.log(e)
        }
    }

    //Fin del post a usuarios

  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
      <View>
        <Card>
            <Akira
            label={'Nombre'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setNombre (text)}
            value={nombre}
            />
            <Akira
            label={'Apellido Paterno'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setPeterno (text)}
            value={paterno}
            />
            <Akira
            label={'Apellido Materno'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setMaterno (text)}
            value={materno}
            />
            <Akira
            label={'Sexo'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setSexo (text)}
            value={sexoo}
            />
            <Akira
            label={'Fecha de nacimiento'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setFecha (text)}
            value={fechaNac}
            />
            <Akira
            label={'Número de teléfono'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setTelefono (text)}
            value={telefono}
            />
            <Akira
            label={'Email'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setEmail (text)}
            value={email}
            />
            <Akira
            label={'Password'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{ color: '#ac83c4' }}
            onChangeText={text => setPassword (text)}
            value={password}
            secureTextEntry={true}
            />

            <Button type='outline' title={'Enviar'} buttonStyle={{marginVertical:15, borderRadius:15, borderColor:'green'}} 
            onPress={()=>_postUser(nombre,paterno,materno,sexoo,fechaNac,telefono,email,password)}/>
        </Card>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
