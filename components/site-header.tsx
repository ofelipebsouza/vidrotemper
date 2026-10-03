"use client";
import { PhosphorIcon, Stars } from "@/components/phosphor-icon";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const links = [["Serviços","/servicos"],["Projetos","/projetos"],["Sobre","/sobre"],["Contato","/contato"]];
export function SiteHeader() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/" aria-label="VidroTemper, início"><span className="brand-mark"><Image src="/images/vidrotemper-symbol.png" alt="" width={40} height={34} priority /></span><span className="brand-name">VIDRO<span>TEMPER</span></span></Link><button className="menu-toggle" aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={()=>setOpen(!open)}><PhosphorIcon name={open?"x":"list"} size={26}/></button><nav className={open?"nav open":"nav"} aria-label="Navegação principal">{links.map(([label,url])=><Link key={url} href={url} onClick={()=>setOpen(false)}>{label}</Link>)}<a className="nav-cta" href="https://wa.me/5513981028101?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20VidroTemper." target="_blank" rel="noreferrer">Pedir orçamento <span><PhosphorIcon name="arrow-up-right" size={16}/></span></a></nav></div></header>
}
