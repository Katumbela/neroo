export function abbreviateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }
    const abbreviatedText = text.substring(0, maxLength - 3) + "...";
    return abbreviatedText;
}
