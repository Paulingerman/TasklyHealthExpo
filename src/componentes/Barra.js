import React from 'react';
import { View, Text } from 'react-native';
import { cor } from '../estilos/tema';

// Barra visual simples, usada para água, dieta e score semanal.
export default function Barra({ valor = 0, titulo }) {
  const largura = `${Math.max(0, Math.min(100, valor))}%`;
  return (
    <View style={{ marginTop: 10 }}>
      {!!titulo && <Text style={{ color: cor.textoDois, marginBottom: 6 }}>{titulo}</Text>}
      <View style={{ height: 10, borderRadius: 10, backgroundColor: cor.fundoDois, overflow: 'hidden' }}>
        <View style={{ width: largura, height: 10, borderRadius: 10, backgroundColor: cor.principal }} />
      </View>
    </View>
  );
}
