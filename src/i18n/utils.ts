// src/i18n/utils.ts
// Helper reutilizable para leer los textos de src/i18n/ui.ts.
// Uso:
//   const t = useTranslations("es");
//   t("hero.title"); // -> "Sabores que cuentan historias"

import { defaultLang, ui, type Lang, type UiSchema } from "./ui.ts";

export type { Lang };

export function isLang(value: string): value is Lang {
	return value in ui;
}

export function getLang(locale: string | undefined | null): Lang {
	if (locale && isLang(locale)) return locale;
	return defaultLang;
}

// Rutas con notación de puntos solo para hojas `string`.
// Los arrays/objetos (bullets, deals.items, footer.hours...) se leen
// directamente del diccionario: ui[lang].deals.items
type DotPaths<T> = T extends string
	? "."
	: T extends Array<unknown>
		? never
		: T extends object
			? {
					[K in Extract<keyof T, string>]: DotPaths<T[K]> extends never
						? never
						: DotPaths<T[K]> extends "."
							? K
							: K | `${K}.${DotPaths<T[K]>}`;
				}[Extract<keyof T, string>]
			: never;

export type TKey = DotPaths<UiSchema>;

function getByPath(dict: UiSchema, path: string): unknown {
	return path.split(".").reduce<unknown>((acc, part) => {
		if (typeof acc === "object" && acc !== null && part in acc) {
			return (acc as Record<string, unknown>)[part];
		}
		return undefined;
	}, dict);
}

export function useTranslations(lang: string) {
	const dict: UiSchema = ui[getLang(lang)];
	const fallback: UiSchema = ui[defaultLang];

	return function t(key: TKey): string {
		const value = getByPath(dict, key);
		if (typeof value === "string") return value;
		const fallbackValue = getByPath(fallback, key);
		if (typeof fallbackValue === "string") return fallbackValue;
		return "";
	};
}
