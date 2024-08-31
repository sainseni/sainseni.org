export default function Container({ children }: { children: React.ReactNode }) {
    return <main className='container mx-auto p-4 space-y-8'>{children}</main>;
}
