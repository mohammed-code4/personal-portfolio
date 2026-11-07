import React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CertificationCard } from "@/components/portfolio/CertificationCard";
import { CERTIFICATIONS } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 border-t border-border bg-surface/30"
    >
      <Container>
        <SectionHeader title="Certifications" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </Container>
    </section>
  );
}
