import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Topo from '../componentes/Topo';
import CartaoInfo from '../componentes/CartaoInfo';
import Barra from '../componentes/Barra';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { ultimosDias, porcentagem } from '../utils/dataUtils';

// Progresso semanal calculado a partir das tarefas e da hidratação.
export default function ProgressoTela({ estado }) {
  const dias = ultimosDias();
  const linhas = dias.map(dia => {
    const tarefas = estado.tarefas[dia] || {};
    const feitas = ['agua', 'treino', 'dieta', 'sono'].filter(id => tarefas[id]).length;
    const scoreTarefa = Math.round((feitas / 4) * 100);
    const scoreAgua = porcentagem(estado.agua[dia] || 0, estado.rotina.aguaMeta);
    return { dia, score: Math.round((scoreTarefa + scoreAgua) / 2) };
  });
  const media = Math.round(linhas.reduce((s, item) => s + item.score, 0) / linhas.length);
  const melhor = Math.max(...linhas.map(item => item.score));

  return (
    <ScrollView style={base.tela}>
      <Topo titulo="Progresso" texto="Visualize a média semanal com base em checklist e hidratação." />
      <View style={base.grade}>
        <CartaoInfo titulo="Média semanal" valor={`${media}%`} />
        <CartaoInfo titulo="Melhor dia" valor={`${melhor}%`} />
      </View>
      <View style={base.card}>
        <Text style={base.valor}>Últimos 7 dias</Text>
        {linhas.map(item => (
          <View key={item.dia} style={{ marginTop: 12 }}>
            <Text style={{ color: cor.textoDois }}>{item.dia} • {item.score}%</Text>
            <Barra valor={item.score} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
