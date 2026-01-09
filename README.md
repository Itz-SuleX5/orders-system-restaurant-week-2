## Changes
- [x] Backend (Models/Serializers/Views)
- [x] Frontend (Components/State/Styles)
- [ ] Docs (README/Swagger)
## Checklist
- [ ] Tests added / updated
- [ ] Lint passes
- [x] README updated (if needed)

# Restaurant Management System (Week 2)

Live README: update daily. This file is derived directly from the PRD and reflects the current scope, progress, and instructions for contributors.

## Summary
A full-stack restaurant management system (KDS/POS) designed for internal staff (Waiters, Kitchen, and Admins). It facilitates the end-to-end flow from table management and order creation to kitchen preparation tracking and final billing.

## Highlights
- Backend: Django + Django REST Framework ✅
- Frontend: React (Vite) + Tailwind CSS ✅
- Development DB: SQLite (Django default) — PostgreSQL integration moved to Day 7 ✅
- State Management: Zustand (for Cart/Auth state) ✅
- Auth: JWT (SimpleJWT) with Role-Based Access Control (RBAC) ✅
- UI Design: Professional high-contrast interfaces for high-pressure environments ✅
- Data Fetching: React Query (planned) 🕐
- Containerization: Docker (planned) 🕐
- Testing: Pytest / Vitest (planned) 🕐

## Architecture & Tech (PRD-aligned)
Layer	Technology	Status
Backend	Django, Django REST Framework	✅
ORM	Django ORM (SQLite for dev)	✅
Frontend	React (Vite)	✅
Styling	Tailwind CSS	✅
Auth	JWT (SimpleJWT)	✅
State	Zustand	✅
Data fetching	React Query	🕐
Testing	Pytest / Vitest	🕐
CI/CD	GitHub Actions	🕐

## Development Status & 7-Day Plan (PRD)
Day 1: Project Initialization (Django + DRF setup, React + Tailwind, Repo structure, Auth Models with Roles) — ✅ completed.
Day 2: Auth & Staff Onboarding (JWT Setup, Login & Registration UI, Role-based routing) — ✅ completed.
Day 3: Infrastructure CRUDs (Menu/Dishes API, Table Management UI, Image uploads) — 🕐 in process.
Day 4: Order Logic (Order/OrderItem models, Add-to-cart logic, Table status sync) — 🕐 planned.
Day 5: Kitchen Display System (KDS) (Kanban board, Real-time status updates, Waiter notifications) — 🕐 planned.
Day 6: Billing & Admin Dashboard (Tax/Tip calculation logic, Revenue metrics, Staff management) — 🕐 planned.
Day 7: Final Polish & Deploy (Tests, Seed data, PostgreSQL integration, Production deploy) — 🕐 planned.

## How to run locally

### Backend
cd backend
python -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### Frontend
cd frontend
npm install
npm run dev

## Notes
The repository uses SQLite for development to accelerate the setup of the complex relationship between Orders and Items. Production PostgreSQL migration is scheduled for Day 7.
RBAC (Role-Based Access Control): Ensure all new API endpoints check for user.role to prevent Waiters from accessing Admin metrics.
Keep PRs small and tied to issues from the PRD. Use the PR template.

## PR Template (short)
Create the file at .github/pull_request_template.md and use the following content:

## Description
Short description of the changes (e.g., Added Kitchen Kanban UI).

## Related issue
Closes #<issue-number>

## Changes
- [x] Backend (Models/Serializers/Views)
- [x] Frontend (Components/State/Styles)
- [ ] Docs (README/Swagger)

## How to test
Steps to verify locally (e.g., Login as 'Kitchen' and check the board).

## Checklist
- [ ] Tests added / updated
- [ ] Lint passes
- [x] README updated (if needed)

This README is kept in sync with the PRD document.
