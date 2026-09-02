"use client";

import { ArrowDownRight, ArrowUpRight, Check, Copy, Layers3, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, categories } from "./products";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const visible = category === "All" ? products : products.filter((product) => (product.categories as readonly string[]).includes(category));

  async function copyBrief() {
    const brief = ["PROJECT BRIEF FOR D", "", "The workflow or problem:", "Who deals with it:", "What it costs in time, money, or missed opportunity:", "What a successful tool should make easier:", "Any deadline or constraint:"].join("\n");
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.prompt("Copy this project brief:", brief);
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="D Product Lab home"><span className="brand-mark">D</span><span>D Product Lab</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work with D</a>
        </nav>
        <Button asChild className="header-cta"><a href="#products">Explore products <ArrowDownRight /></a></Button>
        <button className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles /> Practical AI. Serious product thinking.</p>
          <h1>Turning expensive business friction into useful software.</h1>
          <p className="hero-lede">D builds focused products for the work people still handle with guesswork, spreadsheets, follow-up notes, and too many browser tabs.</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="primary-button"><a href="#products">View the product lab <ArrowDownRight /></a></Button>
            <Button asChild size="lg" variant="outline" className="secondary-button"><a href="#work">Bring D a problem</a></Button>
          </div>
          <p className="truth-note">Working prototypes. Honest demo states. No invented customers or traction.</p>
        </div>
        <div className="hero-system" aria-label="Product lab focus areas">
          <div className="signal-top"><span>PRODUCT SYSTEM / 01</span><span className="live-dot"><i /> ACTIVE LAB</span></div>
          <div className="system-core"><div className="core-number">14</div><div><strong>interactive products</strong><span>built around measurable business friction</span></div></div>
          <div className="system-list"><span><i>01</i> Protect margin</span><span><i>02</i> Reduce admin</span><span><i>03</i> Clarify decisions</span><span><i>04</i> Ship faster</span></div>
          <div className="system-footer"><span>AI + SOFTWARE + DESIGN</span><Layers3 /></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Portfolio principles"><span>Local-first where privacy matters</span><span>Demo-ready workflows</span><span>Clear commercial paths</span><span>Built to be extended</span></section>

      <section className="products-section" id="products">
        <div className="section-heading"><div><p className="eyebrow">Current product library</p><h2>Explore the work.</h2></div><p>Every product below opens into a real interactive demo. Data stays in your browser unless a demo clearly says it relies on an external service.</p></div>
        <Tabs value={category} onValueChange={setCategory} className="product-tabs"><TabsList className="filter-list" aria-label="Filter products by category">{categories.map((item) => <TabsTrigger key={item} value={item} className="filter-trigger">{item}</TabsTrigger>)}</TabsList></Tabs>
        <div className="result-line" aria-live="polite"><span>{String(visible.length).padStart(2, "0")} PRODUCTS</span><span>{category === "All" ? "COMPLETE LIBRARY" : category.toUpperCase()}</span></div>
        <div className="product-grid">
          {visible.map((product, index) => {
            const Icon = product.icon;
            return (
              <article className={`product-card tone-${product.tone}`} key={product.slug}>
                <div className="product-visual"><span className="product-index">P{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><span className="visual-word">{product.signal}</span></div>
                <div className="product-body">
                  <div className="product-meta"><span>{product.categories[0]}</span><span>{product.status}</span></div>
                  <h3>{product.name}</h3><p className="product-value">{product.value}</p>
                  <div className="product-detail"><span>Built for</span><p>{product.audience}</p></div>
                  <div className="product-detail"><span>Commercial path</span><p>{product.model}</p></div>
                  <Button asChild variant="outline" className="open-product"><a href={`/demo?app=${product.slug}`} aria-label={`Open ${product.name} demo`}>Open working demo <ArrowUpRight /></a></Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-heading inverse"><div><p className="eyebrow">How D works</p><h2>Start with the costly part.</h2></div><p>The point is not to add AI everywhere. It is to find the part of a workflow that wastes time, hides risk, or delays revenue—and make that part easier.</p></div>
        <div className="approach-grid"><article><span>01</span><h3>Find the friction</h3><p>Identify the repeated decision, handoff, or document that keeps costing the business.</p></article><article><span>02</span><h3>Build the smallest proof</h3><p>Turn the core workflow into something people can click, test, and judge on real usefulness.</p></article><article><span>03</span><h3>Design the business around it</h3><p>Choose a credible path—subscription, internal tool, licensed product, or client-specific deployment.</p></article></div>
      </section>

      <section className="work-section" id="work">
        <div className="work-copy"><p className="eyebrow">Work with D</p><h2>What is your team still doing the hard way?</h2><p>Bring the repetitive, confusing, expensive, or frustrating workflow. D can help shape it into a focused software product, an internal tool, or a client-ready prototype.</p></div>
        <div className="work-card"><p className="work-label">A useful first message includes:</p><ul><li><Check /> The workflow that keeps slowing people down</li><li><Check /> Who deals with it and how often</li><li><Check /> What a better outcome would save or unlock</li></ul><Button size="lg" onClick={copyBrief} className="primary-button copy-button"><Copy /> {copied ? "Brief copied" : "Copy a ready project brief"}</Button><p className="contact-note">Send it through the same contact channel that brought you this portfolio.</p></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">D</span><span>D Product Lab</span></a><p>Practical products for real business problems.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
