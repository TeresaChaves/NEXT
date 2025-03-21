export const customers = {
    id: 1,
    name: 'Customer 1',
    email: 'customer1@acme.com',
    phone: '+1 (555) 555-5555',
    address: '123 Main St, Anytown, USA',
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

export default function Customers() {
    return (
        <div>
            Customers
        </div>

        
    )
}   