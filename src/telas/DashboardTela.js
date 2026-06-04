import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Topo from '../componentes/Topo';
import CartaoInfo from '../componentes/CartaoInfo';
import Barra from '../componentes/Barra';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { hojeChave, porcentagem } from '../utils/dataUtils';

// Dashboard resume o dia e permite marcar tarefas principais.
export default function DashboardTela({ estado, atualizar }) {
  const hoje = hojeChave();
  const tarefas = estado.tarefas[hoje] || {};
  const aguaHoje = estado.agua[hoje] || 0;
  const pctAgua = porcentagem(aguaHoje, estado.rotina.aguaMeta);
  const lista = [
    ['agua', 'Bater meta de água'],
    ['treino', 'Realizar treino planejado'],
    ['dieta', 'Registrar alimentação'],
    ['sono', 'Cumprir meta de sono']
  ];
  const feitas = lista.filter(([id]) => tarefas[id]).length;
  const score = Math.round((feitas / lista.length) * 100);

  function alternar(id) {
    atualizar({ tarefas: { ...estado.tarefas, [hoje]: { ...tarefas, [id]: !tarefas[id] } } });
  }

  return (
    <ScrollView style={base.tela}>
      <Topo titulo="Dashboard" texto={`Olá, ${estado.usuario?.nome || 'usuário'}. Organize o essencial do dia sem complicar.`} />
      <View style={base.grade}>
        <CartaoInfo titulo="Score do dia" valor={`${score}%`} detalhe={`${feitas} de ${lista.length} tarefas`} />
        <CartaoInfo titulo="Água" valor={`${aguaHoje.toFixed(1)}L`} detalhe={`Meta ${estado.rotina.aguaMeta}L`} />
      </View>
      <View style={base.card}>
        <Text style={base.etiqueta}>Progresso diário</Text>
        <Barra valor={score} titulo={`${score}% concluído`} />
      </View>
      <View style={base.card}>
        <Text style={[base.valor, { marginBottom: 12 }]}>Checklist</Text>
        {lista.map(([id, nome]) => (
          <TouchableOpacity key={id} onPress={() => alternar(id)} style={[base.cardLinha, { paddingVertical: 12, borderBottomWidth: 1, borderColor: cor.borda }]}> 
            <Text style={{ color: cor.texto, fontWeight: '700' }}>{nome}</Text>
            <Text style={{ color: tarefas[id] ? cor.principal : cor.textoDois, fontWeight: '900' }}>{tarefas[id] ? 'Feito' : 'Pendente'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
