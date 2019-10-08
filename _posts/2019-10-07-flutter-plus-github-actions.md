---
title:  "Flutter + GitHub Actions: set it & forget it"
published: true
layout: single
---

Previously, the mobile app has been the area where individual developers and hobbyists don't want to touch due to the complexity of developing and delivery. However, recently released tools, Flutter and GitHub Actions have changed it.

Both Flutter and GitHub Actions have awesome documentation. I highly recommend checking it out. For this post, I will lightly touch on what they are.

## Flutter is a cross-platform framework

Flutter is written in Dart and can compile targeting Android, iOS, Web, and Desktop. It is similar to React Native, but depending on your personality (on a scale from Javascript to a Cpp-ish language, Dart), you might prefer either one. I personally like Flutter better as I prefer robustness over flexibility.
GitHub Actions is a CI/CD platform
You might be wondering what is special about a CI/CD platform? We already have CircleCI and Travis CI. Yes, GitHub Actions functions like CircleCI and Travis CI, but two things (I have thought of two, let me know if there are more) had made it stand out:
It sits right next to your code making integration much effortless.
It allows componentized CI/CD meaning many CI/CD workflows are generic enough that you can simply import and they will work out-of-box.

## Flutter + GitHub Actions = record time to fully-fledged project

Before we start, let's get a few things out of the way.

### 1. project != app

The objective of this post is to help set up a mobile app project quickly, not to develop a mobile app quickly. If all that needed is an app that can be slightly buggy and hard to deploy, definitely go with React Native with no CI/CD at all. Don't get me wrong, there is nothing wrong about getting a non-perfect app ASAP (actually in situations it is important), but it 's off-topic for this post.

### 2. follow-along || check out the repository

In this post, I will set up a project step by step, but you can also check out the repository if on a tight time budget. Even better, for your next mobile app, you can use the repository as a template.
Opinions are my own and not the views of my employer.

(to be continued ...)