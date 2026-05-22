export function validateLinks(text: string): boolean {
    const urls = text.match(/https?:\/\/[^\s]+/g) || []
    const allowedDomains = ['twitter.com', 'x.com', 'youtube.com', 'youtu.be', 'instagram.com', 'kick.com']

    for (const url of urls) {
        try {
            const parsed = new URL(url)
            const hostname = parsed.hostname.toLowerCase()

            // Allow internal quote links regardless of host
            if (parsed.pathname.startsWith('/uless/') || parsed.pathname.startsWith('/forum/')) {
                continue
            }

            const isAllowed = allowedDomains.some(d => hostname === d || hostname.endsWith('.' + d))
            if (!isAllowed) {
                return false
            }
        } catch {
            return false
        }
    }

    return true
}
