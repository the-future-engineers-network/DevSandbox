# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.16.0
ARG PNPM_VERSION=8.7.6

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
# ENV NODE_ENV production

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app

# Copy package.json and pnpm-lock.yaml into the image.
COPY ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "./"]
COPY ["./apps/api/package.json", "./apps/api/"]
COPY ["./apps/docs/package.json", "./apps/docs/"]
COPY ["./apps/frontend/package.json", "./apps/frontend/"]
COPY ["./packages/eslint-config-custom/package.json", "./packages/eslint-config-custom/"]
COPY ["./packages/tsconfig/package.json", "./packages/tsconfig/"]
COPY ["./packages/ui/package.json", "./packages/ui/"]

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Leverage a bind mounts to package.json and pnpm-lock.yaml to avoid having to copy them into
# into this layer.
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
#     --mount=type=cache,target=/root/.local/share/pnpm/store \
#     pnpm install

RUN pnpm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
# EXPOSE 5000

# Run the application.
CMD pnpm dev
