// Camada simples de persistência. Toda leitura e escrita passa por este arquivo.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { estadoInicial } from '../dados/estadoInicial';

const chaveApp = '@tasklyHealthEstado';

function juntarEstado(salvo) {
  return {
    ...estadoInicial,
    ...salvo,
    rotina: { ...estadoInicial.rotina, ...(salvo?.rotina || {}) }
  };
}

export async function carregarEstado() {
  try {
    const texto = await AsyncStorage.getItem(chaveApp);
    if (!texto) return estadoInicial;
    return juntarEstado(JSON.parse(texto));
  } catch (erro) {
    console.warn('Falha ao carregar dados', erro);
    return estadoInicial;
  }
}

export async function salvarEstado(estado) {
  try {
    await AsyncStorage.setItem(chaveApp, JSON.stringify(estado));
    return true;
  } catch (erro) {
    console.warn('Falha ao salvar dados', erro);
    return false;
  }
}

export async function limparEstado() {
  try {
    await AsyncStorage.removeItem(chaveApp);
    return true;
  } catch (erro) {
    console.warn('Falha ao limpar dados', erro);
    return false;
  }
}
