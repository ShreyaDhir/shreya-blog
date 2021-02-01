---
title: 'Creating Apk for React Native Project'
date: '2020-10-21'
---

> APK (Android Application Package) - An app file for Android which is present in the package format used as a standalone app.

### Set up

To start, we need to **eject** the **expo** environment from the project. Write the following command in the **command prompt:**

```bash
expo eject
```

- Now, we need to **run** the command:

 ```bash
 expo build:android 
 ```

- Further, the following **permissions** will be asked; follow the steps below:

```bash
? Would you like to proceed? Yes
√ Choose the build type you would like: » apk 
```

The build will then start taking place. While it might take some time, you can monitor your build by following the link given under **"You can monitor the build at"** with all the necessary details about the build. 


