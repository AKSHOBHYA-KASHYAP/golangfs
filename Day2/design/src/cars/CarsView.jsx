import { useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarsView() {
    const { id } = useParams();  // Fetch car ID from URL

    const cars = {
        car1: { number: "KA09asc1231", model: "Zen", class: "Small Car" },
        car2: { number: "KA09asc3211", model: "Beatle", class: "Hatchback" }
    };

    const car = cars[id] || null;

    return (
        <>
            <PageHeader />

            <div className="container mt-5">
                <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
                    {car ? (
                        <>
                            <h2 className="text-center text-dark mb-4">Car Details</h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>ID:</strong> {id}</li>
                                <li className="list-group-item"><strong>Number:</strong> {car.number}</li>
                                <li className="list-group-item"><strong>Model:</strong> {car.model}</li>
                                <li className="list-group-item"><strong>Class:</strong> {car.class}</li>
                            </ul>
                            <div className="text-center mt-3">
                                <a className="btn btn-secondary" href="/cars/list">Back to List</a>
                            </div>
                        </>
                    ) : (
                        <h3 className="text-center text-danger">Car not found</h3>
                    )}
                </div>
            </div>

            <footer className="bg-dark text-white text-center py-3 mt-5">
                <p className="mb-0">&copy; 2025 Car Rental. All rights reserved.</p>
            </footer>
        </>
    );
}
