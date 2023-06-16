import Filter from "@/components/filter/Filter"
import ListForm from "@/components/addForm/AddForm"

export const metadata = {
    title: 'Grocery list',
    description: 'Create your grocery list and save your money',
}

export default function List() {
    return (
        <section>
            <ListForm />
            <Filter />
        </section>
    )

}
