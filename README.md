# Cloud Functions

This repository contains the [firebase cloud functions](https://firebase.google.com/docs/functions/) for the Nile framework.

## Table of Contents
0. [Prerequisites](#prerequisites)
1. [Getting Started](#getting-started)
2. [Contribute](#contribute)
3. [Deploy Cloud Functions](#deployCloudFunctions)



## <a name="prerequisites"></a>Prerequisites
1. [git](https://git-scm.com/downloads)
2. [npm and node js](https://docs.npmjs.com/getting-started/what-is-npm)

If you will be deploying functions

3. [firebase cli](https://github.com/firebase/firebase-tools)

When you run
```bash
firebase login
```
 you should see that you are logged in with the email you were invited to the firebase project with.


## <a name="getting-started"></a>Getting Started

1. Clone this repository
```bash
git clone https://github.com/nile-framework/cloud-functions.git
```

2. Change directory into the <strong>functions</strong> directory within the cloud-functions repository we just cloned
```bash
cd cloud-functions/functions
```

3. Install the dependecies
```bash
npm install
```

4. Change directory to the root of the cloud functions repository
```bash
cd ..
```
so that when you check your working directory
```bash
pwd
```
you get <strong>/cloud-functions</strong>

5. You are now ready to either [contribute](#contribute) or [deploy cloud functions](#deployCloudFunctions)


## <a name="contribute"></a>Contribute

## <a name="deployCloudFunctions"></a>Deploy Cloud Functions
