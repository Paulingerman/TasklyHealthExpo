import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cor } from '../estilos/tema';

const itens = [
  ['dash', 'Dashboard', 'grid-outline'],
  ['agua', 'Água', 'water-outline'],
  ['treino', 'Treinos', 'barbell-outline'],
  ['dieta', 'Alimentação', 'restaurant-outline'],
  ['rotina', 'Rotina', 'calendar-outline'],
  ['progresso', 'Progresso', 'stats-chart-outline'],
  ['perfil', 'Perfil', 'person-outline']
];

// Navegação inferior horizontal, boa para Expo Go e Web sem biblioteca extra.
export default function Menu({ tela, setTela }) {
  return (
    <View style={{ backgroundColor: cor.card, borderTopWidth: 1, borderColor: cor.borda }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 10, gap: 8 }}>
        {itens.map(([id, nome, icone]) => {
          const ativo = tela === id;
          return (
            <TouchableOpacity key={id} onPress={() => setTela(id)} style={{ alignItems: 'center', minWidth: 78, padding: 10, borderRadius: 16, backgroundColor: ativo ? cor.principal : cor.fundoDois }}>
              <Ionicons name={icone} size={20} color={ativo ? cor.fundo : cor.textoDois} />
              <Text style={{ color: ativo ? cor.fundo : cor.textoDois, fontWeight: '800', fontSize: 11, marginTop: 4 }}>{nome}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
