import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Topo from '../componentes/Topo';
import Botao from '../componentes/Botao';
import Campo from '../componentes/Campo';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { diasSemana } from '../dados/dadosFixos';
import { numero } from '../utils/dataUtils';

// Configura a rotina principal usada pelo restante do aplicativo.
export default function RotinaTela({ estado, atualizar }) {
  const [aguaMeta, setAguaMeta] = useState(String(estado.rotina.aguaMeta));
  const [sonoMeta, setSonoMeta] = useState(String(estado.rotina.sonoMeta));
  const dias = estado.rotina.treinoDias || [];

  function alternarDia(dia) {
    const novaLista = dias.includes(dia) ? dias.filter(item => item !== dia) : [...dias, dia];
    atualizar({ rotina: { ...estado.rotina, treinoDias: novaLista } });
  }

  function salvar() {
    atualizar({
      rotina: {
        ...estado.rotina,
        aguaMeta: numero(String(aguaMeta).replace(',', '.'), 1),
        sonoMeta: Math.max(4, Number(sonoMeta) || 8)
      }
    });
  }

  return (
    <ScrollView style={base.tela}>
      <Topo titulo="Minha rotina" texto="Ajuste metas e dias de treino para deixar o app com a sua cara." />
      <View style={base.card}>
        <Text style={base.valor}>Metas principais</Text>
        <Campo placeholder="Meta de água em litros" value={aguaMeta} onChangeText={setAguaMeta} keyboardType="decimal-pad" />
        <Campo placeholder="Meta de sono em horas" value={sonoMeta} onChangeText={setSonoMeta} keyboardType="number-pad" />
        <Botao titulo="Salvar metas" onPress={salvar} />
      </View>
      <View style={base.card}>
        <Text style={[base.valor, { marginBottom: 10 }]}>Dias de treino</Text>
        <View style={base.grade}>
          {diasSemana.map(dia => <Botao key={dia} titulo={dia} tipo={dias.includes(dia) ? 'principal' : 'sec'} onPress={() => alternarDia(dia)} estilo={{ minWidth: 82 }} />)}
        </View>
        <Text style={{ color: cor.textoDois, marginTop: 12 }}>Dias ativos: {dias.join(', ') || 'nenhum'}</Text>
      </View>
    </ScrollView>
  );
}
