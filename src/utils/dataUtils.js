// Funções pequenas para datas, cálculos e textos usados em várias telas.
export const hojeChave = () => new Date().toISOString().slice(0, 10);

export function saudacaoHora() {
  const hora = new Date().getHours();
  if (hora < 12) return 'Bom dia';
  if (hora < 18) return 'Boa tarde';
  return 'Boa noite';
}

export function ultimosDias(total = 7) {
  return Array.from({ length: total }).map((_, i) => {
    const data = new Date();
    data.setDate(data.getDate() - (total - 1 - i));
    return data.toISOString().slice(0, 10);
  });
}

export function limitar(valor, min, max) {
  return Math.max(min, Math.min(max, Number(valor) || 0));
}

export function porcentagem(valor, meta) {
  if (!meta) return 0;
  return limitar(Math.round((valor / meta) * 100), 0, 100);
}

export function nomeCurto(nome = '') {
  const limpo = nome.trim();
  return limpo ? limpo[0].toUpperCase() : 'T';
}

export function numero(valor, casas = 1) {
  const n = Number(valor) || 0;
  return Number(n.toFixed(casas));
}

export function somar(lista, campo) {
  return lista.reduce((total, item) => total + (Number(item[campo]) || 0), 0);
}

export function criarId(prefixo = 'id') {
  return `${prefixo}${Date.now()}${Math.floor(Math.random() * 999)}`;
}
