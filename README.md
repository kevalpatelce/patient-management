# Patient Management System
Node.js | Express.js | AWS Lambda | Serverless Framework | DynamoDB | TypeScript

Overview

This project is a serverless Patient Management API implemented using Node.js, Express.js, TypeScript, AWS Lambda, and DynamoDB.
It demonstrates a simple CRUD operations workflow for managing patient records.

# Key Features

Fully serverless API using AWS Lambda + API Gateway.

Express.js backend wrapped with serverless-http.

DynamoDB for persistent NoSQL data storage.

CRUD operations for Patients:

Create a new patient

Get a patient by ID

Get all patients

Update patient information

Delete a patient


# Prerequisites

Make sure the following are installed:

Node.js (v18+ recommended)

Serverless Framework

npm install -g serverless


AWS CLI configured with credentials

# Installation

Install dependencies:

npm install


Build TypeScript:

npm run build


# Start local server using serverless-offline:

serverless offline


The API will run on:

http://localhost:3000

Deployment

To deploy to AWS:

serverless deploy
