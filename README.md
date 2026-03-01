# ReactBlueprints

ReactBlueprints is an opinionated collection of reusable components, layouts, and full pages for building modern React applications quickly and consistently.

It is designed for real-world apps, not demos.

## Core Features

- Prebuilt reusable UI components using shadcn/ui
- Fully composed pages such as authentication, dashboards, and settings
- Ready-to-use layouts for common application flows
- Client-side routing with React Router
- Icon system powered by Lucide Icons
- Tailwind CSS for styling with sensible defaults
- Accessible components and patterns by default
- Clean separation between UI primitives and app-level components
- Designed to be copied and adapted, not installed as a dependency.

## Design Philosophy

- Opinionated by default to reduce decision fatigue
- Pages are first-class, not just components
- Favor composition over heavy abstraction
- Optimize for readability and maintainability
- Encourage copying code instead of hiding logic behind libraries
- Built for internal tools, dashboards, and SaaS-style applications

This repository prioritizes speed and clarity over flexibility.

## Intended Use Cases

- Bootstrapping new React applications
- Internal dashboards and admin panels
- SaaS products and MVPs
- Projects that want consistent UI patterns without reinventing them

## Requirements

Before using this repository, you should be comfortable with:

- React fundamentals
- Functional components and hooks
- Basic Tailwind CSS usage
- Client-side routing concepts

### Technical Requirements

- Node.js 18 or newer
- React 18+
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide Icons

The stack is intentionally fixed. Swapping core tools is possible but not the primary goal.

## How to Use

- Clone the repository
- Copy components, pages, or layouts into your project
- Adapt styles, logic, and structure as needed
- Remove anything you don’t need

This is a blueprint, not a framework.

## Customization Expectations

You are expected to:
- Modify styles and tokens
- Adjust routing and layouts
- Extend or delete existing pages
- Make it your own

Nothing here is meant to be used blindly.

## Non-Goals

- Providing a publishable npm package
- Supporting every UI framework or router
- Abstracting away application logic
- Acting as a full design system

## License

MIT
