import { useState } from 'react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import { profile } from '../data/site';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Contato pelo site — ${name || 'Olá'}`,
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section className="w-full">
      <SEO
        title="Contato — Darlei M. Schmegel"
        description="Fale com Darlei M. Schmegel — oportunidades de engenharia de software, projetos SaaS e parcerias técnicas."
        path="/contact"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-20 lg:pb-28 lg:pt-12">
        <ContactSection />

        <div className="mt-16 border-t border-edge-light pt-16 dark:border-edge-dark">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-light">
            Ou escreva direto daqui
          </h2>
          <form
            className="mt-8 max-w-xl space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-wider text-ink-muted dark:text-ink-muted-dark"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block w-full rounded-sm border border-edge-light bg-transparent px-3 py-2.5 text-base text-ink-primary placeholder:text-ink-muted/60 focus:border-accent-light dark:border-edge-dark dark:text-ink-light dark:placeholder:text-ink-muted-dark/60 dark:focus:border-accent"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-wider text-ink-muted dark:text-ink-muted-dark"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 block w-full rounded-sm border border-edge-light bg-transparent px-3 py-2.5 text-base text-ink-primary placeholder:text-ink-muted/60 focus:border-accent-light dark:border-edge-dark dark:text-ink-light dark:placeholder:text-ink-muted-dark/60 dark:focus:border-accent"
                placeholder="Sobre o que vamos conversar?"
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light/90 active:bg-accent-light/80 dark:bg-accent dark:text-ground-dark dark:hover:bg-accent/90 dark:active:bg-accent/80"
            >
              Enviar por e-mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
