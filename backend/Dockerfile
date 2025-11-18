FROM node:20-slim

# Set working directory
WORKDIR /app

# Install system dependencies (keep minimal)
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy package files first for Docker layer caching
COPY package*.json ./

# Install only production dependencies using npm
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Expose API port expected by Cloud Run
EXPOSE 8080

# Start backend
CMD ["npm", "start"]
