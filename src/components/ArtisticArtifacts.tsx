// STYLE REMINDER: Pop-culture references are transformed into original abstract artifacts — no copied frames, logos, or proprietary images.
const artifacts = [
  { code: "01", title: "THE MONOLITH", reference: "2001 / A SPACE ODYSSEY", note: "Scale, silence, and the feeling of intelligence arriving." },
  { code: "02", title: "CODE RAIN", reference: "THE MATRIX", note: "A visual language for systems that are beautiful before they are understood." },
  { code: "03", title: "REGISTERED MOTION", reference: "SPIDER-VERSE", note: "Colour, print misalignment, and the permission to break one clean line." },
  { code: "04", title: "CITY AS SIGNAL", reference: "AKIRA", note: "A future imagined through light, speed, and dense visual noise." },
];

export default function ArtisticArtifacts() {
  return <section className="artifacts-section"><div className="artifacts-heading"><span>05 / VISUAL CULTURE</span><p>References I keep returning to — translated into original studies of rhythm, scale, colour, and atmosphere.</p></div><div className="artifact-grid">{artifacts.map((artifact, index) => <article className={`artifact-card artifact-${index + 1}`} key={artifact.code}><div className="artifact-art" aria-hidden="true"><i /><b /><span /></div><div className="artifact-meta"><span>{artifact.code} / {artifact.reference}</span><strong>{artifact.title}</strong><small>{artifact.note}</small></div></article>)}</div></section>;
}
