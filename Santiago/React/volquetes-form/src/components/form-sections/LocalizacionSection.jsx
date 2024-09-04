import { RequiredSeccionTitle } from "../ui/Title"
import Map from "../Map";
import { Controller, useFormContext } from "react-hook-form";

export default function LocalizacionSection() {

    const { control, setValue } = useFormContext()

    return (
        <div id="localizacion" className="bg-violet-200 flex-col border-2 border-violet-900 rounded-xl p-4">
            <RequiredSeccionTitle value={'Localización'} />
            <h4 className="italic">Arrastre el ícono de ubicación (azul) hacia su calle y altura aproximada, o hacia la calle y entre calles de destino.</h4>
            <Controller 
                name="Coordenadas"
                control={control}
                render={({_}) => (
                    <Map 
                        setCoords={(coords) => setValue("Coordenadas",coords)}
                    />
                )}
            />
        </div>
    )
}