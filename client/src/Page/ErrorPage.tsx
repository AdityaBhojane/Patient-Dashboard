
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate('/signin');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-red-600">Something went wrong</h2>
                <p className="text-gray-600 mt-2">Please try again later or go back.</p>
                <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    onClick={handleGoBack}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;