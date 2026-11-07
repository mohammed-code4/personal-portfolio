import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolio";

import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: PERSONAL_INFO.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "Explore my projects",
    href: PERSONAL_INFO.github,
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    value: "Find me on WhatsApp",
    href: `https://wa.me/${PERSONAL_INFO.whatsapp}`,
    icon: FaWhatsapp,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-20">
      <Container>
        <SectionHeader
          title="Get In Touch"
          description="Feel free to reach out through any of these platforms."
        />

        <div className="grid max-w-3xl justify-center items-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-inner"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Icon />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">
                    {contact.label}
                  </h3>

                  <p className="mt-1 break-all text-sm text-text-secondary">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
