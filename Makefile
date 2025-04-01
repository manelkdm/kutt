ENV_NAME ?= test
COMPOSE = docker compose --project-name kutt-$(ENV_NAME) --env-file .env.$(ENV_NAME)

up:
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down -v

logs:
	$(COMPOSE) logs -f

ps:
	$(COMPOSE) ps

restart: down up

