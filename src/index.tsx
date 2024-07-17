/* @refresh reload */
import "@unocss/reset/tailwind.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import "virtual:uno.css";

import { render } from 'solid-js/web';
import App from './App';

render(
  () => <App />,
  document.getElementById('root') as HTMLDivElement
);
