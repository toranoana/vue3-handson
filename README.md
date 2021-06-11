# はじめようVue3！ハンズオンでとらのあなラボのフロントエンドを学ぶ

本リポジトリはとらのあなラボ Tech Day #1での発表、『はじめようVue3！ハンズオンでとらのあなラボのフロントエンドを学ぶ』用のサンプルコード集になります。

資料と合わせてご確認ください。

# 動かし方

dockerを利用する場合と、素直にPC上で動かす場合の2パターンあります。

## dockerを利用する場合

docker及びdocker-composeが利用可能なことが条件となります。

- `docker-compose up -d`
- `docker exec -it vue3-handson ash`
- 任意のディレクトリにcdして、`npm install` 後、 `npm run dev` を実行
- <http://localhost:3000>にアクセス

例

```sh
docker-compose up -d
docker exec -it vue3-handson ash # ここまでホストマシン上
cd 00.init_template
npm install
npm run dev
```

## PC上で直接動かす場合

Node.js v14がインストールされていることが条件になります。

- 任意のディレクトリにcdして、`npm install` 後、 `npm run dev` を実行
- <http://localhost:3000>にアクセス

例

```sh
cd 00.init_template
npm install
npm run dev # すべてホストマシン上で実行
```

# ディレクトリ構成

以下発表資料の章と対応しています。

- `00.init_template`
  - 初期状態のソースが置かれているフォルダになります
  - 手を動かす場合、こちらのソースに変更を加えて行くのが良いかと思います
- `01.basic_of_component`
  - コンポーネントの基本説明用です
- `02.state`
  - コンポーネントでのstate管理説明用です
- `03.event`
  - コンポーネントでのstate変更方法についての説明用です
- `04.component_props`
  - propsを通したコンポーネント間連携についての説明用です
- `05.component_events`
  - propsとemitを通したコンポーネント間連携についての説明用です
- `06.lifecycle`
  - コンポーネントのライフサイクル説明用です
- `07.ajax`
  - ajax通信説明用です
- `08.computed_and_watch`
  - computedとwatchを利用したデータの監視方法説明用です
- `09.routing`
  - ルーティング説明用です
