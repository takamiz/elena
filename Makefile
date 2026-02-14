.PHONY: dev-worker dev-frontend dev build-worker build-frontend

dev-worker:
	cd worker && pnpm exec wrangler dev --port 8787

dev-frontend:
	trunk serve

dev:
	@echo "Please run 'make dev-worker' and 'make dev-frontend' in separate terminals."

build-worker:
	cd worker && pnpm exec wrangler deploy --dry-run --outdir dist

build-frontend:
	trunk build --release

check:
	cargo check
	cargo test
