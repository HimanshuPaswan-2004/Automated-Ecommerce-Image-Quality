# Automated E-commerce Image Quality Inspector

> **A Full-Stack Digital Image Processing (DIP), Machine Learning (ML) & Agentic Inspection System**

![Project Status](https://img.shields.io/badge/Status-Phase_1_Foundation-blue)
![Python](https://img.shields.io/badge/Python-3.11-brightgreen)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-teal)
![React](https://img.shields.io/badge/React-18+-61DAFB)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC)
![OpenCV](https://img.shields.io/badge/OpenCV-4+-red)

---

## 📌 Project Overview
Automated E-commerce Image Quality Inspector is an end-to-end platform built to inspect product catalog images, detect technical defects (blur, low exposure, poor contrast, noise, improper resolution), apply safe non-destructive corrections, reinspect the outcomes, and produce auditable quality reports.

The system combines:
1. **Digital Image Processing (DIP):** Deterministic image measurements using OpenCV (Laplacian variance for blur, luminance distributions, contrast spread, noise estimation).
2. **Machine Learning (ML):** Defect classification using engineered DIP feature vectors (Logistic Regression / Random Forest).
3. **Full-Stack Engineering:** High-performance FastAPI backend with REST APIs, PostgreSQL persistence, and an interactive React + Vite frontend.
4. **Agentic Inspection & Guardrails:** Policy-driven inspection and correction workflow (*Observe $\rightarrow$ Predict $\rightarrow$ State $\rightarrow$ Plan $\rightarrow$ Act $\rightarrow$ Verify $\rightarrow$ Report*) with full action traces and human approval for borderline cases.

---

## 🏗️ Repository Architecture

```text
├── frontend/                     # React + Vite + Tailwind CSS application
│   ├── src/
│   │   ├── components/           # UI components (Header, HealthBadge, etc.)
│   │   ├── pages/                # Landing, Inspection, Dashboard
│   │   ├── services/             # API client services
│   │   ├── App.jsx               # Main React component
│   │   └── main.jsx              # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/                      # Python FastAPI application
│   ├── app/
│   │   ├── api/                  # FastAPI endpoints (/health, /images, /inspections)
│   │   ├── services/             # Orchestration logic
│   │   ├── dip/                  # OpenCV metrics & transformation algorithms
│   │   ├── ml/                   # Model training and defect inference
│   │   ├── agent/                # Guarded agent policy and tool definitions
│   │   ├── database/             # Database connection and models
│   │   └── main.py               # FastAPI application entry point
│   ├── tests/                    # Pytest test suite
│   ├── requirements.txt          # Python dependencies
│   └── .venv/                    # Python virtual environment
├── dataset/                      # Dataset management
│   ├── raw/                      # Original clean product images
│   ├── processed/                # Normalized image representations
│   ├── synthetic/                # Controlled synthetic defect variants
│   └── labels/                   # Annotations and split files
├── experiments/                  # Baseline vs improved model experiments
├── evaluation/                   # Macro-F1, Recall, Latency, and Error analysis
├── docs/                         # Architecture diagrams, specifications, reports
├── .gitignore
└── README.md
```

---

## 🚀 Quickstart Guide

### 1. Backend Setup (FastAPI)
```powershell
# Navigate to backend directory
cd backend

# Activate virtual environment
.\.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI development server
uvicorn app.main:app --reload --port 8000
```
* API Documentation: [http://localhost:8000/docs](http://localhost:8000/docs)
* Health Check: [http://localhost:8000/health](http://localhost:8000/health)

### 2. Frontend Setup (React + Vite + Tailwind)
```powershell
# Navigate to frontend directory
cd frontend

# Install npm dependencies
npm install

# Run the Vite development server
npm run dev
```
* Web Application: [http://localhost:5173](http://localhost:5173)

---

## 🎯 Development Roadmap (Phases)
- [x] **Phase 1: Project Setup & Architecture** (FastAPI backend skeleton, React + Vite + Tailwind frontend, `/health` endpoint, Git repo structure)
- [ ] **Phase 2: Dataset Strategy & Governance** (Shoe category dataset, synthetic defect generators, clean train/val/test splits)
- [ ] **Phase 3: Digital Image Processing (DIP) Engine** (Sharpness/blur, exposure, contrast, noise, resolution algorithms + unit tests)
- [ ] **Phase 4: Machine Learning Defect Classifier** (Baseline rule-based vs trained ML classifier, evaluation metrics)
- [ ] **Phase 5: Non-Destructive Correction Engine** (Enhancements, unsharp-masking, denoising, reinspection verification)
- [ ] **Phase 6: Persistence & REST API Suite** (PostgreSQL models, upload, inspection jobs, review endpoints)
- [ ] **Phase 7: Interactive Frontend Experience** (Upload studio, side-by-side comparison, dashboard analytics)
- [ ] **Phase 8: Guarded Agentic Orchestration** (Tool calling, action audit trail, human-in-the-loop approval)
- [ ] **Phase 9: Comprehensive Testing & Final Deliverables** (Integration tests, benchmarks, project report)
