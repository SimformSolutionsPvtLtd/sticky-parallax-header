---
sidebar_position: 2
---
# Installation

## Prerequisites
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [node v10.9.0](https://github.com/creationix/nvm)

## Installation
### For React Native >= 0.60.0 use version 0.0.60 and above, for previous React Native versions use 0.0.59
### Installation for React Native >= 0.60.0

Add latest package version
```bash
$ yarn add react-native-sticky-parallax-header
```

### Installation for React Native < 0.60.0

Add package version 0.0.59
```bash
$ yarn add react-native-sticky-parallax-header@0.0.59
```

Link fonts
```bash
$ react-native link react-native-sticky-parallax-header
```

In order to make tab bar work, we have to link react-native-nested-scroll-view package
```bash
$ react-native link react-native-nested-scroll-view
```

Depending on the version of React Native you use, the package can be still making issues for you, you have to install patch-package
```bash
$ yarn add patch-package postinstall-postinstall
```

Then you add this script to your scripts:
```bash
 "scripts": {
+  "postinstall": "patch-package"
 }
```

_After all those steps, just copy a 'patches' folder from this repository and run `yarn` again to apply the patched package.
You're ready to use the package now._

