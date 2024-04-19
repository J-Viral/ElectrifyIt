# ElectrifyIt

Project Overview

Technologies Used

Frontend Framework: React

UI Libraries: Flowbite, Tailwind CSS

Backend Technologies: Node.js, Express.js

Database: Supabase

Features

Dashboard

The project dashboard provides data visualization with the following frequency options:


Daily

Weekly

Monthly

Yearly

Validation

Backend Validation: All data validations are handled on the server-side.

Frontend Validation: Additional validations are implemented on the client-side to ensure data integrity and consistency.

Deployment

Frontend: Deployed using Deno

Backend: APIs are deployed on Render

Date Format

Users are required to pass dates in a specific format. Failure to do so will result in an error.



Data Frequency

The displayed data corresponds to the frequency selected by the user. Ensure the correct frequency is provided to view accurate data.



Cases Considered

1. Daily Report Mismatch

Issue: If the provided date does not match any data in the database for the daily report.

Action: An error message will be displayed indicating "No record found."

2. Empty Fields Submission

Issue: If fields are submitted empty by the user.

Action: An error message will be displayed indicating "Field is empty."

3. Frequency Format

Issue: If the frequency provided is not in a valid format (e.g., not 2 digits).

Action: An error message will be displayed indicating the incorrect format.

Resources

The following resources were instrumental in the development of this project:



Internet research

ChatGPT

This document provides an overview of the project, detailing the technologies used, key features, and deployment strategies, along with 
the cases considered for error handling and validation.

