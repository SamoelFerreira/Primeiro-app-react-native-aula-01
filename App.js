import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import fundo from './assets/fundo.png';
import perfil from './assets/perfil.jpg';

export default function App() {
  return (
// Sesão inicio TOPO
  
    <View style={styles.container}>
        <Image style={styles.fundoCard} source={fundo}/>

{/* Sessao perfil do desenvolvedor */}

      <View style={styles.containerPerfil}>
        <Image style={styles.fotoPerfil} source={perfil}/>
          <Text style={styles.titulo}>Wellington S. Ferreira</Text>
            <Text style={styles.paragrafo}>
            Olá sou aluno e futuro programador Frontend, HTML5, CSS e Mobile... e hoje na data 07-03-2024 estou há 
            19 dias consecutivos acendendo a chama na "DevMedia".
            </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  fundoCard: {
    flex: 1,

  },

  containerPerfil: {
    flex: 1,
    alignItems: 'center',

  },

  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,

  },

  titulo: {
    marginBottom: 10,
    fontSize: 22,

  },

  paragrafo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16
  }

});
