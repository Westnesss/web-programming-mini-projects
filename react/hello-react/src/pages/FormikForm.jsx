import { useFormik } from 'formik'

export default function FormikForm() {
    const formik = useFormik({
        initialValues: { name: '' },
        validate: (values) => (values.name ? {} : { name: 'Name is required' }),
        onSubmit: (values) => alert(`Hello, ${values.name}!`),
    })

    return (
        <form onSubmit={formik.handleSubmit} className="p-6 space-y-3">
            <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="border rounded p-2"
            />
            {formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
        </form>
    )
}