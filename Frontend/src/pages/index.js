import Head from 'next/head'
import Link from 'next/link'
import { getStaticProps } from 'next'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Voting Smekda</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-fuchsia-300 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ?
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </a>
                        </Link>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline">Login</a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    }
                </div>
            
                <div className=''>

                </div>
                
            </div>
        </>
    )
}

// export async function getStaticProps() {
//     return {
//         props: {}
//     }
// }