import SectionHeading from "@/components/common/section-heading";

export const AboutStory = () => {
  return (
    <div className="space-y-5 text-base leading-7 text-muted-foreground">
      <SectionHeading
        badgeText="About me"
        title="Passionate about building intuitive and performant web apps."
      />

      <p>
        My name is Mohammed Hussein, and I work as a Front-End Developer with a
        strong interest in React, Next.js, and TypeScript. I focus on creating
        responsive interfaces that are easy to understand and pleasant to use.
      </p>

      <p>
        I am a fourth-year Management Information Systems (MIS) student,
        graduating in 2027, and I am actively looking for Front-End Development
        / React internship or junior front-end opportunities.
      </p>

      <p>
        My main interest is building modern user experiences with clean
        structure, strong component thinking, and practical problem solving. I
        enjoy turning design ideas into usable product flows with attention to
        details that improve readability and performance.
      </p>
    </div>
  );
};

export default AboutStory;
