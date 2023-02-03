import {Pressable, View, Image, Text, Modal} from 'react-native';
import { useState, useEffect } from 'react';
import {getData} from '../../api/pokemonAPI'
import SinglePokemon from '../SinglePokemon/SinglePokemon';
import styles from './style';
export default function PokemonList({ url }) {
  
  const [ Pokemon, setPokemon ] = useState({id : 1 , name: '2'});
  const [LmodalVisible, setLmodalVisible] = useState(false);

  useEffect(() => {
    data();
  }, []);
    
  async function data() {
    let poke = await getData(url);
    setPokemon(poke);
  }

  function handlePress() {
    setLmodalVisible(!LmodalVisible);
  }

  return (
     
    <View style={styles.box}>
    
       <Modal animationType="slide" transparent={true} visible={LmodalVisible}>
         <SinglePokemon data={Pokemon} closeModal={setLmodalVisible}/>
        </Modal>
       <Pressable onPress={handlePress}>
        <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon.id}.png` }} style={styles.img} />
        <Text style={styles.txt}>{Pokemon.name.toUpperCase()}</Text>
       </Pressable>
       
     </View>
  );
}