import type { CareerEntry } from "@/types/content";

export const career: CareerEntry[] = [
  {
    period: "Dec 2025 — Jun 2026",
    title: "Senior GIS Engineer",
    organization: "Adam Smith International",
    scope: "Public-Sector & Utility Advisory",
    location: "Addis Ababa, Ethiopia",
    description:
      "Advised Ethiopian utility and public-sector executives on a roughly $5 million enterprise modernization investment, covering digital strategy, governance, implementation sequencing, and operational readiness.",
    highlights: [
      "Cut proposed Esri licensing costs by around 10% through technical restructuring and commercial negotiation, without giving up any required enterprise capability.",
      "Defined the integration requirements between GIS, ERP/SAP, SCADA, outage management, metering, customer, and asset-management systems, so the utility could stop running them as separate islands.",
      "Assessed data ownership, workflows, governance gaps, and staff capacity before deployment rather than after it, which is where modernization programmes usually fail.",
    ],
  },
  {
    period: "Oct 2025 — Mar 2026",
    title: "Regional GIS & Digital Health Consultant",
    organization: "Palladium",
    scope: "Data.FI Project",
    location: "Burundi / Remote",
    concurrent: true,
    description:
      "Advised Burundi's Ministry of Health and national partners on the interoperability, governance, and sustainability of national HIV information systems.",
    highlights: [
      "Designed an interoperability pathway across four national platforms — SIDAInfo, IBIPIMO, eLMIS, and DHIS2 — on an OpenHIM architecture aligned to HL7 FHIR.",
      "Led the GIS and analytical workstreams that let national and facility-level staff see where services were missing rather than infer it.",
      "Brought government, implementing partners, and technical teams to a shared set of architecture decisions and implementation responsibilities.",
    ],
  },
  {
    period: "Oct 2022 — Jul 2025",
    title: "Senior Digital Health Advisor",
    organization: "USAID/Ethiopia Mission",
    scope: "Health Office",
    location: "Addis Ababa, Ethiopia",
    description:
      "Senior adviser and digital health lead for a $63 million national Digital Health Activity, covering strategy, budgets, procurement, performance, risk, interoperability, and sustainability.",
    highlights: [
      "Supported digital health services reaching more than 8,000 health posts and 1,300 health facilities, across community health, EMR, supply chain, workforce, facility registries, pharmaceutical regulation, and health information exchange.",
      "Built a sustainability model around 15+ youth-led digital enterprises and 100+ young technology professionals servicing roughly 400 health facilities — a locally staffed alternative to permanent external support.",
      "Developed the monitoring framework for the Activity: its theory of change, indicator set, and the baselines performance was measured against.",
      "Oversaw collection, cleaning, and analysis of quantitative and qualitative data in DHIS2, KoboToolbox, and Tableau, and led the data quality audits, partner training, and field supervision behind it.",
      "Reviewed work plans, budgets, vendor proposals, and procurement packages, turning findings into recommendations executives could act on.",
    ],
  },
  {
    period: "May 2021 — Oct 2022",
    title: "GIS & Knowledge Management Specialist",
    organization: "USAID/Ethiopia Mission",
    scope: "Program Office",
    location: "Addis Ababa, Ethiopia",
    description:
      "Advised Mission leadership on enterprise GIS, spatial analytics, and information governance across health, humanitarian, resilience, and infrastructure programming.",
    highlights: [
      "Produced the Mission's enterprise data strategies, dashboards, spatial analyses, metadata standards, and governance frameworks.",
      "Shaped the design of what became the $63 million Digital Health Activity, contributing the evidence, technical requirements, and stakeholder priorities behind it.",
    ],
  },
  {
    period: "Nov 2020 — May 2021",
    title: "GIS / Data Specialist",
    organization: "USAID / Credence Management Solutions",
    scope: "Office of HIV/AIDS",
    location: "Washington, DC",
    description:
      "Supported PEPFAR analytics across eight USAID Missions, turning programme, geographic, and contextual data into targeting and management decisions.",
    highlights: [
      "Built the maps, dashboards, and scenario analyses used for HIV programming, outbreak response, and resource targeting across eight country programmes.",
      "Automated recurring analytical workflows in Python, SQL, ArcGIS, and ETL, improving both turnaround and consistency of multi-country products.",
    ],
  },
  {
    period: "Mar 2020 — Nov 2020",
    title: "GIS Solution Engineer",
    organization: "Geospatial Consulting Group International",
    scope: "U.S. Census Bureau support",
    location: "Alexandria, Virginia",
    description:
      "Translated federal requirements into working technical concepts across population mapping, emergency response, and enterprise GIS.",
    highlights: [
      "Combined enterprise GIS, cloud environments, dashboards, and SQL/Python workflows into solution designs public-sector clients could actually operate.",
    ],
  },
  {
    period: "Sep 2019 — Mar 2020",
    title: "GIS Technical Lead",
    organization: "DC Water and Sewer Authority",
    location: "Washington, DC",
    description:
      "Led enterprise geospatial technology across GIS, IT, engineering, and field operations for a major water and wastewater utility.",
    highlights: [
      "Ran ArcGIS Enterprise, Server, Portal, geodatabases, web services, and field applications as production infrastructure for two critical networks.",
      "Automated system-management workflows and improved the reliability of the information crews depended on daily.",
    ],
  },
  {
    period: "2017 — 2020",
    title: "Founder & Chief Executive Officer",
    organization: "eAdrasha",
    location: "Addis Ababa, Ethiopia",
    concurrent: true,
    description:
      "Founded and led Ethiopia's first digital addressing and location-intelligence platform, built for a city with no street addresses.",
    highlights: [
      "Grew the company to 40+ people across software, data engineering, field operations, quality assurance, product, and partnerships.",
      "Reached 25,000+ users within six months, on a base of 50,000 locations tagged by hand.",
      "Improved platform performance by roughly 35% through cloud optimization, tile caching, and load balancing.",
      "Built out business search, routing, geocoding, and location-data APIs serving navigation, logistics, government, and urban services.",
    ],
  },
  {
    period: "May 2014 — Sep 2019",
    title: "Senior Geospatial Analyst",
    organization: "Prince George's County Government",
    scope: "Office of Information Technology",
    location: "Largo, Maryland",
    description:
      "Led countywide geospatial strategy and enterprise data governance across public works, emergency management, planning, licensing, and citizen services.",
    highlights: [
      "Established countywide data governance over five years — metadata standards, authoritative data practices, QA/QC, and cross-department data sharing.",
      "Served as GIS lead during Emergency Operations Center activations and countywide preparedness exercises.",
      "Received the Prince George's County Fire Chief Special Achievement Award in 2016 for the GIS-enabled Adopt-a-Neighborhood emergency management application.",
      "Supervised GIS professionals and advised department leadership on where enterprise geospatial technology was worth extending.",
    ],
  },
  {
    period: "2012 — 2017",
    title: "Geospatial Consultant",
    organization: "International Development Assignments",
    scope: "USAID Haiti, FHI 360 Malawi, and other programmes",
    location: "International",
    concurrent: true,
    description:
      "Geospatial and information-management support to development and public health programmes, including assignments in Haiti and Malawi.",
    highlights: [
      "Applied GIS, digital mapping, information management, and data governance to implementation problems in low-resource settings.",
      "Built local analytical capacity alongside the deliverables, so the work did not leave with the consultant.",
    ],
  },
];
