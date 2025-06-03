import { Pressable, Text, View } from "react-native"
import { styles } from "../../config"
import { useCounterStore } from "../store/counter-store"
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";



export const SettingsScreen = () => {

  const count = useCounterStore(state => state.count);
  const increaseBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      title:`Count: ${count}`
    })
  },[count]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Counter: {count}</Text>

      <Pressable
        onPress={() => increaseBy(+1)}
        style={styles.primaryButton}>
        <Text>+1</Text>
      </Pressable>
      <Pressable
        onPress={() => increaseBy(-1)}
        style={styles.primaryButton}>
        <Text>-1</Text>
      </Pressable>

    </View>
  )
}
