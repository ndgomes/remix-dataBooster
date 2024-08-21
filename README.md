# Data Booster Application

## Overview

The Data Booster application is designed to provide a user-friendly interface for engaging with educational exercises. Users can navigate through various exercises which include video content and multiple-choice questions.

## Project Structure

- **routes/\_index.tsx**: The main entry point for the application, handling data fetching, state management, and rendering of the exercise content.
- **ui/videoExercise.tsx**: Component for displaying video exercises.
- **ui/multipleChoiceExercise.tsx**: Component for displaying multiple-choice exercises.
- **ui/buttons.tsx**: Components for navigation buttons (left and right).

## Features

1. **Video Exercises**:

   - Displays a video embedded via an `iframe`.
   - Responsive design ensuring the video scales appropriately on various screen sizes.

2. **Multiple Choice Exercises**:

   - Users can select from a list of answers.
   - Custom-styled radio buttons for improved visual consistency.

3. **Navigation Buttons**:
   - Users can navigate between exercises using "Previous" and "Next" buttons.
   - Buttons are hidden when navigation is not possible (e.g: at the beginning or end of the list).

## Implementation Details

### Data Handling

- Data is read from a JSON file (`/lib/lessons.json`) and parsed to provide exercises and lessons.

### Styling

- **Tailwind CSS** is used for styling, ensuring a responsive and modern look.

### Responsive Design

- The video player and exercise components are designed to be responsive, adapting to different screen sizes.

## Additional Features

Given more time, the following features would be implemented:

1. **User Authentication**:

   - Implement user login and registration functionality to track progress and customize user experience.

2. **Progress Tracking**:

   - Add functionality to save and display user progress across exercises.

3. **Enhanced Accessibility**:

   - Ensure that the application meets all accessibility standards, including keyboard navigation and screen reader support.

4. **Interactive Feedback**:

   - Provide instant feedback on multiple-choice answers to enhance the learning experience.

5. **Additional Exercise Types**:

   - Introduce other types of exercises such as drag-and-drop activities or fill-in-the-blank questions.

6. **Localization and Internationalization**:
   - Support multiple languages to reach a broader audience.

## Setup and Installation

To set up the project locally, follow these steps:

```bash
git clone https://github.com/ndgomes/remix-dataBooster.git
cd remix-dataBooster
pnpm i
pnpm dev
```
