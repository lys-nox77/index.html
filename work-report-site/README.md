# Work Report Site

CSVの作業ログをブラウザに貼り付けるだけで、日次レポートとSlack投稿文を生成する静的Webサイトです。

## 使い方

1. `work-report-site/index.html` をブラウザで開く
2. CSVを貼り付ける（または「サンプルCSVを入れる」を押す）
3. レポート日付を選ぶ
4. 「レポート生成」を押す

サーバーを立てて確認する場合:

```bash
cd work-report-site
python -m http.server 8000
```

その後、`http://localhost:8000` を開いてください。

## CSV形式

```csv
date,member,project,hours,task
2026-05-07,Alice,Alpha,3.5,仕様確認
```
