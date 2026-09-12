import { siteConfig, whatsappHref } from "@/lib/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

const NAV_ITEMS = [
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Alur Ekspor", href: "#proses" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060f08] border-t border-forest-light/60 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-forest font-display font-bold">
                N
              </div>
              <div>
                <div className="font-display text-cream font-semibold text-sm">{siteConfig.nameShort}</div>
                <div className="text-gold text-[9px] tracking-[0.22em] uppercase font-body">Nasional</div>
              </div>
            </div>
            <p className="text-cream-dim/60 font-body text-sm leading-relaxed">
              Eksportir Semi Husked Coconut terpercaya dari {siteConfig.address}. Kualitas
              premium, pengiriman profesional.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-cream-dim/60 font-body text-sm hover:text-cream-dim transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Kontak
            </h4>
            <ul className="space-y-3 text-cream-dim/60 font-body text-sm">
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-light text-gold font-medium text-xs hover:bg-leaf transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-light/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-dim/40 font-body text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Hak cipta dilindungi.
          </p>
          <p className="text-cream-dim/30 font-body text-xs">
            Semi Husked Coconut Exporter — {siteConfig.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
