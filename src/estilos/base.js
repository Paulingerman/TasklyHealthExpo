import { StyleSheet } from 'react-native';
import { cor, raio, sombra } from './tema';

// Estilos base reaproveitados nas telas para reduzir CSS repetido.
export const base = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cor.fundo, padding: 18 },
  centro: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titulo: { color: cor.texto, fontSize: 28, fontWeight: '800', marginBottom: 6 },
  subtitulo: { color: cor.textoDois, fontSize: 14, lineHeight: 20 },
  card: { backgroundColor: cor.card, borderColor: cor.borda, borderWidth: 1, borderRadius: raio.grande, padding: 18, marginBottom: 14, ...sombra },
  cardLinha: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  input: { backgroundColor: cor.fundoDois, borderColor: cor.borda, borderWidth: 1, color: cor.texto, borderRadius: raio.medio, padding: 14, marginBottom: 12 },
  botao: { borderRadius: raio.medio, padding: 14, alignItems: 'center', justifyContent: 'center', marginTop: 8 },
  botaoPrincipal: { backgroundColor: cor.principal },
  botaoSec: { backgroundColor: cor.cardClaro, borderColor: cor.borda, borderWidth: 1 },
  botaoTexto: { color: '#07111f', fontWeight: '800' },
  botaoTextoSec: { color: cor.texto, fontWeight: '700' },
  linha: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  grade: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  etiqueta: { color: cor.textoDois, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  valor: { color: cor.texto, fontSize: 22, fontWeight: '800' },
  vazio: { color: cor.textoDois, textAlign: 'center', padding: 18 }
});
