import React from "react";

const categories = [
  "Rings",
  "Chains",
  "Earrings",
  "Bangles",
];

const products = [
  { name: "Celestial Halo Ring", purity: "92.5 Silver", price: "₹12,900" },
  { name: "Noor Heritage Chain", purity: "22K Gold", price: "₹48,500" },
  { name: "Lustre Drop Earrings", purity: "92.5 Silver", price: "₹9,800" },
  { name: "Regal Texture Bangles", purity: "22K Gold", price: "₹72,000" },
  { name: "Moonline Pendant Set", purity: "18K Gold", price: "₹34,600" },
  { name: "Ivory Bloom Studs", purity: "92.5 Silver", price: "₹7,200" },
];

const aiFeatures = [
  "Search by description",
  "Generate design previews",
  "Order via WhatsApp",
];

const customSteps = [
  "Upload inspiration",
  "Describe changes",
  "Get AI preview",
];

const testimonials = [
  {
    name: "Aarushi Mehta",
    review:
      "The finish felt truly premium, and the custom guidance made the piece feel designed just for me.",
  },
  {
    name: "Rhea Kapoor",
    review:
      "Elegant presentation, responsive support, and jewellery that looked even better in person.",
  },
  {
    name: "Sana Iyer",
    review:
      "The design consultation experience was seamless. It felt personal, modern, and very luxurious.",
  },
];

function CartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.7L21 7H7" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 17.9a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 19.9Zm4.5-5.8c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.7.8-.9.9-.3.2-.6 0a6.6 6.6 0 0 1-1.9-1.2 7.4 7.4 0 0 1-1.4-1.8c-.1-.3 0-.4.1-.5l.4-.5.2-.4c.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.8s2 3.1 4.8 4.2c2.8 1.1 2.8.7 3.3.7s1.7-.7 1.9-1.4.2-1.2.1-1.4-.2-.2-.4-.3Z" />
    </svg>
  );
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3L12 17.3 6.4 20.2l1.1-6.3L3 9.4l6.3-.9L12 2.8Z" />
    </svg>
  );
}

