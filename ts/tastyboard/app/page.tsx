'use client';

import { useMemo, useState } from "react";
import { RECIPES, type Recipe } from "./components/data";
import { RecipeCard } from "./components/RecipeCard";

export default function Page() {
  const [q, setQ] = useState<string>("");

  const list = useMemo<Recipe[]>(() => {
    const norm = (s: string) => s.toLocaleLowerCase();
    const term = norm(q);
    if (!term) return RECIPES;
    return RECIPES.filter(r => norm(r.name).includes(term) || norm(r.desc).includes(term));
  }, [q]);

  return (
    <>
      <header className="container">
        <h1>TastyBoard</h1>
        <p className="muted">Explorar receitas — Next.js + TypeScript (demo inicial)</p>

        <div className="searchbar" role="search">
          <label htmlFor="q" className="visually-hidden">Pesquisar receitas</label>
          <input
            id="q"
            type="search"
            placeholder="Pesquisar por nome ou descrição…"
            aria-label="Pesquisar receitas"
            value={q}
            onChange={(e)=>setQ(e.target.value)}
          />
          <button className="btn" onClick={()=>setQ("")} aria-label="Limpar pesquisa">Limpar</button>
        </div>
      </header>

      <main className="container">
        <section aria-live="polite" aria-busy="false">
          <ul className="grid" role="list">
            {list.map(r => <RecipeCard key={r.id} r={r} />)}
          </ul>
          {list.length === 0 && <p className="empty muted">Nenhuma receita encontrada.</p>}
        </section>
      </main>

      <footer className="container footer">
        <small>Demo responsiva • Next.js + TypeScript • Imagens de placeholder</small>
      </footer>
    </>
  );
}
