import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const AvailableChecker = ({ setAvailable }) => {
  const { watch } = useFormContext();

  const fields = watch([
    "DiaEntrega",
    "DiaRetiro",
    "Calle",
    "Altura",
    "EntreCalle.Item1",
    "EntreCalle.Item2",
    "NombreChofer",
    "DNIChofer",
    "PatenteCamion",
    "TipoVolqueteId",
    "NumVolquete",
    "DestinoFinal",
    "NombreSolicitante",
  ]);

  useEffect(() => {
    const available = fields.every((field) => !!field);
    setAvailable(available);
  }, [fields, setAvailable]);

  return null;
};

export default AvailableChecker;
