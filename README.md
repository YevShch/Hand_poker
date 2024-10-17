 🃏 ♠️A ♥️K ♣️Q ♦️J ♠️10 🃏
## ♠️ Poker hand comparer -
## Workshop on Writing Unit Tests and Running via GitHub Actions

### Workshop Overview
This workshop focused on developing a poker hand comparison program, writing unit tests, integrating tests with GitHub Actions, and using HiVat testing to verify various poker hand combinations.

### What was done:

**Developing and Testing the Poker Hand Comparison Program:** 
 During the workshop, a program for comparing poker hands was developed. Unit tests were written to validate the correctness of the program, covering:

- Positive Tests — Verifying correct behavior when a specific combination of cards is present.
- Negative Tests — Verifying correct behavior when no combination of cards is present.
- Comparative Tests — Verifying the correct winner when both hands have combinations, and the correct hand should win or score higher.

**Using HiVat Testing (Highly Variable Automated Testing):** 
 HiVat tests were introduced and implemented, allowing testing of the program using highly variable data sets. HiVat tests cover a wide range of scenarios and allow for extensive testing of the program across different card combinations. Data for the HiVat tests was sourced from **[HIVAT-data for poker hands](http://suffe.cool/poker/7462.html).**

**Automating Tests via GitHub Actions:** 
All tests, including unit tests and HiVat tests, were integrated with GitHub Actions, enabling automatic test execution on each code change. This ensures that the program continues to function correctly as the code evolves.

### How to Install the Project and Run Tests
To set up the project and test the poker hand comparison program on your machine, follow these steps:  
1. Clone the Repository to your local machine.
2. Install Dependencies:
Ensure you have Node.js installed. Then, install the necessary dependencies: 
```bash
npm install
```
3. Run the Program:
Once the dependencies are installed, you can run the poker hand comparison program:
```bash
npm start
```
4. **Set up unit testing with Vitest:**
To enable unit testing, you need to install Vitest as a development dependency. Run the following command in the terminal:

```bash
npm install -D vitest
```
After installation, you can run your tests using the command:

```bash
npm test
```
5. **Run Vitest UI for Browser-Based Test Results (Optional):**
If you prefer to view your test results in a browser interface, you can install Vitest UI. Use the following command to install it:

```bash
npm install @vitest/ui --save-dev
```
After installation, start the UI with:

```bash
npx vitest --ui
```
