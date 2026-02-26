'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  CheckIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'mujer' | 'hombre' | 'sets'>('mujer');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hola, me interesa el Lumen Set de Tamara Sport");
  const whatsappLink = `https://wa.me/52XXXXXXXXXX?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/tamara.sport.veracruz";

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="font-barlow-condensed font-bold text-2xl md:text-3xl uppercase tracking-tight">
              TAMARA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('coleccion')}
                className="text-sm font-medium tracking-wide hover:text-[#4A7B8C] transition-colors"
              >
                Colección
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-sm font-medium tracking-wide hover:text-[#4A7B8C] transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-sm font-medium tracking-wide hover:text-[#4A7B8C] transition-colors"
              >
                Contacto
              </button>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] text-white rounded-lg px-5 py-2 hover:bg-[#333333] transition-colors text-sm font-medium tracking-wide"
              >
                Comprar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-100">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('coleccion')}
                  className="text-left text-sm font-medium tracking-wide"
                >
                  Colección
                </button>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-left text-sm font-medium tracking-wide"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-left text-sm font-medium tracking-wide"
                >
                  Contacto
                </button>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white rounded-lg px-5 py-2.5 hover:bg-[#333333] transition-colors text-sm font-medium tracking-wide text-center"
                >
                  Comprar
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#F2EDE6] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <h1 className="font-barlow-condensed font-bold uppercase tracking-tight text-6xl md:text-8xl lg:text-9xl leading-[0.9]">
                ENTRENA<br />
                FUERTE.<br />
                VISTE<br />
                TAMARA.
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 max-w-md">
                Ropa deportiva mexicana. Calidad como las marcas grandes, sin el precio elevado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('coleccion')}
                  className="bg-[#111111] text-white rounded-lg px-6 py-3 hover:bg-[#333333] transition-colors text-sm font-medium tracking-wide"
                >
                  Ver colección
                </button>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#111111] text-[#111111] rounded-lg px-6 py-3 hover:bg-[#111111] hover:text-white transition-colors text-sm font-medium tracking-wide text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Comprar por Instagram
                </a>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="order-first md:order-last"
            >
              <div className="bg-[#D6CFC5] rounded-xl aspect-[3/4] flex items-center justify-center">
                <p className="text-neutral-600 text-sm font-inter">Tamara Sport · Lumen Set</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
            <p className="text-[#4A7B8C] text-xs uppercase tracking-[0.2em] font-medium">
              HECHO EN MÉXICO
            </p>
            <h2 className="font-barlow-condensed font-bold text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
              Calidad real.<br />Precio honesto.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-12">
            {[
              { title: 'Transpirable', desc: 'Diseño que permite flujo de aire constante' },
              { title: 'Seca rápido', desc: 'Tecnología de absorción y evaporación rápida' },
              { title: 'Se adapta al cuerpo', desc: 'Corte ergonómico que acompaña tu movimiento' },
              { title: 'Alta elasticidad', desc: 'Flexibilidad total para cualquier ejercicio' },
              { title: 'Confort extremo', desc: 'Sensación suave en contacto con la piel' },
            ].map((attr, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                className="space-y-2"
              >
                <h3 className="font-medium text-[#111111]">{attr.title}</h3>
                <p className="text-sm text-neutral-600">{attr.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="bg-[#111111] text-white p-8 md:p-12 rounded-xl max-w-md mx-auto text-center"
          >
            <p className="font-playfair-display text-3xl md:text-4xl">
              Gym era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Colección */}
      <section id="coleccion" className="bg-[#F2EDE6] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="font-barlow-condensed font-bold text-5xl md:text-6xl uppercase tracking-tight mb-8">
              LA COLECCIÓN
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <motion.div {...fadeInUp} className="flex gap-4 mb-12 border-b border-neutral-300 pb-4">
            {(['mujer', 'hombre', 'sets'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm font-medium tracking-wide uppercase pb-2 transition-colors ${
                  selectedCategory === cat
                    ? 'border-b-2 border-[#111111] text-[#111111]'
                    : 'text-neutral-500 hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCategory === 'mujer' && (
              <>
                <ProductCard
                  name="Lumen Set"
                  category="Set completo"
                  bgColor="#C8D8DC"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Top deportivo"
                  category="Top"
                  bgColor="#C8D8DC"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Mallas"
                  category="Bottom"
                  bgColor="#C8D8DC"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Short"
                  category="Bottom"
                  bgColor="#C8D8DC"
                  available={true}
                  link={whatsappLink}
                />
              </>
            )}

            {selectedCategory === 'hombre' && (
              <>
                <ProductCard
                  name="Lumen Set"
                  category="Set completo"
                  bgColor="#C8C8B8"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Playera técnica"
                  category="Top"
                  bgColor="#C8C8B8"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Short deportivo"
                  category="Bottom"
                  bgColor="#C8C8B8"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Pants"
                  category="Bottom"
                  bgColor="#C8C8B8"
                  available={true}
                  link={whatsappLink}
                />
              </>
            )}

            {selectedCategory === 'sets' && (
              <>
                <ProductCard
                  name="Lumen Set"
                  category="Mujer"
                  bgColor="#D6C0C6"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Lumen Set"
                  category="Hombre"
                  bgColor="#D6C0C6"
                  available={true}
                  link={whatsappLink}
                />
                <ProductCard
                  name="Set coordinado"
                  category="Unisex"
                  bgColor="#D6C0C6"
                  available={true}
                  link={whatsappLink}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Producto Destacado - Lumen Set */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="bg-[#4A7B8C] rounded-xl aspect-[3/4] flex items-center justify-center">
                <p className="text-white text-base font-medium">Lumen Set</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-block bg-[#4A7B8C] text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
                DESTACADO
              </div>

              <h2 className="font-barlow-condensed font-bold text-5xl md:text-6xl uppercase tracking-tight">
                LUMEN SET
              </h2>

              <p className="text-lg text-neutral-700">
                Diseñado para entrenar con constancia. Transpirable, de secado rápido y con la elasticidad que necesitas para moverte sin límites.
              </p>

              <div className="space-y-3">
                {[
                  'Tejido de alto rendimiento',
                  'Diseño ergonómico',
                  'Acabados sin costuras',
                  'Compresión ligera'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-[#5C6B3A]" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-neutral-800">Colores disponibles</p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4A7B8C] border-2 border-neutral-200"></div>
                  <div className="w-10 h-10 rounded-full bg-[#111111] border-2 border-neutral-200"></div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-neutral-800">Tallas</p>
                <div className="flex gap-3">
                  {['S', 'M', 'L'].map((size) => (
                    <div key={size} className="w-12 h-12 border border-neutral-300 rounded-lg flex items-center justify-center font-medium text-sm hover:border-[#111111] transition-colors cursor-pointer">
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#111111] text-white rounded-lg px-6 py-3 hover:bg-[#333333] transition-colors text-sm font-medium tracking-wide"
              >
                Pedir por WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mix & Match */}
      <section className="bg-[#F2EDE6] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
            <h2 className="font-playfair-display text-4xl md:text-5xl">
              Mix & match.
            </h2>
            <p className="text-lg text-neutral-700">
              Combina las piezas. Construye tu outfit de entrenamiento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Set clásico', colors: 'Negro completo', bg1: '#111111', bg2: '#111111' },
              { name: 'Combinado teal', colors: 'Teal + Negro', bg1: '#4A7B8C', bg2: '#111111' },
              { name: 'Set teal', colors: 'Teal completo', bg1: '#4A7B8C', bg2: '#4A7B8C' },
            ].map((combo, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="flex gap-2 h-64 rounded-xl overflow-hidden">
                  <div style={{ backgroundColor: combo.bg1 }} className="flex-1 flex items-center justify-center">
                    <p className="text-white text-sm">Top</p>
                  </div>
                  <div style={{ backgroundColor: combo.bg2 }} className="flex-1 flex items-center justify-center">
                    <p className="text-white text-sm">Bottom</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-neutral-800">{combo.name}</p>
                  <p className="text-sm text-neutral-600">{combo.colors}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Tamara */}
      <section id="nosotros" className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="font-barlow-condensed font-bold text-5xl md:text-6xl uppercase tracking-tight">
              SOMOS TAMARA
            </h2>
            <div className="w-24 h-1 bg-[#4A7B8C] mx-auto"></div>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Tamara Sport nació en Veracruz con una idea simple: que entrenar bien no debería costar una fortuna. Hacemos ropa deportiva pensada para quien se mueve de verdad — con materiales que respiran, se adaptan y aguantan. Marca mexicana, hecha con orgullo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="bg-[#111111] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="font-barlow-condensed font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight">
              ¿LISTA PARA<br />ENTRENAR?
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
              Escríbenos directo. Te asesoramos y te enviamos a donde estés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#111111] rounded-lg px-6 py-3 hover:bg-neutral-200 transition-colors text-sm font-medium tracking-wide"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white rounded-lg px-6 py-3 hover:bg-white hover:text-[#111111] transition-colors text-sm font-medium tracking-wide"
              >
                Ver en Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-neutral-400 py-12 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-barlow-condensed font-bold text-2xl uppercase tracking-tight text-white">
              TAMARA
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @tamara.sport.veracruz
              </a>
              <span>Veracruz, México</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm space-y-2">
            <p>© 2025 Tamara Sport. Todos los derechos reservados.</p>
            <p className="flex items-center justify-center gap-1.5 text-neutral-500">
              Powered by{' '}
              <a
                href="https://www.amoxtli.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-0.5"
              >
                Amoxtli
                <span className="text-[10px] align-super">®</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({
  name,
  category,
  bgColor,
  available,
  link
}: {
  name: string;
  category: string;
  bgColor: string;
  available: boolean;
  link: string;
}) {
  return (
    <motion.div
      {...fadeInUp}
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="rounded-xl aspect-[3/4] flex items-center justify-center mb-3 overflow-hidden"
      >
        <p className="text-neutral-600 text-sm font-medium">{name}</p>
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-neutral-800">{name}</h3>
        <p className="text-sm text-neutral-600">{category}</p>
        {available && (
          <span className="inline-block text-xs text-[#5C6B3A] font-medium">
            Disponible
          </span>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-sm font-medium text-[#111111] hover:text-[#4A7B8C] transition-colors"
        >
          Consultar →
        </a>
      </div>
    </motion.div>
  );
}
