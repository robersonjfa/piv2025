import React from "react";
import type { Recipe } from "./data";

const FALLBACK =
  "https://placehold.co/800x500?text=TastyBoard&font=system-ui&bg=0b1220&fc=e5e7eb";

export function RecipeCard({ r }: { r: Recipe }) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.src !== FALLBACK) img.src = FALLBACK;
  };

  return (
    <li className="card" role="listitem">
      <figure>
        {/* Usando <img> simples para evitar configuração de domínio do next/image nesta demo */}
        <img
          src={r.photo}
          alt={`Foto da receita: ${r.name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handleError}
        />
      </figure>
      <div className="body">
        <h3>{r.name}</h3>
        <p>{r.desc}</p>
      </div>
    </li>
  );
}
