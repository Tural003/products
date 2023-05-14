import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Space, Input } from 'antd';
const Home = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const onSearch = (value) => console.log(value);
    const { Search } = Input;

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const filteredCountries = data
        .filter((item) => {
            return item.title.toLowerCase().includes(value.toLowerCase())
        })

    const sorting = () => {
        const sortedData = [...data].sort((a, b) => a.price - b.price);
        setData(sortedData);
    }
    const getData = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        setData(res.data)
        console.log(res);
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='cards'>
            <div className='search'>
                <Space direction="vertical">
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        onChange={handleChange}
                    />
                    <button onClick={sorting}>Sort by Price</button>
                </Space>
            </div>
            {filteredCountries.map(e => (
                <Card
                    title={e.title}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={e.image} />}
                >
                    <p>{e.price} azn</p>
                    <button>Add to cart</button>
                </Card>
            ))}
        </div>
    )
}

export default Home