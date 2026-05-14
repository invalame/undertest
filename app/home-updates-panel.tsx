'use client'

import { HOME_UPDATES } from './updates-config'

export function HomeUpdatesPanel({ canCompose }: { canCompose?: boolean }) {
  return (
    <div className="updates-panel">
      <div className="updates-header">
        <h2 className="updates-title">Novedades</h2>
      </div>

      <div className="updates-list">
        {HOME_UPDATES.map((update) => (
          <article key={update.id} className="update-card">
            {update.img && (
              <div className="update-img-wrap">
                <img src={update.img} alt="" className="update-img" onError={(e) => {
                  // Si no hay imagen, ocultamos el contenedor
                  (e.target as HTMLImageElement).parentElement!.style.display = 'none'
                }} />
              </div>
            )}
            <div className="update-content">
              <span className="update-date">{update.fecha}</span>
              <h3 className="update-card-title">{update.titulo}</h3>
              <p className="update-card-desc">{update.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
