import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // Runs only if validation passes
    const onSubmit = (data) => alert(`Hello, ${data.name}!`)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-3">
            <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your name"
                className="border rounded p-2"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
    )
}