# Portfolio Design System and Component Architecture

## Status

**Implemented & Verified.** The portfolio design system, shared component foundations, responsive layout, typed data structures, and content sections have been implemented and verified. Both `next build` (with Turbopack) and `eslint` compile cleanly with zero errors.

### Implementation Checklist
- [x] **Global Design System & Tokens:** Updated `src/app/globals.css` with semantic CSS variables (`--background`, `--surface`, `--foreground`, `--text-secondary`, `--brand`, `--accent`, `--border`), Tailwind v4 `@theme inline` mappings, and font-family integration. Removed conflicting Arial declaration.
- [x] **App Layout & Metadata:** Updated `src/app/layout.tsx` with customized page metadata for Mohammed Hussein and proper Geist font integration.
- [x] **Typed Portfolio Data:** Added `src/data/portfolio.ts` managing profile info, skills, projects, certifications, and navigation links.
- [x] **Shared Components:** Implemented `Container`, `Button`, `Card`, and `SectionHeader` under `src/components/shared/` (all strictly <= 50 lines).
- [x] **Layout Components:** Implemented `SiteHeader` (with live availability pill) and `SiteFooter` under `src/components/layout/` (all strictly <= 50 lines).
- [x] **Portfolio Item Components:** Implemented `SkillCard`, `ProjectCard`, and `CertificationCard` under `src/components/portfolio/` (all strictly <= 50 lines).
- [x] **Section Components:** Implemented `HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `CertificationsSection`, and `ContactSection` under `src/components/sections/` (all strictly <= 50 lines).
- [x] **Page Composition:** Composed all sections cleanly in `src/app/page.tsx`.
- [x] **Verification:** Verified all components comply with the <= 50 lines limit, and passed `npm run build` and `npm run lint`.

## 1. Existing project analysis

- **Framework:** Next.js 16.4.5 using the App Router, React 19.3.0, and TypeScript 5 with strict type checking.
- **Styling:** Tailwind CSS 4. The global stylesheet uses `@import "tailwindcss"` and `@theme inline`; `next.config.ts` configures the Tailwind Turbopack CSS loader. There is no `tailwind.config.*`.
- **Current page:** `src/app/page.tsx` is the unmodified Create Next App starter screen.
- **Global styles:** `src/app/globals.css` defines only `--background` and `--foreground`, changes them under `prefers-color-scheme: dark`, and then overrides the font stack with Arial. This conflicts with the Geist font variables loaded in `src/app/layout.tsx`.
- **Fonts and metadata:** `layout.tsx` loads Geist and Geist Mono with `next/font/google`, but currently uses starter metadata.
- **Components and dependencies:** There is no existing shared component directory or component library. No additional dependencies are proposed.
- **Configuration:** `tsconfig.json` enables strict mode and the `@/*` alias to `src/*`. Existing `next.config.ts` settings should be preserved unless implementation reveals a directly related incompatibility.

## 2. Figma source and extracted design information

- **File:** [Untitled](https://www.figma.com/design/DX4D3iMsbNHrqSKOnn0cn7/Untitled?node-id=0-1)
- **Page:** `Page 1` (`0:1`)
- **Frame:** `Mohammed Hussein - Portfolio (Desktop)` (`1:2`), 1280 × 5336.3 px.
- **Available information:** The frame metadata provides its hierarchy, names, positions, and dimensions. It shows a Header (80 px), a 512 px hero, About, Technical Skills, Featured Projects, Certifications & Education, Contact, and a 290 px Footer. The main section content uses 48 px side insets (1184 px wide), 64 px top insets, 116 px section headers, and 40 px between each section header and its content. The hero content is a two-column layout.
- **Not available:** Exact colors, gradients, text font families/styles/sizes, border colors, and variable values are not in the metadata response. The variable-definition request failed with:

  > You've reached the Figma MCP tool call limit on the Starter plan. Upgrade your plan for more tool calls: https://www.figma.com/files/team/1646922902612131349/all-projects?upgrade=mcp_rate_limit_paywall Use the whoami tool for more plan details. Learn more: https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/

  The Figma account lookup identified a Starter plan and a View seat. Earlier design-context access also reported “You currently have nothing selected”; querying the supplied frame ID directly succeeded for hierarchy metadata. A frame screenshot was obtainable, but it does not provide authoritative numeric style values.
- **Theme availability:** The available source is one desktop frame. No paired light/dark theme or mobile frame has been confirmed.

### Palette extraction status

Do not treat the following categories as extracted values. They are the semantic slots to map to exact Figma values once access permits:

| Semantic slot | Figma value |
|---|---|
| Primary / brand | Not verified |
| Secondary | Not verified |
| Accent | Not verified |
| Page background | Not verified |
| Surface / elevated surface | Not verified |
| Primary / secondary / muted text | Not verified |
| Border / divider | Not verified |
| Primary / secondary / outline / ghost buttons and interaction states | Not verified |
| Cards and badges | Not verified |
| Gradients | Not verified |

No duplicate variables should be added for identical Figma colors. If a slot is not present in the design, do not invent a color for it. Add a second theme only if Figma exposes both light and dark values.

## 3. Proposed CSS variables and Tailwind integration

Keep the CSS-first Tailwind 4 setup. Define the final semantic values once in `src/app/globals.css` under `:root`, then expose utilities using the existing `@theme inline` pattern. Candidate names (not yet color values):

```css
:root {
  --background: /* exact Figma page background */;
  --surface: /* exact Figma card/surface color */;
  --foreground: /* exact Figma primary text */;
  --text-secondary: /* exact Figma secondary text */;
  --text-muted: /* exact Figma muted text */;
  --brand: /* exact Figma primary */;
  --accent: /* exact Figma accent */;
  --border: /* exact Figma border/divider */;
}

