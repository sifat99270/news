import { NextResponse } from "next/server";
import { VerifyToken } from "./app/utility/token";


export default async function middleware(req, res) {
    try {
        const token = req.cookies.get('token')
        const path = req.nextUrl.pathname;
        if (!token && path.startsWith('/api/comments/manage')) {
            return NextResponse.redirect(new URL('/', req.url));
        }
        if (path.startsWith('/login') || path.startsWith('/sign')) {
            if (!token) {
                return NextResponse.next()
            }
            if (token) {
                return NextResponse.redirect(new URL('/', req.url));
            }

        }
        const result = await VerifyToken(token['value'])
        const requestHeader = new Headers(req.headers);
        requestHeader.set('email', result['email'])
        requestHeader.set('id', result['id'])
        return NextResponse.next({ request: { headers: requestHeader } })
    } catch (e) {

        const requestHeader = new Headers(req.headers);
        requestHeader.set('email', '0')
        requestHeader.set('id', '0')
        return NextResponse.next({ request: { headers: requestHeader } })
    }
}
