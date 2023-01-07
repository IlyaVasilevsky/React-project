import React from 'react';
import Card from '../components/Card';
import axios from 'axios'

function Orders() {

    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        try {
            (async () => {
                const {data} = await axios.get('https://63af1796649c73f572b525fe.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            })()   
        } catch (error) {
            alert('ERROR')
        }
    })

    return (
        <section className='content'>
            <div className="title-block">
                <h1>Мои заказы</h1>
            </div>
            <div className="cards-wrapper">
                {
                    (isLoading ? [...Array(10)] : orders)
                    .map((obj, index) => (
                        <Card key={index} loading={isLoading}  {...obj} />
                    ))
                }
            </div>
        </section>
    )
}

export default Orders