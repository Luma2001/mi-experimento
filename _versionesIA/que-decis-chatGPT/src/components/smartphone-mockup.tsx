export function SmartphoneMockup() {
  return (
    <div
      className="mx-auto w-full max-w-[300px] rounded-[32px] border-8 border-brand-ink bg-brand-ink p-2 shadow-2xl"
      aria-label="Vista previa de la aplicación con voz a texto y texto a voz"
      role="img"
    >
      <div className="overflow-hidden rounded-[24px] bg-white">
        <div className="flex items-center justify-between bg-brand-blue px-4 py-3 text-white">
          <span className="text-sm font-black">¿Qué Decís?</span>
          <span className="h-3 w-3 rounded-full bg-brand-teal" aria-hidden="true" />
        </div>
        <div className="space-y-4 p-4">
          <div className="rounded-md border-2 border-brand-blue bg-brand-soft p-4">
            <p className="text-xs font-black uppercase text-brand-blue">Voz {"->"} Texto</p>
            <p className="mt-2 text-2xl font-black leading-tight text-brand-ink">
              El turno es a las 10:30.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2" aria-hidden="true">
            <span className="rounded-md bg-gray-100 px-3 py-2 text-sm font-bold text-brand-ink">
              Gracias
            </span>
            <span className="rounded-md bg-gray-100 px-3 py-2 text-sm font-bold text-brand-ink">
              Repita
            </span>
          </div>
          <div className="rounded-md border border-gray-300 p-3">
            <p className="text-xs font-black uppercase text-brand-muted">Texto {"->"} Voz</p>
            <p className="mt-1 text-lg font-bold text-brand-ink">
              Necesito escribir mi respuesta.
            </p>
          </div>
          <button
            className="tap-target w-full rounded-md bg-brand-orange px-4 py-4 text-lg font-black text-brand-ink"
            type="button"
          >
            Hablar mensaje
          </button>
        </div>
      </div>
    </div>
  );
}
