import React from 'react';
import { TextInput } from 'react-native';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';

// Campo controlado para manter formulários limpos e padronizados.
export default function Campo(props) {
  return (
    <TextInput
      placeholderTextColor={cor.textoDois}
      style={[base.input, props.estilo]}
      {...props}
    />
  );
}
