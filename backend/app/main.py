from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.health import router as health_router

app = FastAPI(
    title="Automated E-commerce Image Quality Inspector API",
    description=(
        "A Full-Stack Digital Image Processing (DIP), Machine Learning (ML) "
        "& Guarded Agentic Inspection System for E-commerce Product Catalogs."
    ),
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Enable CORS for frontend development
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "*"  # Development permissive
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(health_router)
app.include_router(health_router, prefix="/api/v1")


@app.get("/")
def root():
    """Root entrypoint providing API summary and navigation links."""
    return {
        "message": "Welcome to Automated E-commerce Image Quality Inspector API",
        "version": "1.0.0",
        "documentation": "/docs",
        "health": "/health",
        "api_v1_health": "/api/v1/health"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
