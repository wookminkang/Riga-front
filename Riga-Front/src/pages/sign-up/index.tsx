import {
  Button,
  Input,
  Card,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Separator,
} from "@/components/ui"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

/* 회원가입 폼 스키마 */
const signUpFormSchema = z.object({
  email: z.email({
    message: "이메일 형식에 맞게 입력해주세요.",
  }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상 입력해주세요." }),
})

function SignUp() {
  const signUpForm = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof signUpFormSchema>) => {
    console.log(`user form data:`, data)

    if (!data.email || !data.password) return
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-1xl">
        <div className="flex flex-col gap-6"></div>
        <div className="w-full max-w-sm md:max-w-4xl">
          <Card className="px-6 py-12">
            <div className="text-xl font-bold text-center mb-6 flex flex-col items-center gap-3">
              회원가입을 진행해주세요.
            </div>
            <Form {...signUpForm}>
              <form
                onSubmit={signUpForm.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={signUpForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="이메일을 입력해주세요."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export { SignUp }
