import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

type Props = {
  searchParams: Promise<{ next?: string; error?: string }>
}

export default async function LoginPage({ searchParams }: Props) {
  const sp = await searchParams
  const q = new URLSearchParams()
  if (sp.next) q.set('next', sp.next)
  if (sp.error) q.set('error', sp.error)
  const s = q.toString()
  redirect(s.length ? `/?${s}` : '/')
}
