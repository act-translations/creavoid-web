# Creavoid Website - Product Requirements Document

## 1. Project Overview

### Vision
Build a state-of-the-art, modern corporate website for **Creavoid** - an Online Marketing & AI Agency using a **Headless Architecture**.

### Core Goals
- Premium, responsive design matching the Creavoid brand identity
- High-performance web application with modern UI effects
- Seamless content management through headless CMS

---

## 2. Technical Architecture

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Next.js 15+ (App Router) | High-performance React application |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework |
| **Icons** | lucide-react | Modern icon library |
| **Animations** | Framer Motion | Smooth animations & transitions |
| **Backend Content** | WordPress (Headless) | Blog CMS via GraphQL |
| **Backend Commerce** | WooCommerce (Headless) | Store/Shop functionality |
| **Deployment** | Vercel | Automated CI/CD pipeline |
| **Repository** | GitHub (act-translations/creavoid-web) | Version control via SSH |

---

## 3. Brand Identity (CI)

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary (Teal)** | `#29A0B1` | Buttons, links, accents, icons |
| **Secondary (Coral)** | `#FF6B6B` | Highlights, CTAs, emphasis |
| **Text Black** | `#000000` | Body text, headings |

### Typography

| Type | Font | Source |
|------|------|--------|
| **Headings** | Roboto Slab | next/font |
| **Body** | Inter | next/font |

---

## 4. Localization

| Priority | Language | Status |
|----------|----------|--------|
| **Primary** | English | In development |
| **Secondary** | German | Planned |

Full multi-language support with language toggle functionality.

---

## 5. Design Principles

### Theme Strategy

| Phase | Focus | Description |
|-------|-------|-------------|
| **Phase 1** | Light Mode | Complete website design in light theme first |
| **Phase 2** | Dark Mode | Implement dark theme for entire website after light mode is finalized |

> [!IMPORTANT]
> Dark Mode applies to the **entire website**, not individual components.

### UI Effects (Inspiriert von React Bits)

| Element | Effect | Notes |
|---------|--------|-------|
| **Header/Navigation** | Glass Surface | Frosted glass effect for menu bar (works in both modes) |
| **Hero Section** | Aurora OR Hyperspeed | Test individually, choose one |
| **Feature Cards** | Spotlight Card | Only if visually pleasing in Light Mode |

> [!NOTE]
> Effects can be implemented via CSS/Tailwind or custom components. React Bits serves as reference only.

---

## 6. Website Structure & Navigation

### Main Categories

```
├── AI & Automation Services
├── Digital Marketing Services
├── Development Services
├── Consultation & Strategy
└── Analytics & Data Services
```

### Detailed Navigation Structure

#### 1. AI & Automation Services

**AI Consulting**
- AI Strategy Development
- AI Readiness Assessment
- Use Case Identification

**AI Implementation**
- AI Integration
- Custom AI Solutions
- AI Model Training

**AI Process Automation**
- Workflow Automation
- RPA (Robotic Process Automation)
- AI-Powered Business Intelligence

**AI Agents**
- Chatbots & Virtual Assistants
- Customer Service Agents
- Sales & Marketing Agents

**Marketing Automation**
- CRM Integration
- Lead Nurturing Workflows
- Customer Journey Automation
- Trigger-Based Campaigns
- Scoring & Segmentation
- Multi-Channel Automation

---

#### 2. Digital Marketing Services

**SEO (Search Engine Optimization)**
- Technical SEO
- OnPage SEO
- OffPage SEO
- Local SEO
- E-Commerce SEO

**SEA (Search Engine Advertising)**
- Google Ads
- Microsoft Ads
- Shopping Ads

**Content Marketing**
- Content Strategy
- Blog Management
- Video Content
- Infographics & Visual Content
- SEO Content Writing
- Whitepapers & E-Books

**Email Marketing**
- Email Campaign Management
- Newsletter Design & Development
- Marketing Automation Emails
- Segmentation & Personalization
- A/B Testing

**Social Media Marketing (SMM)**
- Social Media Management
- Content Creation
- Community Management
- Paid Social Advertising

**Affiliate Marketing**
- Affiliate Strategy Development
- Affiliate Network Management
- Content Marketing for Affiliates
- Performance Tracking

---

#### 3. Development Services

**Web Development**
- Full-Stack Development
- Frontend Development
- Backend Development
- E-Commerce Development
- Progressive Web Apps (PWA)

**Web Design**
- UI/UX Design
- Website Design
- Landing Page Design
- Mobile-First Design
- Conversion Rate Optimization (CRO)

**XaaS Development**
- SaaS Development
- AIaaS (AI as a Service)
- Analytics as a Service
- API Development
- Cloud Solutions

---

#### 4. Consultation & Strategy

**Digital Strategy Consulting**
- Business Analysis & Goals Definition
- Digital Transformation Roadmap
- Competitive Analysis
- Market Research

**Business & Technology Consulting**
- AI for Business Strategy
- Online Business Development
- Automation & Productivity Consulting
- Digital Business Models
- Technology Stack Consulting
- Process Optimization
- Workflow Design

---

#### 5. Analytics & Data Services

**Web Analytics**
- Google Analytics 4 Setup & Management
- Custom Dashboard Creation
- Conversion Tracking
- User Behavior Analysis

**Marketing Analytics**
- Cross-Channel Attribution
- ROI Analysis
- Campaign Performance Tracking
- Marketing Automation Analytics

**Technical Monitoring**
- Google Search Console Management
- Microsoft Bing Webmaster Tools
- Website Performance Monitoring
- SEO Monitoring & Reporting

---

## 7. Page Structure

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| Services Overview | `/services` | ✅ Complete |
| Service Detail | `/services/[slug]` | ✅ 19 pages |
| Blog Index | `/blog` | ✅ WordPress GraphQL |
| Blog Post | `/blog/[slug]` | ✅ WordPress GraphQL |
| Store | `/store` | 🔄 Pending (WooCommerce) |

---

## 8. Component Architecture

### Layout Components
- `Header` - Navigation with Glass Surface effect
- `MegaMenu` - Dropdown navigation (5 categories)
- `Footer` - Contact & social links
- `ServicePageLayout` - Template for service detail pages

### UI Components
- `HeroAnimation` - Dynamic hero section with Aurora/Hyperspeed
- `FeatureCards` - 3 main feature cards (Web/SaaS, AI, Ads)
- `ServiceTabs` - Service category tabs
- `SpotlightCard` - Interactive card with cursor-following spotlight

---

## 9. Roadmap

### Completed ✅
- [x] Project scaffolding (Next.js 15+)
- [x] CI color configuration
- [x] Typography setup
- [x] Homepage structure
- [x] MegaMenu implementation
- [x] 19 Service detail pages
- [x] Blog integration (WordPress GraphQL)
- [x] Git & Vercel deployment

### In Progress 🔄
- [ ] Glass Surface header effect
- [ ] Hero animation (Aurora vs Hyperspeed testing)
- [ ] Feature card effects (Spotlight)
- [ ] English as primary language

### Planned 📋
- [ ] Domain connection (creavoid.com)
- [ ] WooCommerce integration
- [ ] Dark Mode (entire website)
- [ ] German language toggle
- [ ] Service page content expansion

---

*Last Updated: 2025-12-25*
