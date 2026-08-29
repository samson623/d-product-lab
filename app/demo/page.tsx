import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { getProduct } from "../products";

export default async function DemoPage({ searchParams }: { searchParams: Promise<{ app?: string }> }) {
  const { app } = await searchParams;
  const product = getProduct(app);
  return (
    <main className="demo-page">
      <header className="demo-bar">
        <Link href="/#products" className="demo-back"><ArrowLeft /> Product library</Link>
        <div className="demo-identity"><span>WORKING DEMO</span><strong>{product.name}</strong></div>
        <a href={`/apps/${product.file}`} target="_blank" rel="noreferrer" className="demo-new-tab">Open full screen <ExternalLink /></a>
      </header>
      <div className="demo-notice">Interactive prototype. External purchasing and production accounts are not connected.</div>
      <iframe className="demo-frame" src={`/apps/${product.file}`} title={`${product.name} interactive demo`} allow="clipboard-write" />
    </main>
  );
}
