import React, { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Campo from '../componentes/Campo';
import Botao from '../componentes/Botao';
import { base } from '../estilos/base';
import { cor } from '../estilos/tema';
import { metas } from '../dados/dadosFixos';
import { saudacaoHora } from '../utils/dataUtils';

// Tela de acesso profissional, sem mensagens de teste ou termos técnicos na interface.
export default function LoginTela({ estado, entrar, cadastrar }) {
  const [modo, setModo] = useState('entrar');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [meta, setMeta] = useState('saudeGeral');

  function enviar() {
    if (!email.trim() || !senha.trim()) return Alert.alert('Atenção', 'Informe e-mail e senha.');
    if (modo === 'entrar') return entrar(email, senha);
    if (!nome.trim()) return Alert.alert('Atenção', 'Informe seu nome.');
    cadastrar({ nome, email, senha, peso, altura, meta });
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={base.tela}>
      <View style={base.centro}>
        <View style={[base.card, { width: '100%', maxWidth: 520 }]}> 
          <Text style={{ color: cor.principal, fontWeight: '800', marginBottom: 8 }}>{saudacaoHora()}</Text>
          <Text style={base.titulo}>Taskly Health</Text>
          <Text style={base.subtitulo}>Acesse sua rotina de saúde, treinos, hidratação e alimentação.</Text>

          {modo === 'cadastro' && <Campo placeholder="Nome completo" value={nome} onChangeText={setNome} autoCapitalize="words" />}
          <Campo placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          <Campo placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

          {modo === 'cadastro' && (
            <>
              <View style={base.linha}>
                <Campo placeholder="Peso kg" value={peso} onChangeText={setPeso} keyboardType="decimal-pad" estilo={{ flex: 1 }} />
                <Campo placeholder="Altura cm" value={altura} onChangeText={setAltura} keyboardType="number-pad" estilo={{ flex: 1 }} />
              </View>
              <View style={base.grade}>
                {metas.map(item => (
                  <Botao key={item.id} titulo={item.nome} tipo={meta === item.id ? 'principal' : 'sec'} onPress={() => setMeta(item.id)} estilo={{ flexGrow: 1 }} />
                ))}
              </View>
            </>
          )}

          <Botao titulo={modo === 'entrar' ? 'Entrar' : 'Criar conta'} onPress={enviar} />
          <Botao titulo={modo === 'entrar' ? 'Criar nova conta' : 'Já tenho conta'} tipo="sec" onPress={() => setModo(modo === 'entrar' ? 'cadastro' : 'entrar')} />
          {!!estado.usuario && <Text style={{ color: cor.textoDois, textAlign: 'center', marginTop: 12 }}>Conta encontrada para {estado.usuario.nome}</Text>}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
