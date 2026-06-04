import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Topo from '../componentes/Topo';
import Botao from '../componentes/Botao';
import Campo from '../componentes/Campo';
import Barra from '../componentes/Barra';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { hojeChave, porcentagem, numero } from '../utils/dataUtils';

// Controle de água com meta ajustável e botões rápidos.
export default function HidratacaoTela({ estado, atualizar }) {
  const hoje = hojeChave();
  const [meta, setMeta] = useState(String(estado.rotina.aguaMeta));
  const total = estado.agua[hoje] || 0;
  const pct = porcentagem(total, estado.rotina.aguaMeta);

  function adicionar(valor) {
    atualizar({ agua: { ...estado.agua, [hoje]: numero(total + valor, 2) } });
  }

  function salvarMeta() {
    const novaMeta = Math.max(1, Number(String(meta).replace(',', '.')) || 2.5);
    atualizar({ rotina: { ...estado.rotina, aguaMeta: numero(novaMeta, 1) } });
  }

  return (
    <ScrollView style={base.tela}>
      <Topo titulo="Hidratação" texto="Registre sua ingestão de água durante o dia e acompanhe a meta." />
      <View style={base.card}>
        <Text style={base.etiqueta}>Consumo de hoje</Text>
        <Text style={base.valor}>{total.toFixed(1)}L de {estado.rotina.aguaMeta}L</Text>
        <Barra valor={pct} titulo={`${pct}% da meta`} />
      </View>
      <View style={base.grade}>
        <Botao titulo="+ 250ml" onPress={() => adicionar(0.25)} estilo={{ flex: 1 }} />
        <Botao titulo="+ 500ml" onPress={() => adicionar(0.5)} estilo={{ flex: 1 }} />
        <Botao titulo="+ 1L" onPress={() => adicionar(1)} estilo={{ flex: 1 }} />
      </View>
      <View style={base.card}>
        <Text style={[base.valor, { marginBottom: 10 }]}>Meta diária</Text>
        <Campo placeholder="Litros por dia" value={meta} onChangeText={setMeta} keyboardType="decimal-pad" />
        <Botao titulo="Salvar meta" onPress={salvarMeta} />
        <Text style={{ color: cor.textoDois, marginTop: 10 }}>A meta alimenta o dashboard e o cálculo de progresso.</Text>
      </View>
    </ScrollView>
  );
}
