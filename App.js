import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
//import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer"; 

const Stack = createNativeStackNavigator();
const Tab =createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//const [logged, setLogged] = useState(false);

const Login = ({navigation}) => {return (
    <View>
      <Text>Tela de login</Text>
      <Button title="Login" onPress={() => navigation.navigate('Home')}/>
      <Button title="Registrar" onPress={() => navigation.navigate('Registrar')}/>
    </View>);}

const Registrar = ({navigation}) => {return (
    <View>
      <Text>Tela de registro</Text>
    </View>);}

const Configuracoes = ({navigation}) => {return (
    <View>
      <Text>Tela de Configurações</Text>
    </View>);}

const Contatos = ({navigation}) => {return (
    <View>
      <Text>Tela de Contatos</Text>
    </View>);}

const Tabconst = () => {
  return (
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Drawernav} />
      <Tab.Screen name="Avisos" component={Drawernav} />
      </Tab.Navigator>
  )
}
const Drawernav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Configurações" component={Configuracoes} />
        <Drawer.Screen name="Contatos" component={Contatos} />
    </Drawer.Navigator>
  )
}
    

const Avisos = ({navigation}) => {return (
    <View>
      <Text>Tela de Avisos</Text>
    </View>);}

const Home = ({navigation}) => {return (
    <View>
      <Text>Tela de home</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')}/>

    </View>);}
 
const Profile = ({navigation}) => {return (
    <View>
      <Text>Tela de profile</Text>
    </View>);}
 
export default function App() {return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Loginn" component={Login}/>
        <Stack.Screen name="Registrar" component={Registrar}/>
        <Stack.Screen name="Home" component={Tabconst}/>
        <Stack.Screen name="Profile" component={Profile} />     
      </Stack.Navigator>

    </NavigationContainer>
    );}
