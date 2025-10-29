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

/* 아이콘 */
import { LogIn } from "lucide-react"

/* 아이디 폼 스키마 */
const idFormSchema = z.object({
  email: z.email({
    message: "이메일 형식에 맞게 입력해주세요.",
  }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 8자 이상 입력해주세요." })
    .regex(/[A-Z]/, { message: "대문자를 최소 1자 포함해야 합니다." })
    .regex(/[a-z]/, { message: "소문자를 최소 1자 포함해야 합니다." })
    .regex(/[0-9]/, { message: "숫자를 최소 1자 포함해야 합니다." })
    .regex(/[^A-Za-z0-9]/, { message: "특수문자를 최소 1자 포함해야 합니다." }),
})

function SignIn() {
  const signInForm = useForm<z.infer<typeof idFormSchema>>({
    resolver: zodResolver(idFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof idFormSchema>) => {
    console.log(`user form data:`, data)

    if (!data.email || !data.password) return

    try {
      // 서버 API 호출
    } catch (error) {
      // 에러 문구 출력
    }

    // 회원 이메일과 비밀번호 검증은 완료, 서버에 이메일과 패스워드 전달
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-1xl">
        <div className="flex flex-col gap-6"></div>
        <div className="w-full max-w-sm md:max-w-4xl">
          <Card className="px-6 py-12">
            <Form {...signInForm}>
              <form
                onSubmit={signInForm.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={signInForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>아이디</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="아이디를 입력해주세요."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>비밀번호</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="비밀번호를 입력해주세요."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant={"default"} className="w-full">
                  로그인
                </Button>

                <Separator className="my-2 !h-[1px]" />

                <div className="text-center text-sm text-muted-foreground mt-5">
                  계정이 없으신가요?{" "}
                  <span className="text-primary cursor-pointer text-underline">
                    회원가입
                  </span>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export { SignIn }
