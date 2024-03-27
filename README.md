# toy robot unit test

This is a project that utilizes Selenium WebDriver to perform automated testing on a web application.

## Installation

1. Clone this repository to your local machine using `git clone https://github.com/Junta1980/toy_robot_test`.
2. Navigate to the project directory: `cd directory-name`.
3. Install dependencies using npm or yarn: `npm install` or `yarn install`.

## Usage
The project is configured to run several test scripts using Mocha and selenium-webdriver. Here are the available scripts:

1. npm run all: Runs all tests.
2. npm run place: Runs tests related to robot positioning.
3. npm run moveRotate: Runs tests related to robot movement and rotation.
4. npm run wrongInput: Runs tests related to incorrect inputs.
5. npm run report: Runs tests related to report.

The scripts generate verification file:
1. all: reportAll.log
2. place: report-place.log
3. moveRotate: report-moverotate.log
4. wrongInput: report-inputwrong.log
5. report: report-report.log

Before running the scripts, check the config.json present in the config directory and check or set the correct URL
