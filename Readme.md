# Workshop: Kubernetes fundamentals

## Introduction
 This workshop demonstrates how to deploy / manage dockers applications in GKE. There is REST API Spring Boot integrated to a MongoDb. In addition, there is an Angular App that will display a contact list. The REST API, MongoDb and Angular app will be docker containers.

 ## Why build Docker + GKE?
- Open-source
- GKE and Docker Work Well Together.
- K8s has been working with GKE since day one, which makes certain things simple to do together.
- Great for modern cloud-based apps, such as web apps, IoT apps, and mobile backends.


## Prerequisites
- Install Visual Studio (Mac OS / Linux / Windows).
- Install Docker Desktop. 
- Create an GCP Account. 
- Download and configure gcloud command -> https://cloud.google.com/sdk/install
- Initializing Cloud SDK ->  https://cloud.google.com/sdk/docs/initializing
- Install kubectl (It depends on which OS you use)

## How to use it
- Download or clone the project.
- gcloud auth login
- gcloud config set project <PROJECT_ID>

- gcloud config set compute/zone us-central1

- gcloud container clusters create taller-k8s\
                --num-nodes 2 \
                --machine-type n1-standard-1

- gcloud container clusters get-credentials taller-k8s

- kubectl apply -f kube-deployment.yml

- gcloud container clusters delete taller-k8s  (Optional. It when you want to delete your K8s cluster)