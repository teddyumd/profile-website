import type { Project } from "@/types/content";

export const githubProfile = "https://github.com/teddyumd";

export const projects: Project[] = [
  {
    name: "Ethiopia_Trade_Business_Data",
    title: "Ethiopia\u2019s Business Register, Made Readable",
    problem:
      "The record of every formally registered business in Ethiopia is public and close to unusable \u2014 a ninth of the records filed under \u201cOther\u201d, and a third of the country missing from the copy I started with.",
    built:
      "An interactive explorer of 345,369 businesses, built on a repaired dataset that publishes aggregates only.",
    liveUrl: "https://teddyumd.github.io/Ethiopia_Trade_Business_Data/",
  },
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
  {
    name: "ethiopia-in-line-art",
    title: "Ethiopia in Line Art",
    problem:
      "My coloring book of Ethiopian heritage, landscapes and everyday life needed one place that shows the pages and says where to buy it.",
    built:
      "A one-page site with sample pages and where to find the book, in Addis Ababa or on Amazon, published to GitHub Pages on every push.",
    liveUrl: "https://teddyumd.github.io/ethiopia-in-line-art/",
  },
];
