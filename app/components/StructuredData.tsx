export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tamara Sport',
    description: 'Ropa deportiva mexicana. Calidad como las marcas grandes, sin el precio elevado.',
    url: 'https://tamarasport.com',
    logo: 'https://tamarasport.com/icon.svg',
    sameAs: [
      'https://instagram.com/tamara.sport.veracruz'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Veracruz',
      addressCountry: 'MX'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'Spanish'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
