import { DateInput } from '@mantine/dates';
import { useState } from 'react';


export default function StartDate() {
    const [value, setValue] = useState<string | null>(null);
console.log(value);

  return <>
   <DateInput 
      onChange={setValue}
    value={value}
   valueFormat="YYYY MMM DD" label="Start Date" placeholder="Start Date" /></>;
}