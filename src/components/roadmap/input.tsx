import { Input } from "../ui/input"

export const FormInput = () => {
    return (
        <form className="flex flex-col items-center space-y-4 w-full max-w-md">
            <Input
                type="name"
                placeholder="Enter your name"
                className="w-full max-w-md text-gray-200 placeholder-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                required
            />
            <Input
                type="number"
                placeholder="Enter your age"
                className="w-full max-w-md text-gray-200 placeholder-gray-300 focus:ring-yellow-500 focus:border-yellow-500 mt-4"
                required
            />
            <Input
                type="text"
                placeholder="Enter your education level"
                className="w-full max-w-md text-gray-200 placeholder-gray-300 focus:ring-yellow-500 focus:border-yellow-500 mt-4"
                required
            />
            <Input
                type="text"
                placeholder="Enter your current job"
                className="w-full max-w-md text-gray-200 placeholder-gray-300 focus:ring-yellow-500 focus:border-yellow-500 mt-4"
                required
            />
            <Input
                type="text"
                placeholder="Enter your career goals"
                className="w-full max-w-md text-gray-200 placeholder-gray-300 focus:ring-yellow-500 focus:border-yellow-500 mt-4"
                required
            />
            <button
                type="submit"
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                Submit
            </button>
        </form>
    )
}