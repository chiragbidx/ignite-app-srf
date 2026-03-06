"use client";

import { useState } from "react";

type OutputSections = {
  headline: string;
  subheadline: string;
  features: string[];
  cta: string;
};

function mockGenerateCopy(productName: string, productDescription: string): OutputSections {
  const features = productDescription
    ? productDescription.split(/[.,;]/).filter((s) => s.trim().length > 0).slice(0, 5)
    : [];
  return {
    headline: `Discover ${productName || "your product"} today!`,
    subheadline:
      productDescription && productDescription.length > 30
        ? productDescription.slice(0, 70) + (productDescription.length > 70 ? "..." : "")
        : `The fastest way to experience ${productName || "amazing solutions"}.`,
    features: features.map((f) => f.trim()),
    cta: `Get started with ${productName || "CopyNest"}`,
  };
}

export function CopyFromProductInfoForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [output, setOutput] = useState<OutputSections | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Replace mockGenerateCopy with actual AI API integration when ready
      setOutput(mockGenerateCopy(productName, description));
      setLoading(false);
    }, 600);
  };

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="font-medium text-black dark:text-zinc-100" htmlFor="product-name">
        Product Name
      </label>
      <input
        id="product-name"
        type="text"
        className="px-3 py-2 rounded border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white outline-none focus:ring focus:ring-blue-400"
        value={productName}
        autoComplete="off"
        onChange={(e) => setProductName(e.target.value)}
        required
        placeholder="e.g. CopyNest"
      />

      <label className="font-medium text-black dark:text-zinc-100" htmlFor="product-desc">
        Product Description
      </label>
      <textarea
        id="product-desc"
        className="px-3 py-2 rounded border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white outline-none focus:ring focus:ring-blue-400 resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        required
        placeholder="Explain your product in 1-3 sentences..."
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex items-center justify-center bg-[#171717] dark:bg-[#ededed] text-white dark:text-black rounded-full h-10 px-6 font-semibold transition-colors hover:bg-[#343434] dark:hover:bg-white/80 focus:outline-none focus:ring focus:ring-blue-400"
      >
        {loading ? "Generating..." : "Generate Copy"}
      </button>

      {output && (
        <section className="mt-6 flex flex-col gap-4 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-700 rounded-lg p-5">
          <OutputSection
            label="Headline"
            text={output.headline}
            onCopy={() => copyToClipboard(output.headline)}
          />
          <OutputSection
            label="Subheadline"
            text={output.subheadline}
            onCopy={() => copyToClipboard(output.subheadline)}
          />
          <OutputSection
            label="Features"
            text={
              <ul className="list-disc list-inside">
                {output.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            }
            onCopy={() => copyToClipboard(output.features.join("\n"))}
          />
          <OutputSection
            label="Call To Action"
            text={output.cta}
            onCopy={() => copyToClipboard(output.cta)}
          />
        </section>
      )}
    </form>
  );
}

function OutputSection({
  label,
  text,
  onCopy,
}: {
  label: string;
  text: React.ReactNode;
  onCopy: () => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-1">
        <span className="font-semibold text-[#171717] dark:text-zinc-200">{label}</span>
        <button
          type="button"
          className="ml-1 py-1 px-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-xs font-medium text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-100 transition-colors"
          aria-label={`Copy ${label}`}
          onClick={onCopy}
        >
          Copy
        </button>
      </div>
      <div className="pl-1 text-zinc-700 dark:text-zinc-300 text-[1rem]">{text}</div>
    </div>
  );
}