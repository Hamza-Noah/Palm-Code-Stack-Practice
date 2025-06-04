import "@mantine/core/styles.css";
import { Toaster, toast } from "react-hot-toast";
import { Button, useComputedColorScheme } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { useMantineColorScheme, ActionIcon  } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';


import { useForm, Controller } from "react-hook-form";

function Form() {
  type FormValues = {
    reason: null;
    firstDate: Date | null;
    lastDate: Date | null;
    message: string; //
  };

  const computedColorScheme = useComputedColorScheme();

  const { setColorScheme } = useMantineColorScheme();
  const { handleSubmit, control, reset } = useForm<FormValues>();

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
        onSubmit={handleSubmit((data) => {
          console.log(data);
          toast.success("Leave request sent!");
          reset({
            reason: null,
            firstDate: null,
            lastDate: null,
            message: "",
          });
        })}
      >
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
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
              {...field}
            />
          )}
        />
        <div className="d-flex">
          <Controller
            name="firstDate"
            control={control}
            render={({ field }) => (
              <DateInput
                label="Start Date"
                placeholder="Select Date"
                valueFormat="YYYY MMM DD"
                {...field}
              />
            )}
          />
          <Controller
            name="lastDate"
            control={control}
            render={({ field }) => (
              <DateInput
                label="Last Date"
                placeholder="Select Date"
                valueFormat="YYYY MMM DD"
                {...field}
              />
            )}
          />
        </div>

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Textarea
              size="md"
              label="Provide Details For Leaving"
              placeholder="Details..."
              radius={"sm"}
              minRows={4}
              maxRows={10}
              {...field}
            />
          )}
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
