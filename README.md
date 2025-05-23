# Quasar admin template

A Quasar admin template with simple dynamic route config:).

## Stack

| Name        | Version  | Remark |
|-------------|----------|--------|
| Vue         | ^3.4.18  |        |
| Quasar      | ^2.16.0  |        |
| Pinia       | ^2.0.11  |        |
| Vue Router  | ^4.0.12  |        |
| Axios       | ^1.2.1   |        |
| DayJs       | ^1.11.13 |        |
| NProgress   | ^0.2.0   |        |
| ECharts     | ^5.6.0   |        |
| vue-echarts | ^7.0.3   |        |

## Install the dependencies

```bash
pnpm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

## Lint the files

```bash
pnpm run lint
```

## Format the files

```bash
pnpm run format
```

## Build the app for production

```bash
quasar build
```

## Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Folder aliases

See [Quasar Cli Vite](https://quasar.dev/quasar-cli-vite/handling-vite#folder-aliases)

|   Alias    |        Resolves to         |
|:----------:|:--------------------------:|
|    src     |            /src            |
|    app     |             /              |
| components |      /src/components       |
|  layouts   |        /src/layouts        |
|   pages    |         /src/pages         |
|   assets   |        /src/assets         |
|    boot    |         /src/boot          |
|   stores   | /src/stores (Pinia stores) |
