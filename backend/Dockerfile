FROM node:20-slim

# Set working directory
WORKDIR /app

# Install system dependencies (minimal)
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy package files (including lockfile) for deterministic install
COPY package-lock.json package.json ./

# Install only production deps using npm ci
RUN npm ci --omit=dev

# Copy app source
COPY . .

# Expose port expected by Cloud Run
EXPOSE 8080

# Start backend
CMD ["npm", "start"]
