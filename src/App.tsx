import * as React from "react";
import "./styles.css";

// import the progress bar
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;

function step2Validator() {
  // return a boolean
  return true;
}

function step3Validator() {
  // return a boolean
  return true;
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <StepProgressBar
        startingStep={0}
        onSubmit={App}
        steps={[
          {
            label: "Step 1",
            name: "step 1",
            content: step1Content
          },
          {
            label: "Step 2",
            name: "step 2",
            content: step2Content,
            validator: step2Validator
          },
          {
            label: "Step 3",
            name: "step 3",
            content: step3Content,
            validator: step3Validator
          }
        ]}
      />
    </div>
  );
}
