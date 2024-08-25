docker-compose down -v && \
docker-compose up -d && \
sleep 5 && \
pnpm db:generate && \
pnpm db:migrate && \
pnpm db:seed
