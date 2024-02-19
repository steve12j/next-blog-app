import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

    const secret = request.nextUrl.searchParams.get('secret')

    if (secret !== process.env.MY_SECRET_TOKEN) {
        return NextResponse.json(JSON.stringify({ message: 'Invalid Token' }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    const path = request.nextUrl.searchParams.get('path') || "/"

    if (path) {
        revalidatePath(path)
        return NextResponse.json({ revalidated: true })
    }

    return NextResponse.json({
        revalidated: false,
        message: 'Missing path to revalidate',
    })

}

