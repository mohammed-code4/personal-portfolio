import { Card } from "@/components/shared/Card";
import type { Certification } from "@/data/portfolio";
import { Button } from "../shared/Button";
import Image from "next/image";

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Card variant="subtle" className="flex items-start justify-between gap-4">
      <div className="space-y-3">
        {cert.image && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src={cert.image ?? ""}
              alt={`${cert.title} certificate`}
              width={"100"}
              height={"100"}
              className="h-40 w-full rounded-md  object-cover"
            />
          </a>
        )}
        <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
        <p className="text-base flex gap-1 items-center text-text-secondary">
          {cert.issuer}
          <span className="shrink-0 rounded-full bg-surface-hover border border-border px-2.5 py-1 text-xs font-medium text-text-secondary">
            {cert.date}
          </span>
        </p>
        {cert.credentialUrl && (
          <Button variant="outline">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              Verify Credential &rarr;
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}
