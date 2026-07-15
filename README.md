## About the project: Planet Pages website
Planet Pages is a non-profit initiative focused on improving educational access for youth in rural ASEAN communities. This repository contains the official website, built with modern web technologies and integrated with the Base44 platform for content management.

## Key features
📚 Educational Mission: Showcase projects in education, infrastructure, and clean water initiatives

🛍️ Merchandise Store: Support the cause through our integrated MergeBooth clothing store

📱 Responsive Design: Seamless experience across all devices

🔄 Base44 Integration: Easy content management and deployment

## Prerequisites
Node.js (Latest LTS version recommended)

npm or yarn package manager

## Installation
Step 1: Clone the respositoty
```
git clone https://github.com/joseftanlang/planet_pages_website.git
cd planet_pages_website
```

Step 2: Install dependecies
```
npm install
```

Step 3: Install Base44 CLI (optional, for full development experience)
```
npm install -g base44@latest
```

Step 4: Development
```
base44 dev
```

Step 5: Open another terminal and run this:
```
npm run dev
```

Step 6:
Create your own .env.local file:
```
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=https://your-app.base44.app
```

Step 7: Project structure
```
planet_pages_website/
├── src/                    # Main source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   └── styles/            # CSS/Tailwind styles
├── base44/                # Base44 configuration
│   └── config.jsonc       # Base44 project settings
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite build configuration
└── README.md             # This file
```

## Deployment
Step 1:
Make sure that all are push and commited to github repository

Step 2:
```
base44 dashboard open
```

Step 3:
Automated deployment


## Support and Documentation
Base44 Documentation: https://docs.base44.com/Integrations/Using-GitHub

Base44 CLI Reference: https://docs.base44.com/developers/references/cli/commands/introduction

Support: https://app.base44.com/support


