export const siteConfig = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "PT. Nusantara Pasifik Nasional",
  nameShort: process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME ?? "Nusantara Pasifik",
  whatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP ?? "+628116200964",
  whatsappDisplay: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_DISPLAY ?? "+62 811-6200-964",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? "info@nusantarapasifiknasional.com",
  address:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS ??
    "Jalan Makmur No.88T, Komplek Cemara Asri, Medan Estate, Percut Sei Tuan, Kab Deli Serdang, Sumatera Utara",
};

export const whatsappDigits = siteConfig.whatsapp.replace(/[^\d]/g, "");
export const whatsappHref = `https://wa.me/${whatsappDigits}`;

export function whatsappHrefWithMessage(message: string) {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}
