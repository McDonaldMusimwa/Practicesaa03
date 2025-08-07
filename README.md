# AWS Practice Questions Web App 

(Proof of concept) 

This project is a serverless web application designed to help users prepare for the students for the follwing exams.

1: **AWS Certified Solutions Architect – Associate (SAA-C03)** 

2: **AWS Cloud Practioner** 

3: **AWS Ai Practioner** 
 It presents multiple-choice questions, with other features such as stores user progress, and offers feedback in progress.

## 🧠 Purpose

To give aspiring AWS-certified professionals a hands-on way to test and improve their knowledge with dynamic practice questions that simulate real exam scenarios.

---

## 🚀 Features

- ✅ View randomized AWS practice questions
- ✅ Select and submit answers
- ✅ See correct/incorrect feedback
- ✅ Backend API built with AWS Lambda
- ✅ Data stored in DynamoDB
- ✅ Deployed using AWS services (API Gateway, Lambda, DynamoDB, S3)

---

## 🏗️ Architecture Overview

    React (Frontend)  
    |
    |--> API Gateway (REST API)
    |
    |--> AWS Lambda (Node.js)
    |
    |--> DynamoDB (Questions Table)

    
---

## 🧰 Tech Stack

| Layer     | Technology           |
|----------|----------------------|
| Frontend | React (Vite or CRA)  |
| Backend  | Node.js (AWS Lambda) |
| API      | AWS API Gateway      |
| DB       | Amazon DynamoDB      |
| Infra    | AWS IAM, CloudWatch, S3 |

---

## 🗃️ DynamoDB Table Structure

**Table Name:** `PracticeQuestions`

| Attribute     | Type    | Description                          |
|---------------|---------|--------------------------------------|
| `examcode`    | String  | Partition key (e.g., `SAA-C03`)      |
| `questionId`  | String  | Sort key (unique for each question) |
| `question`    | String  | The question text                    |
| `options`     | List    | Multiple choice options              |
| `answer`      | String  | Correct answer option (e.g., `B`)   |
| `explanation` | String  | Explanation for the correct answer  |

---

📈 Future Enhancements

📝 User progress tracking (with Cognito)

🧪 Timed practice exams

🌍 Internationalization support

📊 Score calculation
