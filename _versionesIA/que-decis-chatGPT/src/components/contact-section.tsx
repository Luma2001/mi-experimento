export function ContactSection() {
  return (
    <section id="contacto" className="bg-brand-soft py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand-blue">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-brand-ink sm:text-4xl">
            Queremos ayudarte a conversar con más calma
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            Dejanos tu consulta y contanos dónde querés usar ¿Qué Decís?
          </p>
        </div>
        <form
          aria-label="Formulario de contacto"
          className="rounded-md bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="grid gap-4">
            <div>
              <label className="font-black text-brand-ink" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="tap-target mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-brand-ink"
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="font-black text-brand-ink" htmlFor="correo">
                Correo electrónico
              </label>
              <input
                className="tap-target mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-brand-ink"
                id="correo"
                name="correo"
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="font-black text-brand-ink" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                className="mt-2 min-h-36 w-full rounded-md border border-gray-300 px-4 py-3 text-brand-ink"
                id="mensaje"
                name="mensaje"
                placeholder="Escribí tu consulta"
              />
            </div>
            <button
              className="tap-target rounded-md bg-brand-orange px-5 py-4 text-lg font-black text-brand-ink hover:bg-orange-500"
              type="button"
            >
              Enviar consulta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
