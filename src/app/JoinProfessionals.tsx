import React from "react";
import ExpandableList, { type ExpandableListRow } from "./ExpandableList";
import RequestDemo from "./RequestDemo";

// --- Data -------------------------------------------------------------

type Continent = "Europe" | "Asia" | "Africa" | "North America" | "South America";
type Org = { country: string; org: string; continent: Continent };

const ORGS: Org[] = [
  { country: "United States", org: "Sam Houston State University", continent: "North America" },
  { country: "United States", org: "University of Arizona", continent: "North America" },

  { country: "Türkiye", org: "Istanbul STEAM Bilim Teknoloji Eğitim Kültür Sanat Derneği", continent: "Asia" },
  { country: "Türkiye", org: "Antalya Kepez İlçe Milli Eğitim Müdürlüğü", continent: "Asia" },

  { country: "Spain", org: "Fundación AI Granada Research & Innovation", continent: "Europe" },
  { country: "Spain", org: "IES Sedaví", continent: "Europe" },
  { country: "Spain", org: "Escuelas de Artesanos", continent: "Europe" },
  { country: "Spain", org: "Universitat de Lleida", continent: "Europe" },
  { country: "Spain", org: "University of the Basque Country", continent: "Europe" },

  { country: "Estonia", org: "Project Factory Social Innovation OÜ", continent: "Europe" },
  { country: "Cyprus", org: "AUB Limited", continent: "Europe" },

  {
    country: "North Macedonia",
    org: `Secondary School of Economics, Law and Commerce “Kuzman Josifoski Pitu”`,
    continent: "Europe",
  },
  { country: "North Macedonia", org: "Centre for Inclusion and Mobility of Youth", continent: "Europe" },

  { country: "Serbia", org: "International School", continent: "Europe" },
  { country: "Serbia", org: "Primary School Savremena", continent: "Europe" },

  { country: "Nigeria", org: "Enugu State University of Science and Technology", continent: "Africa" },
  { country: "Nigeria", org: "University of Ibadan", continent: "Africa" },
  { country: "Nigeria", org: "Obafemi Awolowo University", continent: "Africa" },
  { country: "Nigeria", org: "Kwara State College of Education (Technical)", continent: "Africa" },
  { country: "Nigeria", org: "Federal College of Education (Technical), Umunze", continent: "Africa" },
  { country: "Nigeria", org: "Osun State University", continent: "Africa" },
  { country: "Nigeria", org: "Nnamdi Azikiwe University", continent: "Africa" },
  { country: "Nigeria", org: "Usmanu Danfodiyo University Sokoto", continent: "Africa" },
  { country: "Nigeria", org: "QEDA", continent: "Africa" },

  { country: "Ghana", org: "Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development", continent: "Africa" },
  { country: "Philippines", org: "Santiago National High School", continent: "Asia" },
  { country: "Somaliland", org: "Adal Medical University", continent: "Africa" },
  { country: "Ethiopia", org: "Addis Ababa University", continent: "Africa" },
  { country: "Indonesia", org: "Universitas Galuh", continent: "Asia" },
  { country: "Armenia", org: "Armenian State Pedagogical University after Kh. Abovyan", continent: "Asia" },
  { country: "Argentina", org: "Biblionet", continent: "South America" },
  { country: "Egypt", org: "Minia University", continent: "Africa" },
];

// Helpers
const unique = (arr: string[]) => Array.from(new Set(arr));

const continentLabel: Record<Continent, string> = {
  Europe: "Europe",
  Asia: "Asia",
  Africa: "Africa",
  "North America": "North America",
  "South America": "South America",
};

const CONTINENT_ORDER: Continent[] = ["Europe", "Asia", "Africa", "North America", "South America"];

const byContinent = ORGS.reduce<Record<Continent, Org[]>>((acc, item) => {
  (acc[item.continent] ||= []).push(item);
  return acc;
}, {} as Record<Continent, Org[]>);

const ROWS: ExpandableListRow[] = CONTINENT_ORDER.filter((c) => (byContinent[c] || []).length > 0).map((continent) => {
  const items = byContinent[continent] || [];
  const countries = unique(items.map((x) => x.country)).sort((a, b) => a.localeCompare(b));
  const orgCount = items.length;

  const grouped = countries.map((country) => ({
    country,
    orgs: items
      .filter((x) => x.country === country)
      .map((x) => x.org)
      .sort((a, b) => a.localeCompare(b)),
  }));

  const label = `${continentLabel[continent]} — ${countries.length} countries · ${orgCount} organizations`;

  return {
    // simple “list” icon to avoid importing lucide
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label,
    text: countries.join(" · "),
    node: (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="space-y-3">
          {grouped.map(({ country, orgs }) => (
            <div key={`${continent}-${country}`} className="grid gap-1">
              <div className="text-sm font-semibold text-slate-900">{country}</div>
              <ul className="list-disc pl-5 text-sm text-slate-700">
                {orgs.map((org) => (
                  <li key={`${country}-${org}`}>{org}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  };
});

// --- Component --------------------------------------------------------

type Props = {};

export default function JoinProfessionals({}: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl">
          <h2>Works with 31 organizations across 16 countries</h2>

          <div className="mt-6 flex justify-center md:mt-8">
            <div className="w-full max-w-3xl overflow-hidden">
              <img
                src="/map.jpg"
                alt="Slonig collaborates with 31 organizations across 16 countries"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Expandable list (by continents) */}
          <div className="mt-8">
            <div className="mx-auto max-w-3xl">

              <ExpandableList
                collapsed={true}
                rows={ROWS}
                outerClassName="mx-auto max-w-3xl px-0"
                innerClassName="mx-auto max-w-3xl"
                tableClassName="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                rowGridClassName="grid grid-cols-[2.75rem_3rem_1fr] items-start px-4 py-4"
                cellLabelClassName="text-slate-900 font-semibold"
                expandedTextClassName="mt-2 text-slate-700 leading-relaxed text-sm"
                expandedNodeClassName="mt-4"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <RequestDemo expanded={false} id={"curriculum-button"} caption={"Join Us"} />
          </div>
        </div>
      </div>
    </section>
  );
}