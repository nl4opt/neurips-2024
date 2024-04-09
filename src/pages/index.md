---
layout: ../layouts/home.astro
title: Home

---

<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class="all-card-boxes">
            <div class="card-box yellow-bg">
                <a class="nodeco" href="#tasks">
                    <h2 class="black">Tasks</h2>
                    <p><strong>Task 1: Linear Programming Modeling.</strong> 
                    <ul>
                    <li>The objective of this task is to generate modeling code for optimization model given problem description.</li> 
                    </ul> </p>
                    <p><strong>Task 2: Mixed Integer Programming Modeling.</strong> 
                    <ul>
                    <li> The objective of this task is to generate modeling code for optimization model given problem description.</li>
                    </ul> </p>
                </a>
            </div>
            <div class="card-box-second">
                <div class="card-box2 lightgreen-bg some-space1">
                    <a class="nodeco" href="/neurips-2024/starterkit/">
                        <h2 class="black">Dataset</h2>
                        <p>The training and development splits of the dataset will be released when the competition kicks-off. Stay tuned or
                        <a class="deco" href="/neurips-2024/participate"> sign-up for updates! </a>
                        <p>
                    </a>
                </div>
                <div class="space-btn-cards">
                </div>
                <div class="card-box2 lightgreen-bg some-space2">
                    <a class="nodeco" href="/neurips-2024/evaluation/">
                        <h2 class="black">Evaluation</h2>
                        <p><strong>Task 1 and 2:</strong> We will use the accuracy metric to compare the submissions.</p>
                    </a>
                </div>
            </div>
            <div class="card-box fuchsia-bg">
                <a class="nodeco" href="#prizes">
                    <h2 class="black">Prizes</h2>
                    <p>A total monetary prize of $21,000 USD will be awarded. The 5 best winning submissions will be awarded the following prizes:</p>
                    <ul>
                        <li>1st place: $6,000</li>
                        <li>2nd place: $3,000</li>
                        <li>3rd place: $1,000</li>
                        <li>Student award: $500 for the highest-ranking student groups outside the top 3</li>
                    </ul>
                </a>
            </div>
        </div>
    </body>
</html>
<style>
    .all-card-boxes {
        display: flex;
        justify-content: space-between;
        direction: row;
        padding-top: 20px;
    }
    .card-box {
        border-radius: 15px;
        padding: 20px;
        width: calc(33.33% - 20px);
        margin-right: 20px;
        border: 1px solid black;
    }
    .card-box-second {
        border-radius: 15px;
        width: calc(33.33% - 20px);
        margin-right: 20px;
        text-decoration: none;
    }
    .card-box2 {
        border-radius: 15px;
        padding: 10px;
        border: 1px solid black;
        justify-content: space-between;
    }
    .space-btn-cards {
        background-color: white;
    }
    .some-space1 {
        margin-bottom: 30px;
    }
    .some-space2 {
    }
    .yellow-bg {
        background-color: #FCFFAB;
    }
    .lightgreen-bg {
        background-color: #D1EBA4;
    }
    .fuchsia-bg {
        background-color: lightblue;
    }
    .black {
        color: #000000;
    }
    .nodeco {
        text-decoration: none;
    }
    .deco{
        color: blue;
        text-decoration: underline;
    }
    .card-box a {
        text-decoration: none; /* remove underline */
        display: inline-block;
        padding: 0; /* remove default padding */
        cursor: pointer;
    }
    .some-space1 a {
        text-decoration: none; /* remove underline */
        display: inline-block;
        padding: 0; /* remove default padding */
        cursor: pointer;
    }
    .some-space2 a {
        text-decoration: none; /* remove underline */
        display: inline-block;
        padding: 0; /* remove default padding */
        cursor: pointer;
    }
    .card-box a:visited {
        color: inherit; /* maintain text color after clicked */
    }
    .card-box2 a:visited {
        color: inherit; /* maintain text color after clicked */
    }
    .card-box a:focus {
        outline: none; /* remove focus outline */
    }
    .card-box:hover {
        box-shadow: 10px 10px 0px 0px black;
        transform: translateY(-5px);
        transition: all 0.3s ease-in-out;
    }
    .some-space1:hover{
        box-shadow: 10px 10px 0px 0px black;
        transform: translateY(-5px);
        transition: all 0.3s ease-in-out;
    }
    .some-space2:hover{
        box-shadow: 10px 10px 0px 0px black;
        transform: translateY(-5px);
        transition: all 0.3s ease-in-out;
    }
    @media only screen and (max-width: 600px) {
        .all-card-boxes {
                 flex-direction: column;
         }
         .card-box {
            width: 90%;
            padding-top: 10px;
            text-decoration: none;
         }
        .card-box-second {
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            text-decoration: none;
        }
        .some-space1 {
            padding-top: 10px;
        }
        .some-space2 {
            padding-top: 10px;
        }
        .card-box2 {
            margin-bottom: 20px;
        }
        .card-box2:last-child {
            margin-bottom: 0;
        }
        .card-box:hover {
            box-shadow: 10px 10px 0px 0px black;
            transform: translateY(-5px);
            transition: all 0.3s ease-in-out;
        }
        .some-space1:hover{
            box-shadow: 10px 10px 0px 0px black;
            transform: translateY(-5px);
            transition: all 0.3s ease-in-out;
        }
        .some-space2:hover{
            box-shadow: 10px 10px 0px 0px black;
            transform: translateY(-5px);
            transition: all 0.3s ease-in-out;
        }
    }
