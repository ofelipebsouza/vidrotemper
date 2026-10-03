import { siteUrl } from "@/lib/site-url";
import { PhosphorIcon, Stars } from "@/components/phosphor-icon";
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "VidroTemper | Vidraçaria em Santos", template: "%s | VidroTemper" },
  description: "Box de vidro, espelhos, vidro temperado, portas e manutenção em Santos, SP. Fale com a VidroTemper pelo WhatsApp e solicite uma avaliação.",
  applicationName: "VidroTemper",
  keywords: ["vidraçaria em Santos", "box de vidro Santos", "espelhos sob medida Santos", "vidro temperado Santos", "manutenção de vidros Santos"],
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "VidroTemper", title: "VidroTemper | Vidraçaria em Santos", description: "Soluções em vidro para ambientes residenciais e comerciais em Santos." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const business = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "VidroTemper",
    image: `${siteUrl}/images/vidrotemper-hero.webp`,
    telephone: "+55 13 98102-8101",
    address: { "@type": "PostalAddress", streetAddress: "Avenida Doutor Pedro Lessa, 578", addressLocality: "Santos", addressRegion: "SP", postalCode: "11025-000", addressCountry: "BR" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", ratingCount: "13", bestRating: "5", worstRating: "1" },
    areaServed: ["Santos", "São Vicente", "Praia Grande", "Guarujá"].map((name) => ({ "@type": "City", name })),
    url: siteUrl,
    priceRange: "$$",
    sameAs: ["https://share.google/sFcAfVwApf2M1fmzg"],
  };
  return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"VidroTemper",url:siteUrl,logo:`${siteUrl}/images/vidrotemper-symbol.png`,telephone:"+55 13 98102-8101",address:business.address,sameAs:business.sameAs})}}/><SiteHeader />{children}<SiteFooter /><a className="whatsapp-float" href="https://wa.me/5513981028101?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20VidroTemper%20e%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noreferrer" aria-label="Falar com a VidroTemper pelo WhatsApp"><PhosphorIcon name="whatsapp-logo" size={24}/><b>WhatsApp</b></a></body></html>;
}
