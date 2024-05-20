interface DatosFinancierosInterface {
  version: string;
  autor: string;
  fecha: string;
  uf: FinancieroInterface;
  ivp: FinancieroInterface;
  dolar: FinancieroInterface;
  dolar_intercambio: FinancieroInterface;
  euro: FinancieroInterface;
  ipc: FinancieroInterface;
  utm: FinancieroInterface;
  imacec: FinancieroInterface;
  tpm: FinancieroInterface;
  libra_cobre: FinancieroInterface;
  tasa_desempleo: FinancieroInterface;
  bitcoin: FinancieroInterface;
}
