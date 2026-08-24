type DiagramVariant = "digital-health" | "utility" | "eadrasha";

const diagrams: Record<
  DiagramVariant,
  { eyebrow: string; title: string; steps: string[]; domains: string[] }
> = {
  "digital-health": {
    eyebrow: "Digital health / Ethiopia",
    title: "From government priorities to institutional ownership",
    steps: [
      "Government priorities",
      "Portfolio & investment",
      "Digital platforms",
      "Interoperability & data",
      "Service delivery / decisions",
      "Institutional ownership",
    ],
    domains: ["Community health", "EMR", "Logistics / supply chain", "Workforce", "Registries", "Analytics"],
  },
  utility: {
    eyebrow: "Utility modernization",
    title: "Location intelligence as operational infrastructure",
    steps: ["Assets", "GIS", "Customers", "ERP / SAP", "SCADA", "Operations", "Metering", "Outage management"],
    domains: ["Authoritative infrastructure data", "Governance", "Integration", "Institutional readiness"],
  },
  eadrasha: {
    eyebrow: "eAdrasha / Addis Ababa",
    title: "Turning local place data into useful location services",
    steps: ["Local place data", "Field collection", "Quality control", "Location platform", "Search / routing / geocoding", "Users / businesses / partners"],
    domains: ["Product strategy", "Software and data", "Field operations", "Partnerships"],
  },
};

export function SystemDiagram({ variant }: { variant: DiagramVariant }) {
  const diagram = diagrams[variant];

  return (
    <div className={`system-diagram system-diagram--${variant}`} role="img" aria-label={`${diagram.title} diagram`}>
      <p className="eyebrow">{diagram.eyebrow}</p>
      <h2>{diagram.title}</h2>
      <div className="system-diagram-flow">
        {diagram.steps.map((step, index) => (
          <div className="system-diagram-step" key={step}>
            <span>{step}</span>
            {index < diagram.steps.length - 1 ? <b aria-hidden="true">↓</b> : null}
          </div>
        ))}
      </div>
      <div className="system-diagram-domains" aria-label="Related domains">
        {diagram.domains.map((domain) => <span key={domain}>{domain}</span>)}
      </div>
    </div>
  );
}
