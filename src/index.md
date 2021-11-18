---
---

# Coding at Lightspeed
Push-button development environments hosted on your computer or in the cloud. Automate your developer workflow and share it with your team.

## Start Coding Instantly

Lando creates your dev environment and seeds it. Because you don't have time to configure Docker, debug tooling, or any of that space snarge.

```
# Create a new directory for this example and enter it
mkdir drupal9 && cd drupal9

# Initialize a new lando drupal using vanilla d9
lando init --recipe=drupal9

# Start your engines.
lando start
```

## Integrate With Your Existing Dev Tools
Make yourself at home in the stars. Pull projects down from Lando's hosting partners. Use your favorite IDE.  See CLI tools working out-of-the-box.

## Easily Share with Your Team
Distribute working dev environments to your whole team. Junior devs get a rocket boost while senior devs can tune settings to make their best astro racer.

```
name: lando-101
recipe: lamp
config:
  php: 7.4
services:
  mailhog:
    type: mailhog:v1.0.0
    portforward: true
    hogfrom:
      - appserver
```
