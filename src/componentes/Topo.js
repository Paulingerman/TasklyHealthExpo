import React from 'react';
import { View, Text } from 'react-native';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';

// Cabeçalho das telas internas. Mantém título e descrição no mesmo padrão.
export default function Topo({ titulo, texto }) {
  return (
    <View style={{ marginBottom: 18 }}>
      <Text style={base.titulo}>{titulo}</Text>
      {!!texto && <Text style={{ color: cor.textoDois, lineHeight: 20 }}>{texto}</Text>}
    </View>
  );
}
