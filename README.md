# AI Resume Analyzer

> An AI-powered full-stack application that compares a resume with a job description and turns the gap into practical, actionable feedback.

![AI Resume Analyzer](https://img.shields.io/badge/Project-AI%20Resume%20Analyzer-1f9d6b?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=flat-square&logo=google)

## 👋 About the Project

Applying for a job often means guessing whether a resume is aligned with the role. **AI Resume Analyzer** reduces that guesswork by comparing a candidate's resume with a target job description and highlighting the most important improvements.

The application accepts a PDF resume, extracts its text, sends the resume and job description to Google Gemini, and presents a focused analysis containing:

- 📊 A match score from 0 to 100
- 🔎 Important job-description keywords missing from the resume
- 💡 Specific suggestions for improving the resume

This project demonstrates a complete full-stack workflow: authentication, file uploads, document parsing, cloud storage, AI integration, relational data modeling, REST APIs, and a responsive web interface.

## ✨ Core Features

- 🔐 User registration and login with bcrypt password hashing
- 🍪 JWT authentication stored in an HTTP-only cookie
- 📄 PDF resume upload with a 5 MB file-size limit
- 🧾 Resume text extraction using `pdf-parse`
- ☁️ Cloudinary storage for uploaded resume files
- 🤖 Resume-to-job-description comparison using Google Gemini
- 📈 Match score, missing keywords, and improvement suggestions
- 🌓 Light and dark theme support
- ⚡ TanStack React Query for server-state management and caching
- 🔔 Toast feedback for uploads, authentication, and analysis actions
- 🧱 Error boundaries and loading skeletons around analysis sections

## 🎯 Project Highlights

This project was built to showcase practical full-stack engineering skills:

- Designing a REST API with Express and TypeScript
- Modeling users, resumes, and analyses with Prisma and PostgreSQL
- Securing protected routes with JWT middleware
- Handling multipart uploads with Multer
- Integrating an external generative AI provider
- Building reusable UI components with Next.js, Tailwind CSS, and shadcn-style components
- Connecting a client-side dashboard to a backend API with Axios
- Managing asynchronous loading, errors, mutations, and cached queries

## 🧠 How It Works

```mermaid
flowchart LR
	A[Create an account] --> B[Log in]
	B --> C[Upload PDF resume]
	C --> D[Extract resume text]
	D --> E[Paste job description]
	E --> F[Google Gemini analysis]
	F --> G[Store analysis in PostgreSQL]
	G --> H[Display score and recommendations]
```

### Analysis Flow

1. A user creates an account or logs in.
2. The user uploads a PDF resume from the dashboard.
3. The backend extracts readable text from the PDF.
4. The original file is uploaded to Cloudinary and resume metadata is stored in PostgreSQL.
5. The user pastes a job description.
6. Google Gemini compares the resume text with the job description and returns structured JSON.
7. The backend stores the score, missing keywords, suggestions, and job description.
8. The frontend loads and displays the analysis in separate result sections.

## 🏗️ Architecture

```text
Next.js 14 + React 18 + Tailwind CSS
			 │
			 │ Axios / HTTP-only cookie
			 ▼
Express + TypeScript REST API
	   │          │          │
	   │          │          └── Google Gemini
	   │          └───────────── Cloudinary
	   └──────────────────────── Prisma + PostgreSQL
```

### Main Data Model

- **User**: account information and authentication data
- **Resume**: uploaded filename, Cloudinary URL, extracted text, and owner
- **Analysis**: job description, match score, missing keywords, suggestions, and related resume

User-to-resume and resume-to-analysis relationships use cascading deletes through Prisma.

## 🛠️ Tech Stack

### Frontend

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn-style UI components
- Radix UI
- TanStack React Query
- Axios
- Next Themes
- Sonner
- Lucide React

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT and HTTP-only cookies
- bcrypt
- Multer
- `pdf-parse`

### Integrations

- Google Gemini for AI-powered resume analysis
- Cloudinary for resume file storage

## 📁 Project Structure

```text
AI_resume_analyzer/
├── resume-analyzer-frontend/   # Next.js web application
│   ├── app/                    # Routes, layouts, auth pages, dashboard
│   ├── components/             # Reusable UI and dashboard components
│   ├── hooks/                  # Auth, upload, and analysis hooks
│   ├── lib/                    # Axios and query utilities
│   └── types/                  # Shared frontend types
├── resume-analyzer-backend/    # Express REST API
│   ├── prisma/                 # Schema and database migrations
│   └── src/
│       ├── controllers/        # Request handlers
│       ├── middlewares/        # Auth and upload middleware
│       ├── routes/              # API route definitions
│       ├── services/            # AI, PDF, and Cloudinary services
│       └── utils/               # JWT utilities
└── postman/                    # API testing workspace structure
```

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js 18+
- npm
- PostgreSQL database
- Google Gemini API key
- Cloudinary account and API credentials

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd AI_resume_analyzer
```

### 2. Configure the backend

```bash
cd resume-analyzer-backend
npm install
```

Create `resume-analyzer-backend/.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/resume_analyzer"
JWT_SECRET="replace-with-a-long-random-secret"
GEMINI_API_KEY="your-gemini-api-key"
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
PORT=7000
CORS_ORIGIN="http://localhost:3000"
NODE_ENV=development
```

Generate the Prisma client and apply migrations:

```bash
npx prisma generate
npx prisma migrate deploy
```

Start the API:

```bash
npm run dev
```

The backend runs at `http://localhost:7000` by default.

### 3. Configure the frontend

Open a second terminal:

```bash
cd resume-analyzer-frontend
npm install
```

Create or update `resume-analyzer-frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:7000/api/v1
```

Start the Next.js app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 API Reference

The API base URL is `/api/v1`.

| Method | Endpoint | Authentication | Description |
| --- | --- | --- | --- |
| `GET` | `/health` | Public | Check API availability |
| `POST` | `/users/register` | Public | Register a new user |
| `POST` | `/users/login` | Public | Log in and set the auth cookie |
| `POST` | `/users/logout` | Required | Clear the auth cookie |
| `GET` | `/users/current-user` | Required | Get the current user |
| `POST` | `/resumes/upload` | Required | Upload a PDF using multipart field `resume` |
| `POST` | `/analysis/create` | Required | Analyze `{ resumeId, jobDescription }` |
| `GET` | `/analysis/:id` | Required | Retrieve a saved analysis |

## 🧪 Available Scripts

### Frontend

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Start the production server
npm run lint      # Run Next.js linting
```

### Backend

```bash
npm run dev       # Start the API with ts-node-dev
npx prisma studio # Open the Prisma database browser
```

## 🔒 Security and Data Notes

- Passwords are hashed with bcrypt before storage.
- Authentication uses an HTTP-only cookie to reduce client-side token exposure.
- Protected API routes require a valid JWT.
- Resume documents and extracted resume text can contain sensitive personal information. Use development credentials carefully and define appropriate retention and deletion policies before production use.

## 🧭 Roadmap

- [ ] Add automated backend and frontend tests
- [ ] Add request validation with a schema-validation library
- [ ] Enforce resume and analysis ownership at the API layer
- [ ] Add resume and analysis history to the dashboard
- [ ] Persist the active dashboard state across page refreshes
- [ ] Add analysis export and resume deletion
- [ ] Improve AI output validation and fallback handling
- [ ] Add rate limiting, structured logging, and production observability
- [ ] Add Docker-based local development and deployment documentation

## 📌 Current Project Scope

This repository is an actively developed portfolio project and functional MVP. The primary analysis flow is implemented end to end, while production hardening such as automated tests, advanced authorization, rate limiting, and observability remains part of the next iteration.

## 👨‍💻 Developer

**Ansh Patel**

- LinkedIn: [linkedin.com/in/ansh-patel-073964285](https://www.linkedin.com/in/ansh-patel-073964285)

## 📄 License

No license has been added to the repository yet. Add a license file before distributing or reusing the project publicly.
