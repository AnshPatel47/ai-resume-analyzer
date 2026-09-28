# 📄 AI Resume Analyzer

> An AI-powered full-stack application that analyzes resumes against target job descriptions, providing instant match scoring, missing keyword detection, and actionable resume optimization suggestions.

![GitHub repo size](https://img.shields.io/github/repo-size/AnshPatel47/ai-resume-analyzer?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4-000000?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=flat-square&logo=prisma&logoColor=white)
![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=flat-square&logo=google)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)

---

## 📌 Overview

**AI Resume Analyzer** solves a common problem in job hunting: understanding how closely a candidate's resume matches a job description before applying. 

The application allows users to upload a PDF resume, extracts the text content, and passes both the resume and target job description to **Google Gemini AI**. The AI processes the documents and returns structured, actionable insights including:

- 📊 **Match Score (0-100%)**: Quantitative score indicating alignment with the role.
- 🔎 **Missing Keywords & Skills**: Key technical and soft skills highlighted in the job description but absent from the resume.
- 💡 **Actionable Suggestions**: Specific bullet-point improvements to optimize resume bullet points and formatting.

---

## ✨ Key Features

- 🔐 **Authentication & Security**: User registration and login using `bcrypt` password hashing and secure HTTP-Only JWT cookies.
- 📄 **PDF Text Extraction**: Automatic text extraction from uploaded PDF resumes using `pdf-parse`.
- ☁️ **Cloud Storage**: Resume PDFs uploaded and safely stored on Cloudinary with secure URLs saved in PostgreSQL.
- 🤖 **AI-Powered Insights**: Real-time integration with Google Gemini (`gemini-3.1-flash-lite`) returning structured JSON output.
- 🛡️ **Schema Validation**: Backend input validation powered by `Zod`.
- ⚡ **Modern Dynamic Frontend**: Built with Next.js 14 App Router, React 18, and Framer Motion micro-animations.
- 🔄 **Server State & Caching**: Efficient API querying, caching, and state synchronization using TanStack React Query v5.
- 🌓 **Dark & Light Mode**: Built-in dark/light mode toggle powered by `next-themes`.
- 🔔 **Interactive UI**: Toast notifications via `Sonner` and UI components inspired by `shadcn/ui` and Radix UI.

---

## 🧠 How It Works

```mermaid
flowchart TD
    A[🔑 User Registers / Logs In] --> B[📄 Upload PDF Resume]
    B --> C[⚙️ Backend parses PDF text using pdf-parse]
    C --> D[☁️ File uploaded to Cloudinary]
    D --> E[📥 Save Resume record in PostgreSQL via Prisma]
    E --> F[💼 User pastes Job Description]
    F --> G[🤖 Send Resume Text + Job Description to Google Gemini AI]
    G --> H[📊 Gemini returns structured JSON Analysis]
    H --> I[💾 Save Analysis in Database]
    I --> J[📈 Display Match Score, Missing Keywords & Suggestions on Dashboard]
```

---

## 🏗️ Architecture

```text
               ┌──────────────────────────────────────────┐
               │    Next.js 14 Frontend (App Router)      │
               │  React 18 + Tailwind CSS + React Query   │
               └────────────────────┬─────────────────────┘
                                    │
                         HTTP Request / JWT Cookie
                                    │
                                    ▼
               ┌──────────────────────────────────────────┐
               │         Express REST API (Node.js)       │
               │        TypeScript + Zod Validation       │
               └──────┬─────────────────┬───────────┬─────┘
                      │                 │           │
                      ▼                 ▼           ▼
             ┌────────────────┐ ┌──────────────┐ ┌────────────────┐
             │ PostgreSQL DB  │ │ Cloudinary   │ │ Google Gemini  │
             │ (via Prisma)   │ │ (PDF Files)  │ │ (AI Model)     │
             └────────────────┘ └──────────────┘ └────────────────┘
```

### Database Schema (Prisma)

- **User**: Stores authentication credentials, profile details (`id`, `username`, `email`, `password`, `fullName`, `avatar`).
- **Resume**: Links uploaded file details (`id`, `userId`, `fileName`, `fileUrl`, `extractedText`, `createdAt`) to a user.
- **Analysis**: Stores the AI evaluation results (`id`, `resumeId`, `jobDescription`, `matchScore`, `missingKeywords`, `suggestions`, `createdAt`).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router) & React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Framer Motion
- **UI Components**: Radix UI, Shadcn UI primitives, Lucide Icons
- **State & Data Fetching**: TanStack React Query v5 & Axios
- **Notifications & Themes**: Sonner & `next-themes`

