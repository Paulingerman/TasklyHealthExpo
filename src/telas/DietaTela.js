import React, { useState } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import Topo from '../componentes/Topo';
import Botao from '../componentes/Botao';
import Campo from '../componentes/Campo';
import CartaoInfo from '../componentes/CartaoInfo';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { alimentos, refeicoes } from '../dados/dadosFixos';
import { criarId, hojeChave, somar } from '../utils/dataUtils';

// Registro alimentar com alimentos prontos, alimento próprio e fichas salvas.
export default function DietaTela({ estado, atualizar }) {
  const hoje = hojeChave();
  const [refeicao, setRefeicao] = useState('cafe');
  const [nome, setNome] = useState('');
  const [cal, setCal] = useState('');
  const dia = estado.dieta[hoje] || {};
  const itens = Object.values(dia).flat();
  const fichas = estado.fichasAlimentares || [];
  const totais = { cal: somar(itens, 'cal'), prot: somar(itens, 'prot'), carb: somar(itens, 'carb'), gord: somar(itens, 'gord') };

  function adicionar(alimento) {
    const lista = dia[refeicao] || [];
    atualizar({ dieta: { ...estado.dieta, [hoje]: { ...dia, [refeicao]: [...lista, alimento] } } });
  }

  function adicionarProprio() {
    if (!nome.trim()) return Alert.alert('Atenção', 'Informe o alimento.');
    adicionar({ id: criarId('alim'), nome, cal: Number(cal) || 0, prot: 0, carb: 0, gord: 0 });
    setNome('');
    setCal('');
  }

  function salvarFicha() {
    const lista = dia[refeicao] || [];
    if (!lista.length) return Alert.alert('Ficha vazia', 'Adicione alimentos antes de salvar.');
    const nomeFicha = refeicoes.find(item => item.id === refeicao)?.nome || 'Refeição';
    atualizar({ fichasAlimentares: [...fichas, { id: criarId('ficha'), nome: nomeFicha, refeicao, itens: lista }] });
  }

  function aplicarFicha(ficha) {
    const lista = dia[ficha.refeicao] || [];
    atualizar({ dieta: { ...estado.dieta, [hoje]: { ...dia, [ficha.refeicao]: [...lista, ...ficha.itens] } } });
  }

  return (
    <ScrollView style={base.tela}>
      <Topo titulo="Alimentação" texto="Registre refeições, crie alimentos próprios e reutilize fichas alimentares." />
      <View style={base.grade}>
        <CartaoInfo titulo="Calorias" valor={totais.cal} />
        <CartaoInfo titulo="Proteína" valor={`${totais.prot}g`} />
        <CartaoInfo titulo="Carboidrato" valor={`${totais.carb}g`} />
        <CartaoInfo titulo="Gordura" valor={`${totais.gord}g`} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
        {refeicoes.map(item => <Botao key={item.id} titulo={item.nome} tipo={refeicao === item.id ? 'principal' : 'sec'} onPress={() => setRefeicao(item.id)} estilo={{ marginRight: 8 }} />)}
      </ScrollView>
      {alimentos.map(item => <Botao key={item.id} titulo={`Adicionar ${item.nome}`} tipo="sec" onPress={() => adicionar(item)} />)}
      <View style={base.card}>
        <Text style={base.valor}>Alimento próprio</Text>
        <Campo placeholder="Nome do alimento" value={nome} onChangeText={setNome} />
        <Campo placeholder="Calorias" value={cal} onChangeText={setCal} keyboardType="number-pad" />
        <Botao titulo="Adicionar alimento" onPress={adicionarProprio} />
        <Botao titulo="Salvar refeição como ficha" tipo="sec" onPress={salvarFicha} />
      </View>
      <View style={base.card}>
        <Text style={base.valor}>Fichas alimentares</Text>
        {!fichas.length && <Text style={base.vazio}>Nenhuma ficha salva.</Text>}
        {fichas.map(ficha => <Botao key={ficha.id} titulo={`Usar ${ficha.nome} (${ficha.itens.length})`} tipo="sec" onPress={() => aplicarFicha(ficha)} />)}
      </View>
      <View style={base.card}>
        <Text style={base.valor}>Itens de hoje</Text>
        {itens.length === 0 && <Text style={base.vazio}>Nenhum alimento registrado hoje.</Text>}
        {itens.map((item, idx) => <Text key={`${item.id}${idx}`} style={{ color: cor.textoDois, paddingVertical: 4 }}>• {item.nome} ({item.cal} kcal)</Text>)}
      </View>
    </ScrollView>
  );
}
