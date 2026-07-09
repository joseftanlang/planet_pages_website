@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 40 33% 98%;
    --foreground: 211 54% 23%;
    --card: 40 33% 98%;
    --card-foreground: 211 54% 23%;
    --popover: 40 33% 98%;
    --popover-foreground: 211 54% 23%;
    --primary: 211 54% 23%;
    --primary-foreground: 40 33% 98%;
    --secondary: 205 39% 39%;
    --secondary-foreground: 40 33% 98%;
    --muted: 210 16% 93%;
    --muted-foreground: 205 30% 45%;
    --accent: 154 82% 30%;
    --accent-foreground: 40 33% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 205 25% 80%;
    --input: 205 25% 80%;
    --ring: 154 82% 30%;
    --chart-1: 154 82% 30%;
    --chart-2: 205 39% 39%;
    --chart-3: 211 54% 23%;
    --chart-4: 199 70% 55%;
    --chart-5: 154 50% 60%;
    --radius: 0.5rem;
    --font-heading: 'Fraunces', Georgia, 'Times New Roman', serif;
    --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    --sidebar-background: 210 20% 96%;
    --sidebar-foreground: 211 54% 23%;
    --sidebar-primary: 211 54% 23%;
    --sidebar-primary-foreground: 40 33% 98%;
    --sidebar-accent: 205 25% 90%;
    --sidebar-accent-foreground: 211 54% 23%;
    --sidebar-border: 205 25% 80%;
    --sidebar-ring: 154 82% 30%;
  }

  .dark {
    --background: 211 40% 12%;
    --foreground: 40 33% 96%;
    --card: 211 40% 12%;
    --card-foreground: 40 33% 96%;
    --popover: 211 40% 12%;
    --popover-foreground: 40 33% 96%;
    --primary: 199 70% 65%;
    --primary-foreground: 211 54% 15%;
    --secondary: 205 30% 30%;
    --secondary-foreground: 40 33% 96%;
    --muted: 211 30% 20%;
    --muted-foreground: 205 20% 65%;
    --accent: 154 60% 45%;
    --accent-foreground: 40 33% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 205 25% 25%;
    --input: 205 25% 25%;
    --ring: 154 60% 45%;
    --chart-1: 154 60% 45%;
    --chart-2: 199 70% 55%;
    --chart-3: 211 54% 40%;
    --chart-4: 154 40% 55%;
    --chart-5: 199 50% 65%;
    --sidebar-background: 211 40% 10%;
    --sidebar-foreground: 40 33% 90%;
    --sidebar-primary: 199 70% 55%;
    --sidebar-primary-foreground: 40 33% 100%;
    --sidebar-accent: 211 30% 18%;
    --sidebar-accent-foreground: 40 33% 90%;
    --sidebar-border: 211 30% 18%;
    --sidebar-ring: 154 60% 45%;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground font-body;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    line-height: 1.2;
  }
}

/* Smooth scroll with reduced-motion respect */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Focus states for accessibility */
*:focus-visible {
  outline: 3px solid #0E8A57;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Weave pattern background */
.weave-bg {
  background-image: url('https://media.base44.com/images/public/6a4f119cb0e4023a4c028f3f/4499c893b_generated_fa912e77.png');
  background-size: 400px;
  background-repeat: repeat;
  background-blend-mode: overlay;
}