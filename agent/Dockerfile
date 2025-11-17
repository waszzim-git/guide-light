FROM python:3.11-slim
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY requirements.txt .
RUN python -m pip install --no-cache-dir -r requirements.txt || true
COPY . .
CMD ["gunicorn", "app.main:app", "--bind", "0.0.0.0:8080", "--worker-class", "uvicorn.workers.UvicornWorker"]
