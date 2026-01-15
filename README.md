# Artificial Intelligence Proliferation: A Multi-Perspective Analysis

An academic website examining the global crisis of AI development and deployment through three distinct theoretical lenses.

## Overview

This project presents an analysis of artificial intelligence as a contemporary global issue, exploring its implications through:

- **Home/Introduction** - Framing AI as a structural shift in power, labor, and governance
- **Marxist/Neo-Gramscian Perspective** - Class-based analysis of AI's role in capitalist dynamics
- **Realist/Liberalist Perspective** - Power competition and institutional cooperation frameworks

## Project Structure

```
├── index.html              # Home page
├── marxist.html            # Marxist perspective page
├── realist.html            # Realist perspective page
├── style.css               # Unified styling
├── js/
│   ├── renderPage.js       # Core rendering utility
│   └── pages/
│       ├── home.js         # Home page configuration
│       ├── marxist.js      # Marxist page configuration
│       └── realist.js      # Realist page configuration
├── content/
│   ├── home/
│   │   ├── intro.txt       # Introduction to AI crisis
│   │   └── history.txt     # Brief history of AI development
│   ├── marxist/
│   │   ├── intro.txt       # Marxist perspective introduction
│   │   └── body.txt        # Detailed Marxist analysis
│   └── realist/
│       ├── intro.txt       # Realist perspective introduction
│       └── body.txt        # Detailed Realist analysis
└── images/
    ├── douglas-county-servers.jpg
    ├── texas-data-center.jpg
    ├── Karl_Marx.png
    ├── gramsci.jpg
    ├── globe.jpg
    └── US-China.webp
```

## Technical Implementation

### Technologies
- HTML5 semantic structure
- CSS3 Flexbox for responsive layouts
- Vanilla JavaScript (ES6 modules)
- Asynchronous content loading via Fetch API

### Architecture
The site uses a template-based rendering system:
1. HTML pages provide empty slots with specific IDs
2. Page-specific JS modules define configuration (titles, content paths, images)
3. `renderPage.js` fetches content files and populates the DOM
4. Text files are automatically converted to formatted HTML paragraphs

### Key Features
- **Modular Design** - Shared rendering logic with separated content
- **Separation of Concerns** - Content stored in `.txt` files, separate from templates
- **Responsive Layout** - Flexbox-based design adapts to screen sizes
- **Accessible** - Images include alt text and title attributes

## Content Summary

### Home Page
Introduces AI as a crisis affecting labor, governance, environment, and geopolitics. Includes a brief history from the 1956 Dartmouth conference through ChatGPT's 2022 release.

### Marxist/Neo-Gramscian Analysis
Examines how AI intensifies class struggles through:
- Exploitative global supply chains
- Labor displacement and deskilling
- Capital concentration in private corporations
- Hegemonic structures legitimizing elite interests

### Realist/Liberalist Analysis
Combines two frameworks:
- **Realist**: AI as strategic enabler in great power competition, military applications, security concerns
- **Liberal**: International cooperation through OECD, UNESCO, EU governance efforts and shared ethical norms

## Running Locally

Since the site uses ES6 modules and fetches content files, it requires a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Design

- **Typography**: Libre Baskerville (serif) for academic aesthetic
- **Color Scheme**: Dark blue-gray headers (#111827), off-white content (#f9fafb), orange accents (#c2410c)
- **Layout**: Header navigation, two-column hero sections, full-width content areas, footer

### Responsive Design & Media Queries

The site includes CSS media queries to ensure proper display across different devices:

#### Tablet and Smaller (max-width: 900px)
- Reduced padding throughout header and containers
- Header navigation stacks vertically with centered text
- Hero section switches to single-column layout
- Title section expands to full width
- Image boxes scale to container width with minimum 280px
- Content section padding reduced for better mobile spacing
- Footer navigation gaps reduced from 100px to 40px

#### Mobile Phones (max-width: 600px)
- Typography scales down: h1 from 48px to 32px, h2 from 24px to 20px
- Body and intro text reduced to 16px for readability
- Further padding reductions across all sections
- Navigation links stack vertically with 10px gaps
- Images maintain 200px minimum height with cover fit
- Footer links stack vertically with compact spacing


