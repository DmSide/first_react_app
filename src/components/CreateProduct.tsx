import React, {useState} from "react";
import {IProduct} from "../models";
import axios from "axios";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: "",
    category: "",
    image: "string",
    rating: {
        rate: 1,
        count: 1,
    }

}

interface CreateProductProps{
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate}: CreateProductProps){
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        if (value.trim().length == 0) {
            setError("Please enter valid data")
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title"
                value={value}
                onChange={changeHandler}
            />
            <button type="submit" className="py-2 px-4 border bg-yellow-400">
                Create
            </button>
        </form>
    )
}