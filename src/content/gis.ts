/**
 * Geospatial capability and technology stack.
 *
 * Every entry below is traceable to work already documented on this site —
 * the career timeline, the case studies, or the public GitHub repositories.
 * Nothing here is aspirational: if it is listed, there is evidence for it.
 */

export type GisCapability = {
  title: string;
  body: string;
  evidence: string;
};

export const gisCapabilities: GisCapability[] = [
  {
    title: "Enterprise GIS",
    body: "Deploying and running geospatial platforms as production infrastructure: server, portal, and enterprise geodatabases that field crews and control rooms depend on daily.",
    evidence: "DC Water and Sewer Authority; Prince George’s County; Ethiopian Electric Utility",
  },
  {
    title: "WebGIS & Location Services",
    body: "Building browser-based mapping products and the addressing data underneath them, including in places where no reliable base data existed to begin with.",
    evidence: "eAdrasha: 50,000 locations mapped; open Addis Ababa geodata",
  },
  {
    title: "GIS Automation",
    body: "Replacing repetitive analytical and data-management work with Python, SQL, and ETL pipelines, so teams spend their time on judgment instead of file handling.",
    evidence: "PEPFAR analytics across eight USAID Missions; ArcPy utility library",
  },
  {
    title: "Remote Sensing & Earth Observation",
    body: "Using satellite imagery and Google Earth Engine to monitor conditions that are impractical to observe continuously from the ground.",
    evidence: "Gefersa Reservoir water-quality monitoring, Addis Ababa",
  },
];

export type StackGroup = { label: string; items: string[] };

export const techStack: StackGroup[] = [
  {
    label: "Desktop & Enterprise GIS",
    items: ["QGIS", "ArcGIS Pro", "ArcGIS Server", "Portal for ArcGIS", "Enterprise Geodatabase"],
  },
  {
    label: "Programming & Automation",
    items: ["Python", "ArcPy", "SQL", "ETL pipelines", "Google Apps Script"],
  },
  {
    label: "Spatial Data & Web",
    items: ["PostGIS", "GeoJSON", "OpenStreetMap", "WebGIS", "Spatial dashboards"],
  },
  {
    label: "Earth Observation",
    items: ["Google Earth Engine", "Satellite imagery analysis"],
  },
  {
    label: "Health & M&E Systems",
    items: ["DHIS2", "KoboToolbox", "OpenHIM", "Tableau"],
  },
];
