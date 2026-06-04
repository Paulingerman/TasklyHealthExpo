import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import Topo from '../componentes/Topo';
import Botao from '../componentes/Botao';
import Barra from '../componentes/Barra';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { exercicios } from '../dados/dadosFixos';
import { criarId, hojeChave, porcentagem } from '../utils/dataUtils';

// Catálogo de exercícios, ficha de treino e timer simples de descanso.
export default function TreinosTela({ estado, atualizar }) {
  const grupos = ['Todos', ...new Set(exercicios.map(item => item.grupo))];
  const [grupo, setGrupo] = useState('Todos');
  const [segundos, setSegundos] = useState(60);
  const [rodando, setRodando] = useState(false);
  const hoje = hojeChave();
  const feitos = estado.treinos[hoje] || [];
  const fichas = estado.fichasTreino || [];
  const lista = grupo === 'Todos' ? exercicios : exercicios.filter(item => item.grupo === grupo);

  useEffect(() => {
    if (!rodando) return;
    const id = setInterval(() => setSegundos(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [rodando]);

  function marcar(id) {
    const existe = feitos.includes(id);
    const novaLista = existe ? feitos.filter(item => item !== id) : [...feitos, id];
    atualizar({ treinos: { ...estado.treinos, [hoje]: novaLista } });
  }

  function salvarFicha() {
    if (!feitos.length) return Alert.alert('Ficha vazia', 'Marque exercícios antes de salvar.');
    atualizar({ fichasTreino: [...fichas, { id: criarId('treino'), nome: `Treino ${fichas.length + 1}`, itens: feitos }] });
  }

  function aplicarFicha(ficha) {
    atualizar({ treinos: { ...estado.treinos, [hoje]: [...new Set([...feitos, ...ficha.itens])] } });
  }

  function reiniciarTimer() {
    setSegundos(60);
    setRodando(false);
  }

  return (
    <ScrollView style={base.tela}>
      <Topo titulo="Exercícios" texto="Escolha exercícios, salve fichas e use o timer de descanso." />
      <View style={base.card}>
        <Text style={base.valor}>Descanso: {segundos}s</Text>
        <Barra valor={porcentagem(segundos, 60)} />
        <View style={base.linha}>
          <Botao titulo={rodando ? 'Pausar' : 'Iniciar'} onPress={() => setRodando(!rodando)} estilo={{ flex: 1 }} />
          <Botao titulo="Reiniciar" tipo="sec" onPress={reiniciarTimer} estilo={{ flex: 1 }} />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
        {grupos.map(item => <Botao key={item} titulo={item} tipo={grupo === item ? 'principal' : 'sec'} onPress={() => setGrupo(item)} estilo={{ marginRight: 8 }} />)}
      </ScrollView>
      {lista.map(item => {
        const ativo = feitos.includes(item.id);
        return (
          <TouchableOpacity key={item.id} onPress={() => marcar(item.id)} style={base.card}>
            <View style={base.cardLinha}>
              <View>
                <Text style={base.valor}>{item.nome}</Text>
                <Text style={{ color: cor.textoDois }}>{item.grupo} • {item.series} séries • {item.reps}</Text>
              </View>
              <Text style={{ color: ativo ? cor.principal : cor.textoDois, fontWeight: '900' }}>{ativo ? 'OK' : 'Marcar'}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={base.card}>
        <Text style={base.valor}>Fichas de treino</Text>
        <Botao titulo="Salvar treino do dia" onPress={salvarFicha} />
        {!fichas.length && <Text style={base.vazio}>Nenhuma ficha salva.</Text>}
        {fichas.map(ficha => <Botao key={ficha.id} titulo={`Usar ${ficha.nome} (${ficha.itens.length})`} tipo="sec" onPress={() => aplicarFicha(ficha)} />)}
      </View>
    </ScrollView>
  );
}
