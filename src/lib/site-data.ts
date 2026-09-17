import commercialImage from "@/assets/demo-commercial.jpg";
import residentialImage from "@/assets/demo-residential.jpg";
import industrialImage from "@/assets/demo-industrial.jpg";

export const navigation = [
  { label: "Home", to: "/" }, { label: "About", to: "/about" },
  { label: "Auction Process", to: "/auction-process" }, { label: "Services", to: "/services" },
  { label: "Institutional Partners", to: "/partners" }, { label: "Track Record", to: "/track-record" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: "5,000+", label: "Auctions Conducted" },
  { value: "₹10,000+ Cr", label: "Value Realised" },
  { value: "20+ Years", label: "Domain Experience" },
  { value: "7", label: "Institutional Partners" },
];

export const services = [
  { title: "Asset Quality & Auction Readiness", text: "Asset quality enhancement and auction readiness for secured properties.", icon: "FileCheck2" },
  { title: "Market Outreach", text: "Advertising, digital listings and market outreach to maximise buyer reach.", icon: "Megaphone" },
  { title: "End-to-End Auction Management", text: "Planning, execution and compliance across the complete auction lifecycle.", icon: "Gavel" },
  { title: "Buyer Discovery & Verification", text: "Buyer discovery, verification and coordination through an active buyer network.", icon: "UserCheck" },
  { title: "Bid Management & Value Realisation", text: "Structured bid management, sale confirmation and maximum value realisation.", icon: "TrendingUp" },
  { title: "Proceeds & Settlement Support", text: "Proceeds tracking, reconciliation and account settlement support.", icon: "Landmark" },
];

export const journey = [
  { title: "Valuation & Pre-Auction Readiness", text: "Independent valuation support, title & documentation checks, and reserve-price benchmarking on the bank's secured property." },
  { title: "Auction Planning & Execution", text: "End-to-end auction planning — notice drafting, statutory publication, timelines and process design aligned to SARFAESI / DRT norms." },
  { title: "Market Outreach & Buyer Discovery", text: "Wide marketing campaigns, digital listing on bankNilami.com, and buyer network activation to maximise footfall and genuine bids." },
  { title: "Bid Management & Transparent Bidding", text: "Structured bid management, e-auction / physical auction support, and fair, auditable bidding for every stakeholder." },
  { title: "Sale Confirmation & Buyer Coordination", text: "Confirmation of sale, buyer documentation support and coordination for timely completion of the transaction." },
  { title: "Realisation, Proceeds & Account Settlement", text: "Proceeds tracking, reconciliation, MIS & realisation reporting, and account settlement support back to the bank." },
];

export const partners = [
  { name: "State Bank of India", type: "Public Sector Bank", mark: "SBI" },
  { name: "Indian Bank", type: "Public Sector Bank", mark: "IB" },
  { name: "Shriram Finance", type: "NBFC", mark: "SF" },
  { name: "Moneyplus Co-operative Bank", type: "Co-operative Bank", mark: "M+" },
  { name: "AU Small Finance Bank", type: "Small Finance Bank", mark: "AU" },
  { name: "Rajasthan Urban Co-operative Bank", type: "Co-operative Bank", mark: "RU" },
  { name: "PNB Housing Finance", type: "HFC", mark: "PH" },
];

export const reasons = [
  ["Transparent Auctions", "Wide marketing, verified buyers, fair bidding and clear documentation."],
  ["Faster Realisation", "Proven processes and an active buyer network reduce time-to-sale."],
  ["Complete Visibility", "Real-time MIS, dashboards and reporting across the auction lifecycle."],
  ["Compliance Assured", "Every auction is conducted within SARFAESI / regulatory requirements."],
  ["Dedicated Point of Contact", "Dedicated single point of contact for each partner institution."],
  ["Value Protection", "Structured execution focused on protecting asset value and driving competitive bidding."],
];

export type Auction = { id: string; title: string; type: string; city: string; state: string; location: string; reserve: string; reserveValue: number; date: string; institution: string; emd: string; possession: string; image: string; description: string };
export const auctions: Auction[] = [
  { id: "demo-commercial-ahmedabad", title: "Commercial Office Premises", type: "Commercial", city: "Ahmedabad", state: "Gujarat", location: "Ahmedabad, Gujarat", reserve: "₹2.40 Cr", reserveValue: 240, date: "18 October 2026", institution: "Demo Institution A", emd: "₹24.00 Lakh", possession: "Symbolic", image: commercialImage, description: "Sample commercial premises presented solely to demonstrate the future auction detail experience." },
  { id: "demo-residential-jaipur", title: "Residential Apartment", type: "Residential", city: "Jaipur", state: "Rajasthan", location: "Jaipur, Rajasthan", reserve: "₹78.00 Lakh", reserveValue: 78, date: "24 October 2026", institution: "Demo Institution B", emd: "₹7.80 Lakh", possession: "Physical", image: residentialImage, description: "Sample residential property presented solely to demonstrate the future auction detail experience." },
  { id: "demo-industrial-hyderabad", title: "Industrial Warehouse", type: "Industrial", city: "Hyderabad", state: "Telangana", location: "Hyderabad, Telangana", reserve: "₹4.85 Cr", reserveValue: 485, date: "04 November 2026", institution: "Demo Institution C", emd: "₹48.50 Lakh", possession: "Symbolic", image: industrialImage, description: "Sample industrial property presented solely to demonstrate the future auction detail experience." },
];

export const offices = ["Mumbai", "Jaipur", "Gurgaon", "Ahmedabad", "Hyderabad"];