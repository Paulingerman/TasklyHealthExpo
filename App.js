import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginTela from './src/telas/LoginTela';
import DashboardTela from './src/telas/DashboardTela';
import HidratacaoTela from './src/telas/HidratacaoTela';
import TreinosTela from './src/telas/TreinosTela';
import DietaTela from './src/telas/DietaTela';
import RotinaTela from './src/telas/RotinaTela';
import ProgressoTela from './src/telas/ProgressoTela';
import PerfilTela from './src/telas/PerfilTela';
import Menu from './src/componentes/Menu';
import { carregarEstado, salvarEstado, limparEstado } from './src/servicos/guardaDados';
import { estadoInicial } from './src/dados/estadoInicial';
import { cor } from './src/estilos/tema';

// App principal. Controla estado, autenticação e troca das telas internas.
export default function App() {
  const [estado, setEstado] = useState(estadoInicial);
  const [carregando, setCarregando] = useState(true);
  const [logado, setLogado] = useState(false);
  const [tela, setTela] = useState('dash');

  useEffect(() => {
    async function iniciar() {
      const salvo = await carregarEstado();
      setEstado(salvo);
      setLogado(Boolean(salvo.usuario?.sessao));
      setCarregando(false);
    }
    iniciar();
  }, []);

  async function atualizar(parcial) {
    const novoEstado = { ...estado, ...parcial };
    setEstado(novoEstado);
    await salvarEstado(novoEstado);
  }

  async function entrar(email, senha) {
    const usuario = estado.usuario;
    if (!usuario || usuario.email !== email.trim() || usuario.senha !== senha.trim()) {
      return Alert.alert('Acesso não realizado', 'Confira e-mail e senha informados.');
    }
    await atualizar({ usuario: { ...usuario, sessao: true } });
    setLogado(true);
  }

  async function cadastrar(usuario) {
    const novoUsuario = { ...usuario, email: usuario.email.trim(), senha: usuario.senha.trim(), sessao: true };
    await atualizar({ usuario: novoUsuario });
    setLogado(true);
  }

  async function sair() {
    if (estado.usuario) await atualizar({ usuario: { ...estado.usuario, sessao: false } });
    setLogado(false);
    setTela('dash');
  }

  async function limpar() {
    await limparEstado();
    setEstado(estadoInicial);
    setLogado(false);
    setTela('dash');
  }

  function telaAtual() {
    const props = { estado, atualizar };
    if (tela === 'agua') return <HidratacaoTela {...props} />;
    if (tela === 'treino') return <TreinosTela {...props} />;
    if (tela === 'dieta') return <DietaTela {...props} />;
    if (tela === 'rotina') return <RotinaTela {...props} />;
    if (tela === 'progresso') return <ProgressoTela estado={estado} />;
    if (tela === 'perfil') return <PerfilTela {...props} sair={sair} limpar={limpar} />;
    return <DashboardTela {...props} />;
  }

  if (carregando) {
    return <View style={{ flex: 1, backgroundColor: cor.fundo, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator color={cor.principal} /></View>;
  }

  if (!logado) {
    return <><StatusBar style="light" /><LoginTela estado={estado} entrar={entrar} cadastrar={cadastrar} /></>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: cor.fundo }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>{telaAtual()}</View>
      <Menu tela={tela} setTela={setTela} />
    </View>
  );
}
