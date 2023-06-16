import Filter from "@/components/filter/Filter"
import ListForm from "@/components/listForm/ListForm"
import ListItems from "@/components/listItems/ListItems"

export const metadata = {
    title: 'Grocery',
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
