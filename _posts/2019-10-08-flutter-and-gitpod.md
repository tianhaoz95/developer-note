---
title: "Gitpod + Flutter = productivity on the go for mobile app developers"
layout: single
published: true
---

## Flutter: a robust cross-platform framework.

In short, Flutter is a cross-platform framework that let developers write apps in Dart that compiles to Android, iOS, Web and Desktop. It is similar to React Native, but more Cpp-ish. The discussion around Flutter vs. React Native can go either way, but personally I prefer Flutter as it’s by default robust and consistent across platforms.

## The development environment for Flutter is not portable

Running Flutter together with either Android Studio or XCode takes a lot of resource. Many lightweight laptops cannot run it. For some that can, it will drain your battery fairly quickly. For quite some time, I was stuck with either waste my commute time or carry a giant brick, until recently I found Gitpod + Flutter solution (beta and hacky, but works for now).

## Gitpod: IDE for the Chromebook era.

Gitpod is a cloud/browser based IDE. It runs the workspace in a container and serves the UI to a browser. It’s perfect for someone who always work on the go with a Chromebook(or Ultrabook, maybe?).

To work with Flutter, we need to install Flutter and a Flutter plugin. Gitpod is a Visual Studio Code like IDE (theia) running in a browser connected with a backend workspace running in a container. It looks like we can install Flutter in the container and provide the Visual Studio Code extension to the frontend UI.

LGTM, let’s give it a try.

## Getting Started on Gitpod + Flutter

### Install Flutter in a Dockerfile

Gitpod to the core is a remote IDE running in a container. To expand its capability, it allows you to customize your own container with a Dockerfile (or a Docker image hosted on DockerHub, but this approach hasn’t treated me well).

Here is an example Dockerfile (feel free to add your magical sauce):

```bash
FROM gitpod/workspace-full:latest

ENV ANDROID_HOME=/home/gitpod/android-sdk \
    FLUTTER_HOME=/home/gitpod/flutter

USER root

RUN curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list && \
    apt-get update && \
    apt-get -y install build-essential dart libkrb5-dev gcc make gradle android-tools-adb android-tools-fastboot openjdk-8-jdk && \
    apt-get clean && \
    apt-get -y autoremove && \
    apt-get -y clean && \
    rm -rf /var/lib/apt/lists/*;

USER gitpod

RUN cd /home/gitpod && \
    wget -qO flutter_sdk.tar.xz \
    https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_v1.9.1+hotfix.4-stable.tar.xz &&\
    tar -xvf flutter_sdk.tar.xz && \
    rm -f flutter_sdk.tar.xz

RUN cd /home/gitpod && \
    wget -qO android_studio.zip \
    https://dl.google.com/dl/android/studio/ide-zips/3.3.0.20/android-studio-ide-182.5199772-linux.zip && \
    unzip android_studio.zip && \
    rm -f android_studio.zip

# TODO(tianhaoz95): make the name of the SDK file into an environment variable to avoid maintainance issue
RUN mkdir -p /home/gitpod/android-sdk && \
    cd /home/gitpod/android-sdk && \
    wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip && \
    unzip sdk-tools-linux-4333796.zip && \
    rm -f sdk-tools-linux-4333796.zip
```

> Note: it is not possible to develop iOS in a container, so I didn’t bother getting any iOS related resources. At the time this post is written, running Android emulator in Gitpod container is not possible either, but I am adding the dependencies, first, to be future proof, and, second, to compile Android apk.

### Update Flutter dependencies in a Gitpod config file

Gitpod lets you define a set of commands to initialize the workspace (details are in their documentation). I put the Android API downloading here because it is not time consuming (less than 30 seconds), and it may change frequently for testing purposes (not worth it to build into the image).

Here is an example Gitpod config file (feel free to add your magical sauce):

```yml
image:
  file: .gitpod.dockerfile
github:
  prebuilds:
    master: true
    branches: false
    pullRequests: true
    pullRequestsFromForks: false
    addCheck: false
    addComment: true
    addBadge: false
    addLabel: false
tasks:
- command: |
    mkdir -p /home/gitpod/.android
    touch /home/gitpod/.android/repositories.cfg
    export PATH=/usr/lib/dart/bin:$FLUTTER_HOME/bin:$ANDROID_HOME/bin:$PATH
    /home/gitpod/android-sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-28" "build-tools;28.0.3"
vscode:
  extensions:
    - Dart-Code.flutter@3.5.0:/kOacEWdiDRLyN/idUiM4A==
```

### “Open in Gitpod” badge is a good-to-have

Open a repository in Gitpod is simple as prefixing the Git url with “gitpod.io/#”, so to avoid repetitive work, you might want to either use a Gitpod chrome extension or a “Open in Gitpod” badge.

Here is how you would add the badge in a Readme file:

```md
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/[your GitHub username]/[your repository])
```

![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)

Now you are all set. Happy coding!

> Opinions are my own and not the views of my employer.
