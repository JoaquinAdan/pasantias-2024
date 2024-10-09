import * as yup from "yup";

const schema = yup.object().shape({
  DiaEntrega: yup.date().required("Fecha de entrega requerida"),
  DiaRetiro: yup.date().required("Fecha de retiro requerida"),
  NombreChofer: yup.string().required("Nombre del chofer requerido"),
  DNIChofer: yup.string().required("DNI requerido"),
  PatenteCamion: yup.string().required("Patente del camión requerida"),
  NombreSolicitante: yup.string().required("Nombre del solicitante requerido"),
  TipoVolqueteId: yup
    .string()
    .required("Tipo de volquete a solicitar requerido"),
  NumVolquete: yup.string().required("Número de volquete asociado requerido"),
  DestinoFinal: yup.string().required("Se debe ingresar un destino final"),
  Calle: yup.string().required("Direccion requerida"),
  Altura: yup.number().nullable().required("La atura es requerida"),
  EntreCalle: yup.object().shape({
    Item1: yup.string().required("Las entrecalles son requeridas"),
    Item2: yup.string().required("Las entrecalles son requeridas"),
  }),
  LoteCountry: yup.string().nullable().optional(),
  Coordenadas: yup.object().shape({
    lat: yup.number(),
    lng: yup.number(),
  }),
});

export default schema
