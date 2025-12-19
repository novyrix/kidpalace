# Kidpalace Schools Website

A modern, responsive React website for Kidpalace Schools - a group of schools including Grade School and Kindergarten located in Ongata Rongai, Kenya.

## 🏫 About

Kidpalace Schools provides quality education from early childhood through junior secondary school. This website serves as a parent-facing informational platform highlighting academics, admissions, school life, and contact details.

## 🚀 Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Typography:** Poppins (headings) + Inter (body) via @fontsource
- **Database:** SQLite with Prisma ORM

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # School photos organized by category
├── components/
│   ├── layout/          # Header, Footer, MainLayout
│   └── ui/              # Reusable UI components
├── constants/           # Design tokens, navigation, content
├── pages/               # Route pages
│   └── schools/         # School-specific pages
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind

prisma/
├── schema.prisma        # Database schema
├── seed.ts              # Database seeding script
└── migrations/          # Database migrations
```

## 🎨 Design System

### Colors
- **Grade School:** Blue (#1e40af) + Red accent (#dc2626)
- **Kindergarten:** Yellow (#eab308) + Red accent (#dc2626)
- **Neutral:** Gray scale + White backgrounds

### Typography
- **Headings:** Poppins (600-700 weight)
- **Body:** Inter (400-500 weight)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run db:migrate` - Run Prisma migrations
- `npm run db:seed` - Seed the database
- `npm run db:studio` - Open Prisma Studio

## 📄 Pages

1. **Home** - Hero carousel, about snapshot, schools overview, features, news
2. **About** - School history, mission, vision, values, leadership
3. **Schools**
   - Grade School (Grades 1-9)
   - Kindergarten (6 months - 6 years)
4. **Academics** - CBC curriculum, learning areas, assessment
5. **Admissions** - Process, requirements, inquiry form
6. **School Life** - Activities, sports, clubs, events
7. **Gallery** - Photo gallery with category filtering
8. **News** - Latest news and announcements
9. **Contact** - Contact form, location, FAQ

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigable menus
- Proper color contrast ratios
- Alt text on all images

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly buttons and menus
- Collapsible navigation on mobile
- Optimized layouts for all screen sizes

## 📝 License

All Rights Reserved - Kidpalace Schools

---

Built with ❤️ for Kidpalace Schools
