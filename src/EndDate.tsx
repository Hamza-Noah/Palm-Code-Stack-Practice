import { DateInput } from '@mantine/dates';
import { useState } from 'react';

export default function EndDate() {
  const [value, setValue] = useState<string | null>(null);

  
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}


