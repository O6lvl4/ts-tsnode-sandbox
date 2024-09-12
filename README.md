# TypeScript & ts-node プロジェクトデモ

このリポジトリは、TypeScriptとts-nodeを使用して効率的なNode.jsアプリケーションを開発する方法を示すデモプロジェクトです。ts-nodeの基本的なセットアップから高度な使用法まで、実践的な例を通じて学ぶことができます。

## 🚀 特徴

- ts-nodeを使用したTypeScriptの直接実行
- 基本的なCLIアプリケーションの実装
- 環境変数の使用例
- モジュール構造とインポートの最適化
- デバッグ設定のサンプル
- パフォーマンス最適化のヒント

## 🛠 セットアップ

ローカル環境でこのプロジェクトを実行するには、以下の手順に従ってください：

1. リポジトリをクローンする：
   ```
   git clone https://github.com/O6lvl4/ts-tsnode-sandbox.git
   ```
2. プロジェクトディレクトリに移動：
   ```
   cd ts-tsnode-sandbox
   ```
3. 依存モジュールをインストール：
   ```
   npm install
   ```
4. アプリケーションを実行：
   ```
   npm start
   ```

これで、基本的なts-nodeアプリケーションが実行されるはずです。

## 🖥 使用方法

`src` ディレクトリ内の異なるファイルを探索して、TypeScriptとts-nodeがどのように使用されているかを確認してください。

主要なファイル：
- `src/index.ts`: アプリケーションのエントリーポイント
- `src/utils/greeting.ts`: 挨拶機能を提供するユーティリティモジュール

## 🧪 実験

以下のコマンドを試して、プロジェクトの動作を確認してください：

1. 基本的な実行：
   ```
   npm start
   ```

2. 引数を渡して実行：
   ```
   npm start -- YourName
   ```

3. 環境変数を使用（.envファイルを編集後）：
   ```
   npm run start:with-env
   ```

4. テストの実行：
   ```
   npm test
   ```

## 📚 もっと学ぶ

このリポジトリで示されている概念の詳細な説明については、以下の技術記事を併せてご覧ください：

[TypeScriptとts-nodeを使った効率的な開発入門 | Zenn](https://zenn.dev/o6lvl4/articles/d961550af3b601)
