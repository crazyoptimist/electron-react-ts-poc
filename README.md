# Electron React Typescript POC

[![CircleCI](https://circleci.com/gh/CrazyOptimist/electron-react-ts-poc/tree/main.svg?style=svg)](https://circleci.com/gh/CrazyOptimist/electron-react-ts-poc/tree/main)

#### Description

This demonstration is bootstrapped with below command:

```
yarn create electron-app electron-react-ts-poc --template=typescript-webpack
```

For more info:  
https://www.electronforge.io/guides/framework-integration/react-with-typescript

#### Configure CircleCI pipeline

Context `global`

```ini
CIRCLE_TOKEN=xxx
```

Context `electron-react-ts-poc`

```ini
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=xxx
AWS_REGION=us-east-1
BUCKET_NAME={your-bucket-name/your-folder-name/downstream-nested-folder-name...}
```
