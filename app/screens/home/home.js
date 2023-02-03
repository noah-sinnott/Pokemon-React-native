import { SafeAreaView, FlatList } from 'react-native';
import styles from './style'
import { useEffect, useState } from 'react';
import { getPokemon } from '../../api/pokemonAPI';
import PokemonList from '../../components/PokemonList/PokemonList'

export default function Home() {
  const collNum = 2
  const [ Pokemon, setPokemon ] = useState({});

  useEffect(() => {
    refresh()
  }, [])
  
    
  async function refresh() { 
    let poke = await getPokemon()
    setPokemon(poke.results)
  }

   return (
    <>
       <SafeAreaView style={styles.containerMain}>         
           <FlatList
        data={Pokemon}
        renderItem={({item}) => <PokemonList url={item.url} />}
          keyExtractor={item => item.name}
          numColumns={collNum}
      />  
      </SafeAreaView>
    </>
  );
}