function PlaceholderArt({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-[rgba(184,134,11,0.45)] bg-[#1A1A1A] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,134,11,0.14),_transparent_45%),linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0))]" />
      <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-[rgba(184,134,11,0.55)] to-transparent" />
      <div className="absolute inset-x-7 bottom-7 h-16 rounded-full border border-[rgba(184,134,11,0.2)]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(184,134,11,0.35)]" />
      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(184,134,11,0.07)]" />
      <div className="absolute bottom-5 left-5 text-[0.65rem] uppercase tracking-[0.35em] text-[rgba(250,250,250,0.48)]">
        {label}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div
          className={`mb-4 text-[0.72rem] uppercase tracking-[0.42em] ${
            light ? "text-[#8B6A1E]" : "text-[rgba(184,134,11,0.86)]"
          }`}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-[#171717]" : "text-[#FAFAFA]"
        } [font-family:Georgia,'Times_New_Roman',serif]`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
            light ? "text-[#4E4A43]" : "text-[rgba(250,250,250,0.72)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function OmisaJewelleryMockup() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FAFAFA] antialiased">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_top,_rgba(184,134,11,0.16),_transparent_38%)]" />

      <div className="relative">
        <nav className="sticky top-0 z-30 border-b border-[rgba(184,134,11,0.18)] bg-[rgba(13,13,13,0.82)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <div className="text-3xl text-[#B8860B] [font-family:Georgia,'Times_New_Roman',serif]">
              Omisa
            </div>

            <div className="hidden items-center gap-8 text-sm tracking-[0.14em] text-[rgba(250,250,250,0.78)] md:flex">
              {["Home", "Shop", "Custom Orders", "About", "Contact"].map((item) => (
                <a key={item} href="#" className="transition hover:text-[#B8860B]">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(184,134,11,0.35)] bg-[rgba(255,255,255,0.02)] text-[#FAFAFA] transition hover:border-[#B8860B] hover:text-[#B8860B]">
                <CartIcon className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(184,134,11,0.35)] bg-[rgba(255,255,255,0.02)] text-[#B8860B] transition hover:bg-[rgba(184,134,11,0.12)]">
                <WhatsAppIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="border-t border-[rgba(184,134,11,0.12)] px-5 py-3 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.24em] text-[rgba(250,250,250,0.72)]">
              {["Home", "Shop", "Custom Orders", "About", "Contact"].map((item) => (
                <a key={item} href="#" className="transition hover:text-[#B8860B]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0D0D0D_20%,#0D1B2A_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(184,134,11,0.18),_transparent_28%),radial-gradient(circle_at_85%_25%,_rgba(184,134,11,0.08),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <div className="mb-5 text-[0.72rem] uppercase tracking-[0.45em] text-[rgba(184,134,11,0.88)]">
                Omisa Silver &amp; Gold Jewellery
              </div>
              <h1 className="text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl [font-family:Georgia,'Times_New_Roman',serif]">
                Handcrafted Silver &amp; <span className="text-[#B8860B]">Gold</span> Jewellery
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(250,250,250,0.76)] sm:text-lg">
                Designed for you. Delivered to your door.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-[#B8860B] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-[#0D0D0D] transition hover:bg-[#c79829]">
                  Shop Now
                </button>
                <button className="rounded-full border border-[rgba(184,134,11,0.5)] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-[#FAFAFA] transition hover:bg-[rgba(184,134,11,0.12)] hover:text-[#B8860B]">
                  Try AI Designer
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-10 hidden h-32 w-32 rounded-full border border-[rgba(184,134,11,0.25)] lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-40 w-40 rounded-full border border-[rgba(184,134,11,0.18)] lg:block" />
              <PlaceholderArt label="Luxury Preview" className="h-[420px] sm:h-[520px]" />
            </div>
          </div>
        </section>

        <section className="bg-[#111111] px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Collections"
              title="Explore the signature categories"
              description="A refined catalogue preview designed to feel bespoke, editorial, and unmistakably premium."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <article
                  key={category}
                  className="group rounded-[1.75rem] border border-[rgba(184,134,11,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(184,134,11,0.4)]"
                >
                  <PlaceholderArt label={category} className="h-64" />
                  <div className="flex items-center justify-between px-2 pb-2 pt-5">
                    <h3 className="text-2xl text-[#B8860B] [font-family:Georgia,'Times_New_Roman',serif]">
                      {category}
                    </h3>
                    <ArrowIcon className="h-5 w-5 text-[rgba(250,250,250,0.7)] transition group-hover:translate-x-1 group-hover:text-[#B8860B]" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0D0D0D] px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Pieces"
              title="Curated for modern heirloom appeal"
              description="A premium product grid with editorial spacing, precious-metal highlights, and WhatsApp-first shopping cues."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-[1.75rem] border border-[rgba(184,134,11,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] shadow-[0_24px_70px_rgba(0,0,0,0.26)]"
                >
                  <div className="p-4">
                    <PlaceholderArt label={product.name} className="h-72" />
                  </div>
                  <div className="px-6 pb-6">
                    <div className="inline-flex rounded-full border border-[rgba(184,134,11,0.32)] bg-[rgba(184,134,11,0.08)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[#D3A73A]">
                      {product.purity}
                    </div>
                    <h3 className="mt-4 text-2xl leading-tight text-[#FAFAFA] [font-family:Georgia,'Times_New_Roman',serif]">
                      {product.name}
                    </h3>
                    <div className="mt-4 text-xl text-[#B8860B]">{product.price}</div>
                    <div className="mt-6 flex items-center gap-3">
                      <button className="flex-1 rounded-full bg-[#B8860B] px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0D0D0D] transition hover:bg-[#c79829]">
                        Add to Cart
                      </button>
                      <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(184,134,11,0.35)] text-[#B8860B] transition hover:bg-[rgba(184,134,11,0.12)]">
                        <WhatsAppIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0D1B2A_10%,#0D0D0D_100%)] px-5 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(184,134,11,0.15),_transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="AI Experience"
              title="Meet Your AI Jewellery Designer"
              description="An intelligent concierge concept that makes discovery, visualization, and ordering feel modern without losing the luxury brand tone."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {aiFeatures.map((feature, index) => (
                <div
                  key={feature}
                  className="rounded-[1.75rem] border border-[rgba(184,134,11,0.18)] bg-[rgba(255,255,255,0.03)] p-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(184,134,11,0.35)] bg-[rgba(184,134,11,0.08)] text-lg text-[#B8860B]">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl text-[#FAFAFA] [font-family:Georgia,'Times_New_Roman',serif]">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button className="rounded-full bg-[#B8860B] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-[#0D0D0D] transition hover:bg-[#c79829]">
                Try It Now
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] px-5 py-20 text-[#171717] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Custom Orders"
              title="Want Something Unique?"
              description="A clean, luxury ordering flow that reassures clients they can co-create their jewellery with confidence."
              light
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {customSteps.map((step, index) => (
                <article
                  key={step}
                  className="rounded-[1.75rem] border border-[rgba(184,134,11,0.22)] bg-white p-8 shadow-[0_20px_50px_rgba(13,13,13,0.08)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D0D0D] text-lg text-[#B8860B] [font-family:Georgia,'Times_New_Roman',serif]">
                    {index + 1}
                  </div>
                  <h3 className="text-3xl leading-tight [font-family:Georgia,'Times_New_Roman',serif]">
                    {step}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5A554E]">
                    A polished consultation step designed to feel personal, guided, and easy to understand at a glance.
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button className="rounded-full bg-[#B8860B] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-[#0D0D0D] transition hover:bg-[#c79829]">
                Start Custom Order
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#111111] px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by clients seeking statement pieces"
              description="A luxury review strip to balance aspiration with credibility in the client preview."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.75rem] border border-[rgba(184,134,11,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8"
                >
                  <div className="mb-5 flex gap-1 text-[#B8860B]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-[rgba(250,250,250,0.76)]">{item.review}</p>
                  <div className="mt-6 text-xl text-[#FAFAFA] [font-family:Georgia,'Times_New_Roman',serif]">
                    {item.name}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-[rgba(184,134,11,0.14)] bg-[#0B0B0B] px-5 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
            <div>
              <div className="text-3xl text-[#B8860B] [font-family:Georgia,'Times_New_Roman',serif]">
                Omisa
              </div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[rgba(250,250,250,0.66)]">
                Silver and gold jewellery mockup crafted to feel timeless, premium, and ready for a modern luxury audience.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[rgba(184,134,11,0.82)]">Links</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(250,250,250,0.72)]">
                {["Home", "Shop", "Custom Orders", "About", "Contact"].map((item) => (
                  <a key={item} href="#" className="transition hover:text-[#B8860B]">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[rgba(184,134,11,0.82)]">Contact</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(250,250,250,0.72)]">
                <a href="#" className="inline-flex items-center gap-2 transition hover:text-[#B8860B]">
                  <WhatsAppIcon className="h-4 w-4 text-[#B8860B]" />
                  WhatsApp Concierge
                </a>
                <a href="#" className="transition hover:text-[#B8860B]">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl border-t border-[rgba(184,134,11,0.12)] pt-6 text-sm text-[rgba(250,250,250,0.48)]">
            © 2026 Omisa Jewellery
          </div>
        </footer>
      </div>
    </div>
  );
}
