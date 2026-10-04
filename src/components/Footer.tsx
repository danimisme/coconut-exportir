import Image from "next/image";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

const NAV_ITEMS = [
  { label: "About Us", href: "#tentang-kami" },
  { label: "Products", href: "#produk" },
  { label: "Why Us", href: "#keunggulan" },
  { label: "Export Journey", href: "#alur-ekspor" },
  { label: "Contact", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-mid border-t border-forest-light/60 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image src="/logo.png" alt={siteConfig.nameShort} width={36} height={36} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-display text-cream font-semibold text-sm">{siteConfig.nameShort}</div>
                <div className="text-gold text-[9px] tracking-[0.22em] uppercase font-body">Internasional</div>
              </div>
            </div>
            <p className="text-cream-dim font-body text-sm leading-relaxed">
              A trusted De Husked & Semi Husked Coconut exporter from North Sumatra. Premium
              quality, professional shipping.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-cream-dim font-body text-sm hover:text-cream transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-cream-dim font-body text-sm">
              <li>{siteConfig.name}</li>
              <li>📍 {siteConfig.address}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream-dim transition-colors">
                  📧 {siteConfig.email}
                </a>
              </li>
              <li className="mt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-light text-cream font-medium text-xs hover:bg-gold hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-light/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-dim font-body text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-cream-dim font-body text-xs">
            De Husked & Semi Husked Coconut Exporter — North Sumatra, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
