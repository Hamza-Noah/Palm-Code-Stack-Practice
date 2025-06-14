import "@mantine/core/styles.css";
import { Toaster, toast } from "react-hot-toast";
import {
  Button,
  Checkbox,
  Flex,
  Group,
  NumberInput,
  Text,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMemo } from "react";
import reasonsForHoliday from "./reasonForLeave.enum";

function Form() {
  const form = useForm({
    mode: "controlled",
    initialValues: {
      termsOfService: false,
      reason: null,
      firstDate: null,
      lastDate: null,
      creditAvailableForEmployee: null,
      message: "",
    },
  });

  const daysRequested = useMemo(() => {
    const { firstDate, lastDate } = form.values;
    if (firstDate && lastDate) {
      const start = new Date(firstDate).getTime();
      const end = new Date(lastDate).getTime();
      return Math.ceil((end - start) / (1000 * 60 * 60 * 24) + 1);
    }
    return 0;
  }, [form.values.firstDate, form.values.lastDate]);

  return (
    <>
      <h1>Applying For Leave</h1>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          if (
            form.values.creditAvailableForEmployee !== null &&
            daysRequested > form.values.creditAvailableForEmployee
          ) {
            toast.error(
              "Holiday request denied: Not enough holiday credit for the selected days."
            );
          } else {
            toast.success("Holiday Request Has been Successfully!");
          }
        })}
      >
        <Select
          label="Reason for Leave"
          placeholder="Choose a Reason"
          data={reasonsForHoliday}
          key={form.key("reason")}
          {...form.getInputProps("reason")}
          clearable
        />
        <Flex gap={"md"} mt={25} mb={10}>
          <DateInput
            style={{ flex: 1 }}
            label="Start Date"
            placeholder="Select Date"
            valueFormat="YYYY MMM DD"
            key={form.key("firstDate")}
            {...form.getInputProps("firstDate")}
            minDate={new Date()}
          />
          <DateInput
            style={{ flex: 1 }}
            label="Last Date"
            placeholder="Select Date"
            valueFormat="YYYY MMM DD"
            key={form.key("lastDate")}
            {...form.getInputProps("lastDate")}
            minDate={form.values.firstDate || new Date()}
          />
          <NumberInput
            label="Your Available Days"
            placeholder="Input placeholder"
            {...form.getInputProps("creditAvailableForEmployee")}
            key={form.key("creditAvailableForEmployee")}
            clampBehavior="strict"
            suffix=" Days"
            min={0}
            max={30}
          />
        </Flex>
        {form.values.creditAvailableForEmployee && (
          <Text
            mb={20}
            c={
              daysRequested > form.values.creditAvailableForEmployee
                ? "red"
                : "dimmed"
            }
          >
            Requesting {daysRequested} day(s)
          </Text>
        )}
        <Textarea
          style={{ flex: 1 }}
          size="md"
          label="Provide Details For Leaving"
          placeholder="Details..."
          radius={"sm"}
          minRows={4}
          maxRows={10}
          key={form.key("message")}
          {...form.getInputProps("message")}
        />
        <Checkbox
          mt="md"
          label="I agree that this may be deducted from my holiday credit."
          key={form.key("termsOfService")}
          {...form.getInputProps("termsOfService")}
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      <Toaster />

      <br />
    </>
  );
}

export default Form;
