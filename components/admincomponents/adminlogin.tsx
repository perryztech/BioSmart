"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

// Define the schema using Zod
const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

// ✅ Define TypeScript Type from Zod Schema
type FormSchemaType = z.infer<typeof formSchema>;

export function AdminLoginForm() {
  const router = useRouter();
  const { toast } = useToast();

  // ✅ Initialize `useForm()` with TypeScript support
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ✅ Define `onSubmit` function with TypeScript
  const onSubmit = async (values: FormSchemaType) => {
    try {
      await account.createEmailPasswordSession(values.email, values.password);
      router.push("/admin/dashboard"); // redirect to admin dashboard
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Invalid credentials. Please try again.",
        });
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  className="rounded-3xl border border-[#00563B]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="rounded-3xl text-black border border-[#00563B]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs font-medium text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <p className="text-xs font-bold hover:underline cursor-pointer">
            Forgot Password?
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-black text-white rounded-3xl hover:bg-white duration-500 hover:text-black hover:border-4 hover:border-black"
        >
          {form.formState.isSubmitting ? "Logging in..." : "Log In"}{" "}
        </Button>
      </form>
    </Form>
  );
}
