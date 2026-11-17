 
# Project Development Guidelines

You are working on a Personal Portfolio project. Follow these rules throughout the entire development process.

## 1. Keep the Code Simple

- Write code at a Junior Developer level or simpler.
- Prefer simple, readable, and straightforward solutions over advanced or complicated implementations.
- Do not over-engineer anything.
- Avoid unnecessary abstractions, design patterns, and complex architectures.
- Do not use advanced techniques unless they are genuinely necessary.
- Prefer code that is easy to understand, maintain, and modify.
- If a task can be solved with a simple solution, do not introduce a more complicated one.

## 2. File Organization

- Split the project into small, focused, and reusable files whenever possible.
- Each file should have one clear responsibility.
- Avoid putting too much code or multiple unrelated components in a single file.
- Keep components small and easy to understand.
- Move static data, constants, configuration, and repeated content into separate files.
- Separate UI components, data, types, hooks, and utility functions when appropriate.
- Use clear and descriptive file and folder names.
- Avoid creating unnecessary files just for the sake of splitting code.

## 3. Component Guidelines

- Build small, reusable React components.
- Each component should handle one specific responsibility.
- Avoid large components that contain multiple sections or too much logic.
- Extract repeated UI into shared components.
- Keep component props simple and easy to understand.
- Avoid unnecessary prop drilling solutions or state management libraries.
- Do not create reusable components for one-time UI elements unless there is a clear benefit.

## 4. Code Readability

- Use meaningful and descriptive variable, function, and component names.
- Keep functions short and focused.
- Avoid deeply nested conditions and unnecessary logic.
- Add comments only when the code is not self-explanatory.
- Follow consistent formatting and naming conventions.
- Use TypeScript properly.
- Avoid using `any` unless absolutely necessary.
- Avoid unnecessary type complexity.

## 5. Package and Dependency Management

**IMPORTANT: Always inspect `package.json` before making any code changes or adding dependencies.**

- Read and understand the existing `package.json` before starting implementation.
- Check which libraries and packages are already installed.
- Prefer using existing dependencies instead of introducing new ones.
- Never install, uninstall, update, or replace any package without asking for my explicit approval first.
- If you need a new library or believe a library would make the implementation easier, stop and inform me before installing it.
- Explain:
  1. The library name.
  2. Why it is needed.
  3. What functionality it will provide.
  4. Whether the same functionality can be implemented using existing tools.
- Wait for my approval before proceeding with installation.
- Do not modify dependency versions or package configurations without permission.
- Avoid adding dependencies for simple functionality that can be implemented with the existing stack.

## 6. Maintainability

- Make the project easy for another Junior Front-End Developer to understand.
- Keep static content and project information separate from UI components.
- Avoid duplicating code when a small reusable component can solve the problem.
- Make future updates easy without changing multiple unrelated files.
- Follow the existing project structure and conventions whenever possible.
- Keep the codebase organized and consistent.

## 7. Development Workflow

Before implementing any task:

1. Inspect the project structure.
2. Read `package.json` and understand the installed dependencies.
3. Inspect the relevant existing files and components.
4. Understand the current implementation before modifying it.
5. Plan the simplest implementation that satisfies the requirements.

During implementation:

- Reuse existing components and utilities when appropriate.
- Do not rewrite working code without a valid reason.
- Make changes incrementally and keep each implementation focused.
- Avoid modifying unrelated files.
- Do not introduce unrequested features.
- Ask for approval before installing any new dependency.

After implementation:

- Check for TypeScript errors.
- Check linting issues if a lint script is available.
- Run the build command if available.
- Fix issues introduced by your changes.
- Report which files were created or modified.
- Briefly explain what was implemented.

## 8. Avoid Unnecessary Complexity

- Do not introduce state management libraries unless the project genuinely needs them.
- Do not create custom hooks for trivial logic.
- Do not create utility functions for simple one-line operations unless they improve readability or reuse.
- Do not add unnecessary providers, contexts, wrappers, or configuration files.
- Do not use complicated patterns when a basic React component is sufficient.
- Do not optimize prematurely.

## 9. Accuracy and Honesty

- Never invent personal information, project details, contributions, skills, or experience.
- Use only information provided by me or verified from the relevant project sources.
- Do not assume that a feature exists without checking.
- If something is unclear, ask me before making assumptions.
- Do not claim that something works without verifying it.
- Never silently skip a requirement.

## 10. Communication Rules

- If you encounter a decision that affects project architecture, dependencies, or existing functionality, explain it before proceeding.
- Ask questions when requirements are unclear.
- Do not make important decisions on my behalf without informing me.
- Keep explanations clear and understandable.
- After completing a task, summarize the changes and explain important implementation decisions.

---

## Main Principles

1. Simplicity over cleverness.
2. Readability over fewer lines of code.
3. Small and focused files over large files.
4. Reusability without unnecessary abstraction.
5. Existing dependencies over installing new ones.
6. Ask for permission before changing dependencies.
7. Understand existing code before modifying it.
8. Never invent information or implement unrequested features.

**Main Goal:** Build a clean, responsive, maintainable Personal Portfolio using simple code and a clear file structure that a Junior Front-End Developer can easily understand, maintain, and extend.