import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, Building2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navigation, offices } from "@/lib/site-data";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" aria-label="bankNilami.com home" className={light ? "text-navy-foreground" : "text-navy"}><span className="display-serif text-2xl font-semibold">bankNilami<span className="text-gold-strong">.com</span></span><span className="block text-[9px] font-semibold uppercase tracking-[0.22em] opacity-70">Auction Information Hub</span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  return <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
    <div className="section-shell flex h-20 items-center justify-between gap-5">
      <Brand />
      <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="text-[12px] font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}</nav>
      <div className="hidden items-center gap-2 md:flex"><Button asChild variant="outline"><Link to="/auctions">Explore Auctions</Link></Button><Button asChild variant="institutional"><Link to="/contact">Partner With Us</Link></Button></div>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="border-t border-border bg-background px-5 py-5 md:hidden"><nav className="grid gap-1">{navigation.map(item => <Link key={item.to} to={item.to} className="border-b border-border py-3 text-sm font-semibold">{item.label}</Link>)}<div className="mt-4 grid grid-cols-2 gap-2"><Button asChild variant="outline"><Link to="/auctions">Auctions</Link></Button><Button asChild variant="institutional"><Link to="/contact">Partner With Us</Link></Button></div></nav></div>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-navy text-navy-foreground"><div className="section-shell grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr]"><div><Brand light /><p className="mt-6 max-w-sm text-sm leading-7 text-navy-foreground/65">Managed by <strong className="text-navy-foreground">Citiline Technologies Private Limited</strong>. Institutional bank property auction services across India.</p></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Quick links</p><div className="grid grid-cols-2 gap-3 text-sm text-navy-foreground/70">{navigation.map(n => <Link key={n.to} to={n.to} className="hover:text-gold">{n.label}</Link>)}<Link to="/auctions">Auctions</Link></div></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact</p><a href="tel:+918094000405" className="block text-lg font-semibold">8094 000 405</a><a href="mailto:info.banknilami@gmail.com" className="mt-2 block text-sm text-navy-foreground/70">info.banknilami@gmail.com</a><p className="mt-5 text-xs leading-6 text-navy-foreground/60">{offices.join("  |  ")}</p></div></div><div className="border-t border-navy-foreground/10"><div className="section-shell flex flex-col gap-4 py-5 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 bankNilami.com. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/disclaimer">Disclaimer</Link></div></div></div></footer>;
}

export function ScrollTop() { const [show,setShow]=useState(false); useEffect(()=>{const fn=()=>setShow(window.scrollY>700); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn)},[]); return show ? <Button size="icon" variant="premium" className="fixed bottom-5 right-5 z-40 shadow-lg" aria-label="Scroll to top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><ArrowUp /></Button> : null; }

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) { return <section className="subtle-grid border-b border-border bg-surface"><div className="section-shell py-20 md:py-28"><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-strong">{eyebrow}</p><h1 className="display-serif max-w-4xl text-5xl font-semibold leading-[1.05] text-navy md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{intro}</p></div></section>; }

export function SectionHeading({ eyebrow, title, intro, light=false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) { return <div className="max-w-3xl"><p className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-gold-strong"}`}>{eyebrow}</p><h2 className={`display-serif text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>{intro && <p className={`mt-5 leading-7 ${light ? "text-navy-foreground/65" : "text-muted-foreground"}`}>{intro}</p>}</div>; }

export function BuildingMark() { return <div className="flex size-12 items-center justify-center rounded-md bg-gold text-navy"><Building2 /></div>; }