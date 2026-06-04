import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { base } from '../estilos/base';

// Botão único do projeto. Evita criar vários estilos iguais em cada tela.
export default function Botao({ titulo, onPress, tipo = 'principal', estilo }) {
  const primario = tipo === 'principal';
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[base.botao, primario ? base.botaoPrincipal : base.botaoSec, estilo]}
    >
      <Text style={primario ? base.botaoTexto : base.botaoTextoSec}>{titulo}</Text>
    </TouchableOpacity>
  );
}
