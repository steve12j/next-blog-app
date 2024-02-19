
export default function getFormattedDate(dateString: string) {
    return Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date(dateString))
}
