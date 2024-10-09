import { RequiredSeccionTitle } from "../ui/Title"
import Map from "../Map";
import { Controller, useFormContext } from "react-hook-form";

export default function LocalizacionSection() {

    const { control, setValue } = useFormContext()

    return (
        <div id="localizacion" className="bg-violet-200 flex-col rounded-xl p-4 drop-shadow-lg">
            <RequiredSeccionTitle value={'Localización'} />
            <h4 className="text-center w860:text-left italic mb-2">Arrastre el ícono de ubicación (azul) hacia su calle y altura aproximada, o hacia la calle y entre calles de destino.</h4>
            <Controller 
                name="Coordenadas"
                control={control}
                render={() => (
                    <Map 
                        setCoords={(coords) => setValue("Coordenadas",coords)}
                    />
                )}
            />
        </div>
    )
}