export interface Leader {
  name: string;
  role: string;
  initials: string;
  accentColor: string;
}

export const company = {
  name: 'Zemprolabs',
  legalName: 'Zemprolabs',
  tagline: 'Technology, Commerce & Beyond',
  positioning: 'Qualified Engineers. Trusted Technology.',
  positioningSub:
    'Zemprolabs brings together qualified engineers and technology professionals to design, build, maintain and manage digital solutions for businesses.',
  email: 'info@zemprolabs.com',
  emailHref: 'mailto:info@zemprolabs.com',
  // Primary Phone & WhatsApp: +91 744 755 7577
  phone: '+91 744 755 7577',
  phoneHref: 'tel:+917447557577',
  phoneSecondary: '+91 744 755 7599',
  phoneSecondaryHref: 'tel:+917447557599',
  whatsapp: '+91 744 755 7577',
  whatsappHref: 'https://wa.me/917447557577',
  whatsappSecondary: '+91 744 755 7599',
  whatsappSecondaryHref: 'https://wa.me/917447557599',
  phones: [
    { display: '+91 744 755 7577', href: 'tel:+917447557577', whatsappHref: 'https://wa.me/917447557577', label: 'Primary', isPrimary: true },
    { display: '+91 744 755 7599', href: 'tel:+917447557599', whatsappHref: 'https://wa.me/917447557599', label: 'Secondary', isPrimary: false }
  ],
  address: {
    line1: '6th Floor, Ehtesham Heights',
    line2: 'Golden Heights Colony',
    line3: 'Upperpally, Hyderabad',
    full: '6th Floor, Ehtesham Heights, Golden Heights Colony, Upperpally, Hyderabad',
    city: 'Hyderabad',
    country: 'India'
  },
  recruitment: {
    role: 'Recruitment Practice',
    description:
      'International talent sourcing, healthcare recruitment, candidate screening, and credentialing support.'
  },
  // Public leadership presentation removed per HR instruction ("No leaders")
  leadership: [] as Leader[]
};

// Aliases for compatibility
export const companyInfo = company;
export const founders: Leader[] = company.leadership;

