"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import google from '@/public/google.png';
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
import Image from "next/image";

// Define the schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

// ✅ Define TypeScript Type from Zod Schema
type FormSchemaType = z.infer<typeof formSchema>;

export function LoginForm() {
  // ✅ Initialize `useForm()` with TypeScript support
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // ✅ Define `onSubmit` function with TypeScript
  const onSubmit = (values: FormSchemaType) => {
    console.log(values); // Handle form submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="joe@gmail.com"
                  className="rounded-3xl border border-[#00563B]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
              <FormMessage />
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
          className="w-full bg-[#00563B] text-white rounded-3xl hover:bg-white duration-500 hover:text-black hover:border-4 hover:border-[#00563B]"
        >
          Log In
        </Button>
        <Button
          type="button"
          className="w-full rounded-3xl border border-gray-300 bg-white text-black hover:border-[#00563B] hover:border-2"
        >
          <Image src={google} alt="google icon" width={20} height={20} />
          Sign in with Google
        </Button>
      </form>
    </Form>
  );
}