</style>

# Important Dates

The following dates use the [anywhere on earth (AoE)](https://www.timeanddate.com/time/zones/aoe) time zone:

| Event                                                                                                                                   | Date                |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **Competition kickoff.** The registration is opened and participants can download the starter-kit and the training/validation datasets. | July 15th, 2024     |
| **Leaderboard opens and submissions accepted.**                                                                                         | July 22nd, 2024     |
| **Q&A sessions.** We host two Q&A sessions to help with submission. One in the morning and one at night in PST.                         | July 26th, 2024     |
| **Deadline for submission.**                                                                                                            | October 22nd, 2024  |
| **Winners notification,** and instruction to provide information for workshop report                                                    | November 4th, 2024  |
| **Report submission deadline.**                                                                                                         | November 25th, 2024 |
| **NeurIPS 2024 competition workshop.**                                                                                                  | December 2024       |

# Introduction

The Natural Language for Optimization (NL4Opt) NeurIPS 2024 competition aims to improve the accessibility and usability of optimization solvers. This year's competition is the second part of the NL4Opt competition series at NeurIPS and is titled "NL4Opt: Large Language Models for Mathematical
Modeling".  Submission, evaluation, and leaderboard updates will be facilitated using the Codabench platform. You can access our instance of Codabench at: [https://www.codabench.org/competitions/2598/](https://www.codabench.org/competitions/2598/)

**Novelty:** This competition includes a new challenging task for a fresh benchmark dataset.

> ### Challenges Faced in These Tasks

> The proposed tasks face several challenges, including data scarcity, interpretation of specification descriptions, robustness, domain-agnosticism, synchronization between generated code and partial code, complex rules and conventions, handling of one-to-many relationships, and model complexity.

> > * **Data Scarcity** -  There is a limited amount of publicly available data to train language models for generating optimization modeling codes. This can be particularly challenging when the problems are complex and have unique elements.

> > * **Interpretation of Problem Descriptions** -  The machine learning model must identify related model elements and their relationships, which is challenging due to the high degree of compositionality and ambiguity in specification descriptions, varying across problem domains and structures.

> > * **Robustness** -  Generating modeling code with language models must be robust and reliable, even when faced with new or unseen problem specifications. Ensuring the robustness of the generated model requires careful testing and validation to ensure that the model performs well on a wide range of inputs.

> > * **Domain-Agnosticism** -  Optimization models can be applied to disparate problem domains, and the language model must generalize not only to new problem instances but also to new application domains.

> > * **Complex Rules and Conventions** -  Ensuring that the generated code adheres to the rules and conventions of the optimization modeling language is essential for ensuring the correctness and accuracy of the generated model.

> > * **Handling of One-to-Many Relationships** -  Sometimes, it is required to generate more than one constraint to handle a specific specification, and there is not a one-to-one relationship between the specifications and the model expressions. This requires careful consideration of the relationships between problem specifications and the corresponding model expressions, as well as the development of techniques to generate multiple constraints or expressions to capture these relationships.

**Relevant resources:**

- [Introduction to Operations Research - Juraj Stacho](https://www.cs.toronto.edu/~stacho/public/IEOR4004-notes1.pdf)

- [Logic-LM: Empowering Large Language Models with Symbolic Solvers for Faithful Logical Reasoning](https://arxiv.org/abs/2305.12295)

- [OptiMUS: Optimization Modeling Using MIP Solvers and large language models](https://arxiv.org/abs/2310.06116)

# <span id="prizes">Prizes</span>

A total monetary prize of $21,000 USD will be awarded. The best winning submissions will be awarded the following prizes:

- **1st place:** $6,000, along with a comprehensive package covering partial travel expenses for the in-person presentation at NeurIPS

- **2nd place:** $3,000, plus partial travel expense coverage

- **3rd place:** $1,000, including partial travel expense support

- **Student award:** $500 for the highest-ranking student groups outside the top 3

Participants in the competition will receive a certificate of participation and winners will have the opportunity to present their work at the workshop. Academic and industry leaders will also be invited as keynote speakers. The organizers are also eager to collaborate with participants on the competition proceeding.
