# syntax=docker/dockerfile:1.6

FROM node:20-alpine AS builder
WORKDIR /app

# EmailJS keys are inlined at build time by Vite. Pass them in via --build-arg or
# docker-compose build args; missing ones degrade gracefully (contact form will fail).
ARG VITE_APP_EMAILJS_SERVICE_ID=""
ARG VITE_APP_EMAILJS_TEMPLATE_ID=""
ARG VITE_APP_EMAILJS_PUBLIC_KEY=""
ENV VITE_APP_EMAILJS_SERVICE_ID=$VITE_APP_EMAILJS_SERVICE_ID \
    VITE_APP_EMAILJS_TEMPLATE_ID=$VITE_APP_EMAILJS_TEMPLATE_ID \
    VITE_APP_EMAILJS_PUBLIC_KEY=$VITE_APP_EMAILJS_PUBLIC_KEY

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build


FROM nginx:1.27-alpine AS runner
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html/sathwick-portfolio

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/sathwick-portfolio/ || exit 1
