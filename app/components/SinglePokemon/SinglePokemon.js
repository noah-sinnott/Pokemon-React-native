import {View, SafeAreaView, Image, Text, Pressable} from 'react-native';
import styles from './style'
import { useState, useEffect } from 'react'
import {getData} from '../../api/pokemonAPI'

export default function SinglePokemon({data, closeModal}) {
  
  const [num, setNum] = useState(data.id)
  const [Pokemon, setPokemon ] = useState(data);
  const [ abilities, setAbilites ] = useState([]);
  const [ types, setTypes ] = useState([]);

  async function goToRight() {
    await setNum((prev) => prev + 1)
    let poke = await getData(`https://pokeapi.co/api/v2/pokemon/${num}`);
    setPokemon(poke);
}
  
  async function goToLeft() {
   if(num == 1) return 
  await setNum((prev) => prev - 1)
  let poke = await getData(`https://pokeapi.co/api/v2/pokemon/${num}`);
    setPokemon(poke);
  }
  
  useEffect(()=> {
    let abl = Pokemon.abilities.map((item) => { return item.ability.name; })
    setAbilites(abl)
    let typ = Pokemon.types.map((item) => { return item.type.name; })
    setTypes(typ)
  }, [Pokemon])



   return (
     <SafeAreaView>
       <View style={styles.container}>
         <View style={styles.centeredView}>
           
      <View style={styles.buttons}>
       <View style={styles.button}>
             <Pressable
             onPress={() => goToLeft()}>
             <Text style={styles.buttontext}>Back</Text>
              </Pressable>
             </View>
          
             <View style={styles.button}>
             <Pressable
             onPress={() => closeModal(false)}>
             <Text style={styles.buttontext}>Close</Text>
        </Pressable>
             </View>
             
             <View style={styles.button}>
               <Pressable
             onPress={() => goToRight()}>
             <Text style={styles.buttontext}>Next</Text>
            </Pressable>
             </View>
           </View>
           
           <Text style={styles.title}>Name : {Pokemon.name.toUpperCase()}</Text>
           
            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon.id}.png`}} style={styles.images} />

           <View>
             
             <View style={styles.statsContainer}>
               <View style={styles.stats}>
               <Text style={styles.statItem}>Height: {Pokemon.height}</Text>
               <Text style={styles.statItem}>Weight: {Pokemon.weight}</Text>
               <Text style={styles.statItem}>Id: {Pokemon.id}</Text>
               <Text style={styles.statItem}>Base experience: {Pokemon.base_experience}</Text>
               <Text style={styles.statItem}>Forms: {Pokemon.forms.length}</Text>
              <Text style={styles.statItem}>Moves: {Pokemon.moves.length}</Text>
                 <Text style={styles.statItem}>Types: {types.join(", ")}</Text>
                 <Text style={styles.statItem}>Abilities: {abilities.join(", ")}</Text>
              </View>
            </View>
             
          <View style={styles.statsContainer}>
           <View style={styles.stats}>
              {Pokemon.stats.map((item) => {
                return <Text key={item.stat.name} style={styles.statItem}>{item.stat.name.toUpperCase()}: {item.base_stat} </Text>
                 })}
               </View>
             </View>

           </View>
          
       </View>
       </View>
     </SafeAreaView>
  );
}