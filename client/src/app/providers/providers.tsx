/** @format */
"use client";

import { theme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};
export default Providers;
