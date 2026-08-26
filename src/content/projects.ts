import type { Project } from "@/types/content";

export const githubProfile = "https://github.com/teddyumd";

export const projects: Project[] = [
  {
    name: "Gefersa_Resv_Water_Quality_GEE",
    title: "Reservoir Water-Quality Monitoring",
    problem:
      "Addis Ababa depends on the Gefersa Reservoir, and its water quality is hard to observe continuously from the ground.",
    built:
      "A Google Earth Engine workflow that tracks reservoir conditions from satellite imagery.",
  },
  {
    name: "Addis_Ababa_OSM",
    title: "Open Geodata for Addis Ababa",
    problem:
      "A city of millions with very little openly available spatial data to plan or build on.",
    built:
      "OpenStreetMap extracts for Addis Ababa, published as GeoJSON for anyone to use.",
  },
  {
    name: "QGIS_Training",
    title: "Teaching QGIS and PostGIS",
    problem:
      "Geospatial capacity is the bottleneck in most institutions I work with, and classroom training rarely sticks.",
    built:
      "An interactive web app that walks people through QGIS and PostGIS at their own pace.",
  },
  {
    name: "esri_arcpy",
    title: "Automating Esri Workflows",
    problem:
      "GIS teams lose days to repetitive tasks that should run themselves.",
    built:
      "A collection of Python utilities for automating routine work across Esri products.",
  },
  {
    name: "GAS-Apartment-Management",
    title: "Property Management, Without the Software Budget",
    problem:
      "Small property operations need real record-keeping but cannot justify enterprise systems.",
    built:
      "A working management system built entirely on Google Apps Script.",
  },
];
