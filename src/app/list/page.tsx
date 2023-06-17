import Filter from "@/components/filter/Filter"
import { AddForm } from "@/components/addForm/AddForm"
import { getServerSession } from "next-auth";

export const metadata = {
    title: 'Grocery list',
    description: 'Create your grocery list and save your money',
}

export default async function List() {
    const session = await getServerSession();
    const user = session?.user?.email as string;

    return (
        <section>
            <AddForm user={user} />
            <Filter user={user} />
        </section>
    )

}
