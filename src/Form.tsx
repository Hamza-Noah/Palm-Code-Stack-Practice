import "@mantine/core/styles.css";
import { Toaster } from "react-hot-toast";
import { Button, Checkbox, Flex, Group } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";

function Form() {
  // type FormValues = {
  //     reason: null;
  //     firstDate: Date | null;
  //     lastDate: Date | null;
  //     message: string; //
  //   };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      termsOfService: false,
      reason: null,
      firstDate: null,
      lastDate: null,
      message: "",
    },
  });

  return (
    <>
      <h1>Applying For Leave</h1>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
          key={form.key("reason")}
          {...form.getInputProps("reason")}
          clearable
        />
        <Flex gap={"md"}>
          
            <DateInput
               style={{ flex: 1 }}
              label="Start Date"
              placeholder="Select Date"
              valueFormat="YYYY MMM DD"
              key={form.key("firstDate")}
              {...form.getInputProps("firstDate")}
            />
            <DateInput
               style={{ flex: 1 }}

              label="Last Date"
              placeholder="Select Date"
              valueFormat="YYYY MMM DD"
              key={form.key("lastDate")}
              {...form.getInputProps("lastDate")}
            />
        </Flex>
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
