import { RequiredSeccionTitle } from "../ui/Title"
import { SelectorFechaDesde, SelectorFechaHasta } from "../ui/SelectorFecha"

export default function FechaDeEntregaSection() {
    return (
        <div id="fecha_entrega" className="bg-violet-200 flex flex-col border-2 border-violet-900 rounded-xl p-4">
            <RequiredSeccionTitle value={'Fecha de entrega'} />
            <div className="grid gap-5 grid-cols-2">
                <SelectorFechaDesde />
                <SelectorFechaHasta />
            </div>
        </div>
    )
}