import { useFormContext } from "react-hook-form";
import { SeccionTitle } from "../ui/Title";
import { TextField } from "@mui/material";
import TransitionsModal from "../ui/Modal";

export default function SolicitanteSection({ available }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      id="datos-solicitante"
      className="bg-violet-200 flex-col rounded-xl p-4 drop-shadow-lg"
    >
      <SeccionTitle value={"Datos Solicitante"} />
      <div className="flex flex-col gap-5">
        <div className="flex justify-center w860:grid gap-5 grid-cols-2 mt-2">
          <TextField
            fullWidth
            color="secondary"
            id="outlined-basic"
            label="Nombre del solicitante"
            variant="outlined"
            error={!!errors.NombreSolicitante}
            helperText={errors.NombreSolicitante?.message}
            {...register("NombreSolicitante")}
          />
        </div>
        <TransitionsModal available={available} />
      </div>
    </div>
  );
}
