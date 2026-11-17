import { profileLinks } from "@/data/profile";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import SectionHeading from "@/components/common/section-heading";
import SocialButton from "@/components/common/social-button";

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20  py-12 md:py-16">
      <div className="rounded-3xl bg-linear-to-br from-primary/10 via-secondary/50 to-backgroundd p-8 text-center sm:p-12">
        <SectionHeading badgeText="Contact" centered={true} />

        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Let&apos;s connect and build something useful together.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          I&apos;m looking for Front-End Development / React internship and
          junior front-end opportunities. Reach out on GitHub or LinkedIn to
          talk about projects, roles, or collaborations.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <SocialButton
            label="LinkedIn"
            variant="default"
            icon={<FaLinkedin className="h-3.5 w-3.5" />}
            href={profileLinks.linkedin}
          />
          <SocialButton
            label="GitHub"
            icon={<FaGithub className="h-3.5 w-3.5" />}
            href={profileLinks.github}
          />
          <SocialButton
            label="Email"
            icon={<HiOutlineMail className="h-4 w-4" />}
            href={`mailto:${profileLinks.email}`}
          />
          <SocialButton
            label="WhatsApp"
            icon={<FaWhatsapp className="h-4 w-4" />}
            href={`https://wa.me/${profileLinks.phone}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
