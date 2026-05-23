type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function stripContext(node: Record<string, unknown>) {
  const rest = { ...node };
  delete rest["@context"];
  return rest;
}

/** One or more JSON-LD nodes (each may include @context). */
export default function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item) => (
        <script
          key={String(item["@id"] ?? item["@type"] ?? JSON.stringify(item).slice(0, 80))}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

type JsonLdGraphProps = {
  nodes: Record<string, unknown>[];
};

/** Single connected @graph — preferred for entity linking by Google and AI parsers. */
export function JsonLdGraph({ nodes }: JsonLdGraphProps) {
  const graph = nodes.map((node) => stripContext(node));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
