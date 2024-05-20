export interface UfData {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidadMedida: string | null;
  serie: SerieItem[];
}

export interface SerieItem {
  fecha: string;
  valor: number;
}
