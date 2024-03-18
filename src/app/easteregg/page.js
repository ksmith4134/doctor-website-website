import Holofoil from "@/components/widgets/holofoil/Holofoil";
import MaxWidth from "@/components/utils/MaxWidth";

export default function page() {
    return (
        <main className="pt-20 flex justify-center min-h-screen">
            <MaxWidth>
                <Holofoil />
            </MaxWidth>
        </main>
    );
}
