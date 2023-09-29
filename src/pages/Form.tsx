import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { formSchema, type FormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

export const FormPage = () => {
  const { toast } = useToast();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: {
        day: "",
        month: "",
        year: "",
      },
      favouriteColour: "",
      salaryRange: [60, 130],
    },
  });

  const salaryRange = form.watch("salaryRange");

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);

    toast({
      title: "Form submitted successfully",
      description: "Check the console to see the data",
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 grid-cols-12"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormControl>
                <div className="space-y-0.5">
                  <Label htmlFor={field.name}>First Name</Label>
                  <Input placeholder="First Name" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormControl>
                <div className="space-y-0.5">
                  <Label htmlFor={field.name}>Last Name</Label>
                  <Input placeholder="Last Name" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormControl>
                <div className="space-y-0.5">
                  <Label htmlFor={field.name}>Email</Label>
                  <Input type="email" placeholder="Email" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="grid col-span-full gap-2 grid-cols-12">
          <Label className="col-span-full">Date of Birth</Label>
          <FormField
            control={form.control}
            name="dob.day"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <div className="space-y-0.5">
                    <Label htmlFor={field.name}>Day</Label>
                    <Input placeholder="Day" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob.month"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <div className="space-y-0.5">
                    <Label htmlFor={field.name}>Month</Label>
                    <Input placeholder="Month" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob.year"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <div className="space-y-0.5">
                    <Label htmlFor={field.name}>Year</Label>
                    <Input placeholder="Year" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <FormField
          control={form.control}
          name="favouriteColour"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormControl>
                <div className="space-y-0.5">
                  <Label htmlFor={field.name}>Favourite Colour</Label>
                  <Input placeholder="Favourite Colour" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="col-span-12 grid gap-4">
          <Label>
            Salary Range (£{salaryRange[0]}k - £{salaryRange[1]}k
            {salaryRange[1] === 250 ? "+" : null})
          </Label>
          <Slider
            defaultValue={
              form.formState.defaultValues?.salaryRange as [number, number]
            }
            min={30}
            max={250}
            step={5}
            onValueChange={(val) =>
              form.setValue("salaryRange", val as [number, number])
            }
            className=""
          />
        </fieldset>
        <Button
          type="submit"
          className="col-span-4 col-start-5 my-6 py-6 text-lg font-semibold"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
