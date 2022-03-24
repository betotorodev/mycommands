import { Loading } from "components/loading/loading"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Auth({ children }: any) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === 'loading') return // Do nothing while loading
    if (!isUser) router.push('/') // If not authenticated, force log in
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <Loading />
}