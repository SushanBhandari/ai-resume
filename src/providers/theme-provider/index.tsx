import React from "react";
import { ConfigProvider } from "antd";
import { ChildProcess } from "child_process";
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: " #0390fc",
          borderRadius: 2,
        },
        components: {
          Button: {
            controlHeight: 42,
          },
          Input: {
            controlHeight: 45,
            controlOutline: "none",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