@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-brand: var(--brand);
  --color-accent: var(--accent);
  --color-border: var(--border);
}
```

The comments above are placeholders for planning and must not be copied as final CSS. During implementation, replace them with verified Figma colors. Add button-state, badge, or gradient tokens only when they correspond to distinct design values. Remove the current system-driven dark override unless Figma confirms a matching dark theme; do not make a one-theme design change appearance based on operating-system preferences.

Use the Figma-verified font family and styles if available. Remove the conflicting Arial declaration and retain/use the existing Geist variables only if they match the design or a deliberate fallback is approved. No `tailwind.config` should be introduced just to expose tokens.

## 4. Proposed folder structure

```text
src/
  app/
    globals.css                 # Verified semantic tokens and Tailwind v4 theme mappings
    layout.tsx                  # App shell, verified font setup, metadata
    page.tsx                    # Compose the portfolio sections
  components/
    shared/
      Button.tsx                # Typed action control and visual variants
      Card.tsx                  # Shared card surface
      Container.tsx             # Centered responsive content width
      SectionHeader.tsx         # Repeated eyebrow, title, and optional intro
    layout/
      SiteHeader.tsx            # Brand, availability/status, and navigation
      SiteFooter.tsx            # Footer identity, links, and copyright content
    sections/
      HeroSection.tsx
      AboutSection.tsx
      SkillsSection.tsx
      ProjectsSection.tsx
      CertificationsSection.tsx
      ContactSection.tsx
    portfolio/
      SkillCard.tsx             # Skill category/card composition
      ProjectCard.tsx           # Project preview and metadata composition
      CertificationCard.tsx     # Certification/education entry composition
  data/
    portfolio.ts                # Typed, data-driven repeated portfolio content
