import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {DottedSeparator} from "@/components";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import Link from "next/link";

const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required")
});

export const SignInCard = () => {
    const signInForm = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = (value: z.infer<typeof signInSchema>) => {
        console.log(value);
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome Back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...signInForm}>
                    <form className="space-y-4" onSubmit={signInForm.handleSubmit(onSubmit)}>
                        <FormField
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter email address"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            name="email"
                            control={signInForm.control}
                        />
                        <FormField
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Enter password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            name="password"
                            control={signInForm.control}
                        />
                        <Button
                            size="lg"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                >
                    <FcGoogle className="mr-2 size-5"/>
                    Login with Google
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                >
                    <FaGithub className="mr-2 size-5"/>
                    Login with GitHub
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex items-center justify-center">
                <p>
                    Don&apos;t have an account?&nbsp;
                    <Link href="/sign-up">
                        <span className="text-blue-700">Sign up</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}