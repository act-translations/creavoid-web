import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="space-y-8">
            {/* Search Widget */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-serif text-xl font-bold">Suche</h3>
                <input
                    type="text"
                    placeholder="Artikel suchen..."
                    className="w-full rounded-md border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
            </div>

            {/* Kategorien Widget */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-serif text-xl font-bold">Kategorien</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                        <Link href="#" className="hover:text-primary">
                            KI & Automation
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-primary">
                            Digital Marketing
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-primary">
                            Tech & Analytics
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-primary">
                            Webentwicklung
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Ad / Shop Widget */}
            <div className="overflow-hidden rounded-xl border bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-md">
                <h3 className="mb-2 font-serif text-xl font-bold">Tech Shop</h3>
                <p className="mb-4 text-sm opacity-90">
                    Entdecken Sie unsere neueste Tech-Kollektion.
                </p>
                <Link
                    href="/store"
                    className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-bold text-indigo-600 hover:bg-gray-100"
                >
                    Jetzt shoppen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </aside>
    );
}
