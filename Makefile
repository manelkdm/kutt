ENV_NAME ?= test
COMPOSE = docker compose --project-name kutt --env-file .env

up:
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down -v

logs:
	$(COMPOSE) logs -f

ps:
	$(COMPOSE) ps

restart: down up

