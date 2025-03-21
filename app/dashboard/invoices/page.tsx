export const invoices = {
    id: 1,
    name: 'Invoice 1',
    amount: 1000,
    dueDate: '2023-01-01',
    status: 'pending',
    actions: [
        {
            id: 1,
            name: 'View',
            icon: 'eye',
            color: 'blue',
        },
        {
            id: 2,
            name: 'Edit',
            icon: 'pencil',
            color: 'green',
        },
        {
            id: 3,
            name: 'Delete',
            icon: 'trash',
            color: 'red',
        },
    ],
}

export default function Invoices() {
    return (
        <div>
            Invoices
        </div>

        
    )
}   