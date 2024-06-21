FROM node:lts AS development

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

ENV CI=true
ENV PORT=3000

# Use a development server
CMD ["npm", "start"] 
