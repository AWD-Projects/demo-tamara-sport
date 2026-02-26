# Tamara Sport — Landing Page

Landing page single-page para Tamara Sport, marca mexicana de ropa deportiva D2C con base en Veracruz, México.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- **Heroicons** (iconografía mínima)

## Ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

El servidor se ejecuta en [http://localhost:3000](http://localhost:3000)

## Estructura de secciones

1. **Navbar** — Navegación sticky con logo, links y CTA a Instagram
2. **Hero** — Headline principal con CTAs y placeholder editorial
3. **Propuesta de valor** — 5 atributos técnicos + elemento editorial "Gym era"
4. **Colección** — Grid de productos con tabs (Mujer/Hombre/Sets)
5. **Producto destacado** — Lumen Set con detalles, colores y tallas
6. **Mix & Match** — Combinaciones de outfit visuales
7. **Sobre Tamara** — Historia y propósito de la marca
8. **CTA Final** — Llamado a acción con WhatsApp e Instagram
9. **Footer** — Minimalista con logo, redes y copyright

## Sistema de diseño

### Paleta de colores

```css
--white: #FFFFFF
--black: #111111
--beige: #F2EDE6
--teal: #4A7B8C
--olive: #5C6B3A
--burgundy: #6B2D3E
```

### Tipografía

- **Barlow Condensed** (700) — Headings, taglines, wordmark
- **Inter** (400, 500) — Párrafos, descripciones
- **Playfair Display** (700 italic) — Frases editoriales

### Animaciones

Todas las secciones usan Framer Motion con el patrón:

```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: "easeOut" }}
viewport={{ once: true }}
```

## Características implementadas

✓ Diseño responsive mobile-first
✓ Navegación suave entre secciones
✓ Tabs de categoría en colección
✓ Animaciones sutiles con Framer Motion
✓ Placeholders de imagen con colores según categoría
✓ CTAs a Instagram DM y WhatsApp (con placeholder)
✓ Hamburger menu limpio en mobile
✓ Sin imágenes externas ni stock photos
✓ Sticky navbar
✓ Footer minimalista con "Powered by Amoxtli®"
✓ SEO optimizado (metadata, Open Graph, Twitter Cards)
✓ Favicon personalizado
✓ Sitemap y robots.txt automáticos
✓ Schema.org JSON-LD para datos estructurados

## SEO

El proyecto incluye optimización SEO completa:

- **Metadata completa**: Títulos, descripciones, keywords
- **Open Graph**: Optimizado para Facebook y otras plataformas
- **Twitter Cards**: Optimizado para compartir en Twitter/X
- **Favicon**: Icon.svg con las iniciales de Tamara Sport
- **Sitemap**: Generado automáticamente en `/sitemap.xml`
- **Robots.txt**: Configurado para permitir indexación
- **Schema.org**: Datos estructurados JSON-LD para SEO
- **Canonical URLs**: URLs correctamente estructuradas

### Imagen Open Graph

Para que el sitio se vea correctamente al compartirse en redes sociales, es necesario agregar una imagen Open Graph:

- **Ubicación**: `/public/og-image.jpg`
- **Dimensiones**: 1200 x 630 px
- **Formato**: JPG o PNG

Ver `/public/og-image-info.txt` para más detalles sobre el diseño de esta imagen.

### Verificación de Google

Actualizar el código de verificación en `app/layout.tsx`:

```tsx
verification: {
  google: "google-site-verification-code", // Reemplazar con código real
},
```

## Configuración importante

### WhatsApp

El número de WhatsApp es un placeholder:

```tsx
const whatsappLink = `https://wa.me/52XXXXXXXXXX?text=${whatsappMessage}`;
```

**Reemplazar `52XXXXXXXXXX`** con el número real de Tamara Sport en formato internacional.

### Instagram

El handle de Instagram está configurado:

```tsx
const instagramLink = "https://instagram.com/tamara.sport.veracruz";
```

## Restricciones cumplidas

- ✓ No se usaron imágenes externas ni stock photos
- ✓ No se inventaron precios
- ✓ No se inventó número de WhatsApp real
- ✓ No se usó estética de fast fashion ni lujo aspiracional
- ✓ Copy natural, directo, en segunda persona singular (tú)
- ✓ Frases cortas con ritmo vivo
- ✓ Single-page, sin rutas adicionales
- ✓ Todos los componentes en un solo archivo `page.tsx`
- ✓ Tailwind CSS con fuentes personalizadas de Google Fonts
- ✓ Sin dependencias pesadas adicionales

## Customización

Para modificar los productos mostrados, editar el componente `ProductCard` dentro de cada categoría en el archivo `app/page.tsx`.

Para ajustar colores, tipografía o espaciado, modificar `app/globals.css` y las clases de Tailwind en los componentes.

## Deploy

Este proyecto está listo para deploy en Vercel:

```bash
vercel --prod
```

O cualquier plataforma compatible con Next.js (Netlify, Railway, etc.)

---

**© 2025 Tamara Sport. Todos los derechos reservados.**
# demo-boom-fit-studio
