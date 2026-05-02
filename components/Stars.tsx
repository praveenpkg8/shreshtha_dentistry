import Icon from "./Icon";

export default function Stars({ n = 5 }: { n?: number }) {
  return (
    <div style={{ display: "flex", gap: 2, color: "var(--c-accent)" }}>
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={16} />
      ))}
    </div>
  );
}
