import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoggedUser } from '../apiCall/user';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLoggedInUser = async () => {
        try {
            const response = await getLoggedUser();

            if (response.success) {
                setUser(response.data);
            } else {
                localStorage.removeItem("token");
                navigate("/login");
            }
        } catch (error) {
            localStorage.removeItem("token");
            navigate("/login");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            getLoggedInUser();
        } else {
            navigate("/login");
        }
    }, [navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <p>
                Name: {user?.firstName} {user?.lastName}
                <br/>
                Email : {user?.email}
            </p>


            {children}
        </div>
    );
};

export default ProtectedRoute;