import "@mantine/core/styles.css";
import { Toaster } from "react-hot-toast";
import { Button, useComputedColorScheme } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { useMantineColorScheme, ActionIcon  } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';



function Form() {

  const computedColorScheme = useComputedColorScheme();

  const { setColorScheme } = useMantineColorScheme();

  return (
    <>

  <ActionIcon
      variant="outline"
      color={computedColorScheme === 'dark' ? 'yellow' : 'blue'}
      onClick={() =>
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
      }
      title="Toggle color scheme"
    >
      {computedColorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
      <h1>Applying For Leave</h1>

      <form
      >
            <Select
              label="Reason for Leave"
              placeholder="Choose a Reason"
              data={[
                "Vacation",
                "Family",
                "Illness",
                "Travel",
                "Personal",
                "Emergency",
                "Study",
                "Wedding",
                "Rest",
                "Bereavement",
                "Other",
              ]}
                clearable
            />
        <div className="d-flex">
              <DateInput
                label="Start Date"
                placeholder="Select Date"
                valueFormat="YYYY MMM DD"
              />
              <DateInput
                label="Last Date"
                placeholder="Select Date"
                valueFormat="YYYY MMM DD"
              />
        </div>

            <Textarea
              size="md"
              label="Provide Details For Leaving"
              placeholder="Details..."
              radius={"sm"}
              minRows={4}
              maxRows={10}
            />
        <Button mt={20} type="submit">
          Send Request
        </Button>
      </form>
      <Toaster />

      <br />
    </>
  );
}

export default Form;
