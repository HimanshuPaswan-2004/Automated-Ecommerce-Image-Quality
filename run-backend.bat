@echo off
echo Starting FastAPI Backend on http://localhost:8000 ...
cd backend
.\.venv\Scripts\uvicorn.exe app.main:app --reload --port 8000
pause

