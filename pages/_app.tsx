import "@/styles/globals.css";
import "@/styles/AgGridCustom.css";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "react-toastify/dist/ReactToastify.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
