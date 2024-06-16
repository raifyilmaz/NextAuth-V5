import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    })
})

/* 
 if you want to change error messages,
 or create a new messages on login form for email,
 you should write on of those on line 4;
```
    email: z.string().email({
        message: 'Please enter your email'
    }),
```
*/ 