export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center bg-background">
            <div className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-primary"></span>
            </div>
        </div>
    );
}
