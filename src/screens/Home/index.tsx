import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../Components/Participant";

export default function Home() {
  const participants = [
    "Giovani",
    "Rodrigo",
    "Gabriel",
    "Gustavo",
    "Diego",
    "Leonardo",
    "Carol",
    "Fabricio",
    "Lucca",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventData}>Sexta-feira 24 de Abril de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
