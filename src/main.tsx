import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import './index.css'
import App from './App.tsx'
import { DatesProvider } from '@mantine/dates';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={{}}>
      <DatesProvider  settings={{ locale: 'en', firstDayOfWeek: 0 }}>
        <App />
      </DatesProvider>
    </MantineProvider>
  </StrictMode>,
)
