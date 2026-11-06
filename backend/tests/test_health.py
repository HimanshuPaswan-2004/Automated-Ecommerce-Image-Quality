from app.api.health import health_check
from app.main import app, root


def test_root_function():
    """Verify root endpoint data structure."""
    data = root()
    assert isinstance(data, dict)
    assert data["version"] == "1.0.0"
    assert data["health"] == "/health"
    assert "documentation" in data


def test_health_check_function():
    """Verify health check function returns required system indicators."""
    data = health_check()
    assert isinstance(data, dict)
    assert data["status"] == "healthy"
    assert data["version"] == "1.0.0"
    assert "uptime_seconds" in data
    assert "timestamp" in data
    assert "modules" in data

    modules = data["modules"]
    assert modules["dip_engine"] == "available"
    assert modules["ml_classifier"] == "available"
    assert modules["correction_studio"] == "available"
    assert modules["agent_orchestrator"] == "available"


def test_registered_openapi_paths():
    """Verify critical API endpoints are registered in OpenAPI schema."""
    paths = list(app.openapi()["paths"].keys())
    assert "/" in paths
    assert "/health" in paths
    assert "/api/v1/health" in paths
