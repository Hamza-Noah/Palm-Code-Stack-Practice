import { Textarea } from '@mantine/core';
import { useState } from 'react';

export default function RequestMessage() {
    const [value, setValue] = useState('');


    console.log(value);
    

  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      size="md"
      label="Provide Details For Leaving"
      placeholder="Details..."
      radius={"sm"}
      minRows={4} 
      maxRows={10}
    />
  );
}
