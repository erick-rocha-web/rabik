export type ProjectKind = 'site' | 'application' | 'interactive';

export interface Filterable {
  slug: string;
  kind: ProjectKind;
  publicAllowed: boolean;
  featured: boolean;
}

export const KIND_LABELS: Record<ProjectKind, string> = {
  site: 'Sites',
  application: 'Aplicações',
  interactive: 'Interativos',
};

/** Único ponto de corte entre rascunhos e o que pode ir para o build público. */
export function onlyPublic<T extends Filterable>(projects: readonly T[]): T[] {
  return projects.filter((p) => p.publicAllowed === true);
}

export function featuredFirst<T extends Filterable>(projects: readonly T[], limit = 3): T[] {
  return onlyPublic(projects).filter((p) => p.featured).slice(0, limit);
}

export function countByKind<T extends Filterable>(projects: readonly T[]): Record<ProjectKind, number> {
  const counts: Record<ProjectKind, number> = { site: 0, application: 0, interactive: 0 };
  for (const p of projects) counts[p.kind] += 1;
  return counts;
}

/**
 * Filtros só aparecem quando há volume: pelo menos duas categorias com dois ou mais projetos.
 * Com poucos itens, a grade simples é mais clara (SDD §6.4).
 */
export function shouldShowFilters<T extends Filterable>(projects: readonly T[]): boolean {
  return Object.values(countByKind(projects)).filter((n) => n >= 2).length >= 2;
}

export function filterByKind<T extends Filterable>(projects: readonly T[], kind: ProjectKind | 'all'): T[] {
  return kind === 'all' ? [...projects] : projects.filter((p) => p.kind === kind);
}

export function resultsLabel(n: number): string {
  return n === 1 ? '1 projeto' : `${n} projetos`;
}
