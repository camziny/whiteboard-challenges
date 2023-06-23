import React from "react";

type Task = {
  run: () => Promise<void>;
};
type Step = {
  name: string;
  tasks: Task[];
};
type TaskStatus = "not started" | "in progress" | "finished" | "failed";
type StepStatus = {
  name: string;
  taskStatuses: TaskStatus[];
};
const executeTasks = async (tasks: Task[]): Promise<TaskStatus[]> => {
  const taskStatuses: TaskStatus[] = [];
  for (const task of tasks) {
    taskStatuses.push("in progress");
    try {
      await task.run();
      taskStatuses[taskStatuses.length - 1] = "finished";
    } catch (e) {
      taskStatuses[taskStatuses.length - 1] = "failed";
    }
  }
  return taskStatuses;
};
const executeSteps = async (steps: Step[]): Promise<StepStatus[]> => {
  const stepStatuses: StepStatus[] = [];
  for (const step of steps) {
    const taskStatuses = await executeTasks(step.tasks);
    stepStatuses.push({ name: step.name, taskStatuses });
  }
  return stepStatuses;
};
const App = () => {
  const [stepStatuses, setStepStatuses] = React.useState<StepStatus[]>([]);
  React.useEffect(() => {
    const steps: Step[] = [
      {
        name: "Step1",
        tasks: [
          {
            run: async () =>
              await new Promise((resolve) => setTimeout(resolve, 1000)),
          },
          {
            run: async () =>
              await new Promise((resolve) => setTimeout(resolve, 2000)),
          },
        ],
      },
      {
        name: "Step2",
        tasks: [
          {
            run: async () =>
              await new Promise((resolve) => setTimeout(resolve, 3000)),
          },
          {
            run: async () =>
              await new Promise((resolve) => setTimeout(resolve, 4000)),
          },
        ],
      },
    ];
    executeSteps(steps).then(setStepStatuses);
  }, []);
  return (
    <ul>
      {stepStatuses.map((step) => (
        <li key={step.name}>
          {step.name}
          <ul>
            {step.taskStatuses.map((taskStatus, i) => (
              <li key={i}>{taskStatus}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
export default App;
