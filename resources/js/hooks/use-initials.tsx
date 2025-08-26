export function useInitials() {
    return (name: string): string => {
        if (!name) return '';
        const parts = name.split(' ');
        return parts.map(part => part[0]).join('').toUpperCase();
    };
}
