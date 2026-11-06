import time
from datetime import datetime, timezone
from fastapi import APIRouter

router = APIRouter(tags=["Health"])

START_TIME = time.time()


@router.get("/health")
def health_check():
    """Health check endpoint to verify backend operational readiness."""
    uptime_seconds = round(time.time() - START_TIME, 2)
    return {
        "status": "healthy",
        "service": "Automated E-commerce Image Quality Inspector API",
        "version": "1.0.0",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "uptime_seconds": uptime_seconds,
        "environment": "development",
        "modules": {
            "dip_engine": "available",
            "ml_classifier": "available",
            "correction_studio": "available",
            "agent_orchestrator": "available",
            "storage": "local"
        }
    }
