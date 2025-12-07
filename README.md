This is a mock up example of a dashboard displaying information to someone in the middle of studying for the SAT.

# Technical decisions

The design uses separation of concerns for each interface, method, and component.

## Components
Each component was broken into its own file to be called by the Dashboard page with the relevant data.
Maintaining clean separation of concerns and a clear hierarchy.

## Data
The app needs to simulate real API calls, so methods were implemented to "call" some back-end for relevant
data to build the dashboard.

## Types
Each API call to the back-end will return objects that should be reflected in the front-end.
Types for each call were implemented to be used for the components to build using the relevant data.

# Product design decisions

## Multi-level progress tracking
Overall progress is shown first, then broken down by subject, then by individual topics. This allows students to understand both their high-level trajectory and specific areas needing work.

## Countdown and engagement metrics
The test date countdown creates urgency. Study streak, total hours, and questions answered provide motivation and encourage daily engagement.

## Weak areas identification
Low-accuracy topics are surfaced proactively with specific guidance on how many questions to practice. Students don't need to dig through data to find problem areas.

## Color-coded mastery
Topics use red/yellow/green indicators for instant visual feedback on mastery levels.

## Daily recommendations
Personalized study suggestions with time estimates tell students exactly what to work on, reducing decision fatigue.

## Practice test history
Recent test scores are displayed with the latest highlighted, showing performance trends over time.

## Layout hierarchy
The most critical information (overall progress and score gap) spans the full width at the top. Detailed breakdowns are arranged in a responsive grid below.
