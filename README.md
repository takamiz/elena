# Elena - Global Asset Allocation Dashboard

世界中の主要な資産クラス（株式、債券、不動産、コモディティ、仮想通貨）の状況をリアルタイムで把握するためのダッシュボードです。

## 🚀 特徴
- **高速な表示**: Cloudflare Workers + WASM (Rust) による高性能なバックエンド。
- **モダンなUI**: Leptos (Rust) + Tailwind CSS による洗練されたデザインと日本語化されたインターフェース。
- **多角的な分析**: 相関行列による資産間の関係性分析や、タイムマシン機能による過去との比較。

## 🛠️ 技術スタック
- **Frontend**: Rust (Leptos CSR), Tailwind CSS, Trunk
- **Backend**: Rust, Cloudflare Workers
- **Data Source**: Yahoo Finance (Unofficial API)
- **Infra**: Cloudflare Pages (Frontend), Cloudflare Workers (API), Cloudflare KV (Cache)

## 💻 ローカル開発環境の構築

### 準備
- Rust (latest stable)
- Node.js & pnpm
- [Trunk](https://trunkrs.dev/) (`cargo install trunk`)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-update/) (`pnpm install -g wrangler`)

### サーバーの起動
プロジェクトルートで以下のコマンドを実行します（別々のターミナルを推奨）：

```bash
# Worker (API) の起動
make dev-worker

# Frontend (UI) の起動
make dev-frontend
```
- UI: [http://localhost:8080](http://localhost:8080)
- API: [http://localhost:8787](http://localhost:8787)

---

## 🔄 CI/CD (GitHub Actions)

GitHub の `main` ブランチにプッシュすると、自動的に Cloudflare へデプロイされます。

### 設定が必要な Secrets
リポジトリの `Settings > Secrets and variables > Actions` に以下の値を登録する必要があります：

1.  **`CLOUDFLARE_API_TOKEN`**: 
    - Cloudflare ダッシュボードの「My Profile > API Tokens」から作成。
    - テンプレート「Edit Cloudflare Workers」を使用し、Pages と KV の編集権限を含めること。
2.  **`CLOUDFLARE_ACCOUNT_ID`**:
    - `npx wrangler whoami` コマンドで確認可能。
3.  **`GITHUB_TOKEN`**:
    - 自動的に付与されるため設定不要。

### デプロイの流れ
1.  **Frontend**: `trunk build --release` を実行。最新の Rust で生成された WASM を `wasm-opt --all-features` で最適化し、Cloudflare Pages にアップロード。
2.  **Worker**: `wrangler deploy` を実行。WASM ビルドを行い、Cloudflare Workers にデプロイ。

---

## ⚠️ トラブルシューティング

### WASMビルドエラー (bulk-memory)
最新の Rust コンパイラを使用している場合、`wasm-opt` でバリデーションエラーが発生することがあります。これを回避するため、`index.html` の Trunk 設定に `data-wasm-opt-params="--all-features"` を含めています。

### ローカルでデータが読み込めない
- `pkill wrangler`, `pkill trunk` で古いプロセスを終了させてから再起動してください。
- 依存関係（`shared` クレート）の変更が反映されていない場合、`cargo clean` を試してください。

## 📄 ライセンス
MIT License
