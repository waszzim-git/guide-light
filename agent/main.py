import os
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"status": "agent alive"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=port)
