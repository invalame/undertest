import React from 'react'
import { QuoteBlock } from './quote-block'

export function parsePostBody(body: string) {
    const lines = body.split('\n')
    const elements: React.ReactNode[] = []

    let currentText = ''
    let keyIndex = 0

    const pushText = () => {
        if (currentText) {
            elements.push(<span key={`text-${keyIndex++}`}>{currentText}</span>)
            currentText = ''
        }
    }

    const ULESS_LINK_REGEX = /https?:\/\/[^\s]+\/uless\/([0-9a-fA-F-]+)/;
    const FORUM_LINK_REGEX = /https?:\/\/[^\s]+\/forum\/([0-9a-fA-F-]+)/;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const words = line.split(' ')

        for (let j = 0; j < words.length; j++) {
            const word = words[j]
            const ulessMatch = word.match(ULESS_LINK_REGEX)
            const forumMatch = word.match(FORUM_LINK_REGEX)
            
            const match = ulessMatch || forumMatch
            if (match && match[1]) {
                pushText()
                elements.push(<QuoteBlock key={`quote-${keyIndex++}`} postId={match[1]} />)
                // If it's a quote, maybe we don't need to render the link text itself.
            } else {
                currentText += word + ' '
            }
        }
        currentText += '\n'
    }
    pushText()

    return elements
}