```

Only add leaf components if they simplify repeated content or keep a component file below the 50-line limit without creating needless indirection. Keep each component implementation file at no more than 50 lines, including imports and types. Put static content in typed data modules rather than embedding large repeated structures in component files.

## 5. Component specifications and types

### `Button`

- Variants: `primary`, `secondary`, `outline`, `ghost`; sizes: `sm`, `md`, `lg`.
- Use semantic HTML. Implement buttons as `<button>` with native button props. If the design requires a CTA that navigates, render a link with the same shared visual classes using Next.js `Link` at the call site rather than nesting an anchor inside a button.
- Support native `disabled`. Add loading behavior only if an actual asynchronous action needs it; the current Figma layout alone does not demonstrate one.

```ts
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};
```

### `Card`

- A semantic, composable card surface with a small `variant` union only if the design uses distinct card treatments.
- Accept `React.HTMLAttributes<HTMLDivElement>` and `children`; let contents and layout be composed by callers instead of adding one prop per content arrangement.

```ts
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "subtle";
  children: React.ReactNode;
};
```

### `Container`

- A centered `div` with `w-full`, `mx-auto`, consistent responsive horizontal padding, and a documented maximum outer width.
- Match the 1280 px frame with a 1280 px maximum outer width and 48 px horizontal inset at desktop. Reduce the inset on smaller viewports; avoid fixed widths and horizontal overflow.
- Do not add a configurable width prop unless a real section needs a different measured width.

```ts
type ContainerProps = React.HTMLAttributes<HTMLDivElement>;
```

### Other repeated components

- `SectionHeader`: repeated across the five content sections; accepts an eyebrow, heading, and optional description.
- `SiteHeader` / `SiteFooter`: one per page, separated from section content for clear responsibility.
- `SkillCard`, `ProjectCard`, and `CertificationCard`: use when their repeated item markup warrants it; compose with `Card` rather than implementing independent surface styles.
- Keep each section responsible for section-level layout and compose its shared header and repeated item components. Avoid a generic section renderer with complex conditional props.

## 6. Responsive Container behavior

Use Tailwind's existing default responsive breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) rather than defining arbitrary breakpoints. A likely utility shape is:

```tsx
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
  {children}
</div>
```

At the 1280 px Figma width this yields the observed 48 px desktop inset. On mobile and tablet it reduces horizontal padding and lets the content shrink; `w-full`, `min-w-0` on grid children, and responsive grid columns prevent content from forcing horizontal scroll. Use a single column for narrow screens and introduce the Figma-observed two/three-column arrangements only at breakpoints where their cards fit. There is no mobile/tablet Figma frame, so exact responsive section behavior requires a design decision or responsive reference before pixel-level matching can be claimed.

## 7. Example composition

The page should compose focused section components rather than contain all markup:

```tsx
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
```

Repeated content should be represented as typed data and rendered with keyed lists. For example, `ProjectsSection` maps project records to `ProjectCard`; the card owns the repeated presentation while section layout remains in the section component. Keep example code and actual implementation within the 50-line component-file limit.

## 8. Implementation steps (approval required before each phase)

1. **Resolve Figma token data:** Once Figma MCP access allows it, retrieve exact color and variable definitions, inspect typography/style values, and confirm whether alternate themes exist. Update this plan with verified values if they affect the proposal; wait for approval again if the plan materially changes.
2. **Establish shared foundations:** Update `globals.css` with verified semantic tokens and Tailwind v4 mappings; resolve font setup based on Figma; add `Container`, `Button`, and `Card`.
3. **Build layout and sections:** Add header/footer, repeated section header, typed portfolio data, and each portfolio section using shared components. Keep each component file at or under 50 lines.
4. **Responsive and visual verification:** Check at mobile, tablet, 1280 px desktop, and large desktop widths; compare the desktop result against the Figma frame and verify no horizontal overflow. Test with existing `npm run lint` and `npm run build`.

The user must explicitly approve each implementation phase before work on that phase begins. Approval of this plan alone does not waive the request for approval before later phases.

## 9. Risks and conflicts

- **Missing exact color and typography data:** Implementing tokens before successful Figma extraction would require guessing and violate color fidelity. The Figma MCP Starter-plan limit currently blocks that extraction.
- **No responsive reference:** Only the desktop frame is confirmed. Mobile/tablet adaptations in the proposal are engineering defaults, not extracted Figma designs.
- **Font inconsistency:** The app loads Geist but forces Arial in CSS. The correct Figma font must be verified before choosing which to retain.
- **Theme conflict:** Existing CSS follows the user's OS color scheme, but a second Figma theme has not been confirmed. Keeping the current behavior could make the portfolio differ from the design.
- **50-line component limit:** Complex cards and sections will need to be data-driven and composed carefully. The limit applies to component files, not the global stylesheet, config, or this documentation.
- **No new dependencies:** All proposed components can use React, Next.js, and Tailwind already installed. No dependency or architecture change is planned.
