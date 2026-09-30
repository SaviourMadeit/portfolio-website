const SectionHeader = ({ eyebrow, title, description, align = "center", dark = false }) => {
  const textAlign = align === "left" ? "text-left" : "text-center";
  const titleColor = dark ? "text-white" : "text-slate-900";
  const descColor = dark ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`max-w-3xl ${textAlign} ${align === "left" ? "mx-0" : "mx-auto"}`}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </div>
  );
};

export default SectionHeader;
