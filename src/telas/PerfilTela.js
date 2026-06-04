import React, { useState } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import Topo from '../componentes/Topo';
import Campo from '../componentes/Campo';
import Botao from '../componentes/Botao';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { nomeCurto } from '../utils/dataUtils';

// Tela de perfil para editar informações básicas e sair da conta.
export default function PerfilTela({ estado, atualizar, sair, limpar }) {
  const usuario = estado.usuario || {};
  const [nome, setNome] = useState(usuario.nome || '');
  const [peso, setPeso] = useState(String(usuario.peso || ''));
  const [altura, setAltura] = useState(String(usuario.altura || ''));

  function salvar() {
    atualizar({ usuario: { ...usuario, nome, peso, altura } });
  }

  function confirmarLimpeza() {
    Alert.alert('Confirmar', 'Deseja apagar os dados deste aparelho?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Apagar', style: 'destructive', onPress: limpar }
    ]);
  }

  return (
    <ScrollView style={base.tela}>
      <Topo titulo="Perfil" texto="Atualize dados pessoais usados nas metas do Taskly Health." />
      <View style={[base.card, { alignItems: 'center' }]}> 
        <View style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: cor.principal, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
          <Text style={{ color: cor.fundo, fontSize: 30, fontWeight: '900' }}>{nomeCurto(nome)}</Text>
        </View>
        <Text style={base.valor}>{usuario.email}</Text>
      </View>
      <View style={base.card}>
        <Campo placeholder="Nome" value={nome} onChangeText={setNome} />
        <View style={base.linha}>
          <Campo placeholder="Peso" value={peso} onChangeText={setPeso} keyboardType="decimal-pad" estilo={{ flex: 1 }} />
          <Campo placeholder="Altura" value={altura} onChangeText={setAltura} keyboardType="number-pad" estilo={{ flex: 1 }} />
        </View>
        <Botao titulo="Salvar perfil" onPress={salvar} />
        <Botao titulo="Sair" tipo="sec" onPress={sair} />
        <Botao titulo="Apagar dados" tipo="sec" onPress={confirmarLimpeza} />
      </View>
    </ScrollView>
  );
}