### Backend
- **Runtime & Framework**: Node.js & Express
- **Language**: TypeScript
- **Database & ORM**: PostgreSQL & Prisma ORM
- **Validation**: Zod
- **Authentication**: JWT & `cookie-parser`
- **File Processing**: Multer & `pdf-parse`

### External Services
- **AI Engine**: Google Gemini API (`@google/generative-ai`)
- **Cloud File Storage**: Cloudinary SDK

---

## 📁 Repository Structure

```text
AI_resume_analyzer/
├── resume-analyzer-frontend/    # Next.js Frontend Application
│   ├── app/                     # Next.js App Router pages (auth, dashboard, features, how-it-works)
│   ├── components/              # UI components (dashboard, forms, analysis view)
│   ├── hooks/                   # Custom React hooks (auth, upload, analysis)
│   ├── lib/                     # Axios instance & React Query config
│   └── types/                   # TypeScript interfaces & types
├── resume-analyzer-backend/     # Express REST API Backend
│   ├── prisma/                  # Schema & migrations
│   └── src/
│       ├── config/              # Configuration setups
│       ├── controllers/         # API request controllers (auth, resume, analysis)
│       ├── middlewares/         # Auth verification & Multer file upload
│       ├── routes/              # Express API routes
│       ├── services/            # Gemini AI, Cloudinary & PDF parsing services
│       ├── utils/               # JWT token utilities
│       └── validations/         # Zod validation schemas
└── postman/                     # Postman API workspace collection
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher
- **PostgreSQL**: Running locally or hosted (e.g. Supabase, Neon, Railway)
- **Google Gemini API Key**: [Get a Gemini API Key](https://aistudio.google.com/)
- **Cloudinary Account**: [Sign up for Cloudinary](https://cloudinary.com/)

---

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/AnshPatel47/ai-resume-analyzer.git
cd ai-resume-analyzer
```

#### 2. Configure & Start the Backend

```bash
cd resume-analyzer-backend
npm install
```

Create a `.env` file inside `resume-analyzer-backend/`:

```env
PORT=7000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Database Connection
DATABASE_URL="postgresql://username:password@localhost:5432/resume_analyzer?schema=public"

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_in_production

# Cloudinary Setup
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Google Gemini AI Setup
GEMINI_API_KEY=your_google_gemini_api_key
```

Run database migrations & generate Prisma client:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Start the backend server in development mode:

```bash
npm run dev
```

The backend server will run at `http://localhost:7000`.

---

#### 3. Configure & Start the Frontend

Open a new terminal window:

```bash
cd resume-analyzer-frontend
npm install
```

Create a `.env.local` file inside `resume-analyzer-frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:7000/api/v1
```

Start the frontend development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔌 API Reference

Base API Endpoint: `/api/v1`

| Category | Method | Endpoint | Auth | Description |
| :--- | :--- | :--- | :--- | :--- |
| **System** | `GET` | `/health` | Public | Health check endpoint |
| **Auth** | `POST` | `/users/register` | Public | Register a new user account |
| **Auth** | `POST` | `/users/login` | Public | Log in user and receive HTTP-Only cookie |
| **Auth** | `POST` | `/users/logout` | Required | Log out user and clear auth cookie |
| **Auth** | `GET` | `/users/current-user` | Required | Retrieve current authenticated user profile |
| **Resume** | `POST` | `/resumes/upload` | Required | Upload PDF resume (`multipart/form-data`) |
| **Analysis** | `POST` | `/analysis/create` | Required | Submit `{ resumeId, jobDescription }` for AI analysis |
| **Analysis** | `GET` | `/analysis/:id` | Required | Fetch specific analysis by ID |

---

## 🧪 Available Scripts

### Backend (`resume-analyzer-backend`)

- `npm run dev`: Starts the backend server using `ts-node-dev` with live reload.
- `npx prisma studio`: Launches the interactive Prisma Database GUI.
- `npx prisma migrate dev`: Runs database schema migrations.

### Frontend (`resume-analyzer-frontend`)

- `npm run dev`: Starts Next.js development server.
- `npm run build`: Compiles production build.
- `npm run start`: Starts Next.js production server.
- `npm run lint`: Runs Next.js ESLint checks.

---

## 👨‍💻 Developer

**Ansh Patel**

- **GitHub**: [@AnshPatel47](https://github.com/AnshPatel47)
- **LinkedIn**: [Ansh Patel](https://www.linkedin.com/in/ansh-patel-073964285)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

