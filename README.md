Unicargo monorepo

# Install Locally
```bash
$ git clone git@github.com:goldylucks/adam-unicargo.git
$ cd adam-unicargo
$ npx lerna bootstrap
$ yarn install
```

# Develop
```bash
$ cd packages/client-portal-api-server
$ yarn dev
# separate terminal
$ cd packages/client-portal-web-client
$ yarn start
```

# Deploy
```bash
# Deploy client web app to s3 at http://unicargo-client-portal-web.s3-website-us-west-2.amazonaws.com
$ cd packages/client-portal-web-client
$ yarn deploy
# Deploy api server
# TBD
```

# Yarn & Lerna
This project utilies Lerna and Yarn workspaces to handle package management and publishing. To install any dependency inside a specific package, use yarn "as usual":
```bash
$ cd packages/PACKAGE_NAME
$ yarn add SOME_NPM_PACKAGE
```
To install a dependency in the root folder:
```bash
$ yarn add --dev SOME_NPM_PACKAGE -W
```
