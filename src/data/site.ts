export const site = {
  name: 'Zemprolabs',
  url: 'https://zemprolabs.com',
  tagline: 'We build, grow and run digital businesses.',
  description:
    'Zemprolabs builds websites, apps and online stores, grows them with SEO and ads, and keeps them running. For businesses in the US, India, UK and GCC.',
  email: 'info@zemprolabs.com',
  phones: [
    { label: 'Primary', display: '+91 744 755 7577', tel: '+917447557577', whatsapp: 'https://wa.me/917447557577' },
    { label: 'Secondary', display: '+91 744 755 7599', tel: '+917447557599', whatsapp: 'https://wa.me/917447557599' },
  ],
  address: {
    street: '6th Floor, Ehtesham Heights, Golden Heights Colony',
    locality: 'Upperpally',
    city: 'Hyderabad',
    region: 'Telangana',
    country: 'India',
    countryCode: 'IN',
  },
  markets: ['United States', 'India', 'United Kingdom', 'GCC'],
  // Get a free key at https://web3forms.com (use the inbox that should receive enquiries)
  // and set PUBLIC_WEB3FORMS_KEY in Vercel → Project → Settings → Environment Variables.
  formKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
];
