import { ComponentType } from "react";
import { Tool } from "sanity";
import { Card, Text, DashboardIcon } from "@sanity/ui";

export interface MyCustomToolOptions {
  customString?: string;
}

export interface MyCustomToolProps {
  component: ComponentType<{
    tool: Tool;
  }>;
}

export const myCustomTool = (options: MyCustomToolOptions) => {
  return {
    title: "My Custom Tool",
    name: "my-custom-tool",
    icon: DashboardIcon,
    component: () => (
      <Card>
        <Text>My custom tool!</Text>
        {options.customString}
      </Card>
    ),
  };
};
