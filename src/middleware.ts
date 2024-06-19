
import { auth } from "@/auth"
 
// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/login") {
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("ROUTE: ", req.nextUrl.pathname);
    console.log("IS LOGGED IN: ", isLoggedIn);
})

// Optionally, don't invoke Middleware on some paths 
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}