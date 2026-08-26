import type { Product } from "@/types/content";

/**
 * Systems built end to end, as opposed to advisory engagements.
 * Both are working but not yet launched — the copy says so rather than
 * implying adoption that has not happened yet.
 */
export const products: Product[] = [
  {
    slug: "bizscope",
    name: "BizScope",
    tagline: "Working out who a location can actually reach",
    status: "Built and working, not yet launched",
    problem:
      "Site selection normally draws a circle on a map — one kilometre, three, five — and counts the people inside it. Rivers, motorways, and one-way systems do not care about circles, and neither does a customer deciding whether the trip is worth making. The result is a catchment estimate that looks precise and is not.",
    approach:
      "BizScope replaces the circle with a travel-time polygon built from the actual road network, then counts who lives inside it: population, income, and how both have shifted over the years. It also counts how many competitors are already inside the same polygon, so a location that looks busy on paper can be recognised as saturated before anyone signs a lease.",
    uses: [
      "Retail and bank branch siting judged on reachable customers rather than radius",
      "Utility and public service planning, to find coverage gaps worth investing in",
      "Market saturation audits that surface under-served pockets",
    ],
    stack: [
      { label: "Spatial core", items: ["PostgreSQL", "PostGIS", "Uber H3 indexing", "Areal interpolation"] },
      { label: "Routing", items: ["OSRM", "Valhalla", "OpenStreetMap road graph"] },
      { label: "Data pipeline", items: ["Python", "GeoPandas", "Shapely", "Census demographics"] },
      { label: "Interface", items: ["Next.js", "TypeScript", "MapLibre GL JS", "Vector tiles"] },
    ],
  },
  {
    slug: "enechawet",
    name: "Enechawet",
    nativeName: "\u12A5\u1295\u132B\u12C8\u1275",
    nameMeaning: "Let\u2019s play",
    tagline: "Booking a pitch without making ten phone calls",
    status: "Built and working, not yet launched",
    problem:
      "Most urban sports fields are still booked by phone call or a messaging group. Double bookings are routine, off-peak hours sit empty because nobody knows they are free, and a player cannot see which nearby pitch is available tonight, what surface it has, or whether it has floodlights.",
    approach:
      "Enechawet puts every venue on a map ranked by how long it actually takes to get there, not how far away it looks. Selecting a slot locks it immediately for everyone else, so two people cannot claim the same hour while one of them is paying. Facility owners get their own view for pricing, availability, and walk-ins.",
    uses: [
      "Players finding a free pitch ranked by real travel time",
      "Venue owners filling off-peak hours and taking payment in one place",
      "Municipal facilities replacing paper ledgers with a live schedule",
    ],
    stack: [
      { label: "Backend", items: ["Supabase", "PostgreSQL", "PostGIS", "Row Level Security"] },
      { label: "Concurrency", items: ["Realtime WebSockets", "Row-level locking", "Atomic transactions"] },
      { label: "Routing", items: ["OSRM", "Travel-time ranking", "Distance matrix"] },
      { label: "Client & payments", items: ["React Native", "PWA", "MapLibre", "Telebirr", "Chapa"] },
    ],
  },
];
