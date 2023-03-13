import { useEffect } from "react";
import axios from "axios";

function App() {
    const issuesList = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}/repos/angular/angular-cli/issues`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        issuesList();
    }, []);

    return <div>:)</div>;
}

export default App;
