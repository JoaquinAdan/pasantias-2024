import { RequiredSeccionTitle } from "../ui/Title"
import { SelectorFechaDesde, SelectorFechaHasta } from "../ui/SelectorFecha"

export default function FechaDeEntregaSection() {
    return (
        <div id="fecha_entrega" className="bg-violet-200 flex flex-col rounded-xl p-4 drop-shadow-lg">
            <RequiredSeccionTitle value={'Fecha de entrega'} />
            <div className="flex flex-col w860:grid gap-5 grid-cols-2">
                <SelectorFechaDesde />
                <SelectorFechaHasta />
            </div>
        </div>
    )
}