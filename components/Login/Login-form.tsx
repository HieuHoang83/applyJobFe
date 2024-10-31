// "use client";

// import Link from "next/link";

// import {
//   CardTitle,
//   CardDescription,
//   CardHeader,
//   CardContent,
//   CardFooter,
//   Card,
// } from "@/components/ui/card";

// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";

// export function LoginForm() {
//   return (
//     <div className="w-full max-w-md">
//       <form>
//         <Card>
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
//             <CardDescription>
//               Enter your details to sign in to your account
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="identifier"
//                 name="identifier"
//                 type="text"
//                 placeholder="username or email"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder="password"
//               />
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col">
//             <button className="w-full"><Link href={'/job'}>Log In</Link></button>
//           </CardFooter>
//         </Card>
//         <div className="mt-4 text-center text-sm">
//           Don't have an account?
//           <Link className="underline ml-2" href="/signup">
//             Sign Up
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { LoginSchema } from "@/schema/LoginSchema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  function onSubmit(values: z.infer<typeof LoginSchema>) {
    //
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormDescription>
                Địa chỉ email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="...." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

