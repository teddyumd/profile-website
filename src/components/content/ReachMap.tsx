import {
  mappedCountries,
  worldMapBase,
  worldMapViewBox,
} from "@/content/worldMap";

/**
 * Where the work has been, as an actual map.
 *
 * A site about geospatial work should show geography rather than describe it.
 * The outlines are static, pre-projected path data, so this ships no mapping
 * library and no runtime projection: it is one inline SVG.
 *
 * The SVG carries a title and description for assistive technology, and the
 * country list beside it is the real text alternative — a screen reader user
 * gets the same information, in a better form than a shape ever gives.
 */
export function ReachMap() {
  return (
    <figure className="reach-map">
      <svg
        viewBox={`0 0 ${worldMapViewBox.width} ${worldMapViewBox.height}`}
        role="img"
        aria-labelledby="reach-map-title reach-map-desc"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="reach-map-title">
          Countries where Tewodros Hailegeberel has worked
        </title>
        <desc id="reach-map-desc">
          A world map with the United States, Haiti, Ethiopia, Burundi, and
          Malawi highlighted.
        </desc>
        <path className="reach-map-base" d={worldMapBase} />
        {mappedCountries.map((country) => (
          <path key={country.code} className="reach-map-country" d={country.d} />
        ))}
        {/* Burundi, Haiti and Malawi are only a few pixels wide at this
            scale; the rings are what make them findable. */}
        {mappedCountries.map((country) => (
          <circle
            key={`${country.code}-ring`}
            className="reach-map-ring"
            cx={country.cx}
            cy={country.cy}
            r="9"
          />
        ))}
      </svg>
      <figcaption className="visually-hidden">
        Work delivered in {mappedCountries.length} countries:{" "}
        {mappedCountries.map((c) => c.name).join(", ")}.
      </figcaption>
    </figure>
  );
}
