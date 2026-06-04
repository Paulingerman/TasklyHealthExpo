import React from 'react';
import { View, Text } from 'react-native';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';

// Card curto para métricas de dashboard e progresso.
export default function CartaoInfo({ titulo, valor, detalhe }) {
  return (
    <View style={[base.card, { flex: 1, minWidth: 145 }]}> 
      <Text style={base.etiqueta}>{titulo}</Text>
      <Text style={base.valor}>{valor}</Text>
      {!!detalhe && <Text style={{ color: cor.textoDois, marginTop: 4 }}>{detalhe}</Text>}
    </View>
  );
}
