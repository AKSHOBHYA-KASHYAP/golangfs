import PageHeader from "../header/PageHeader";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarsList() {
    return (
        <>
            <PageHeader />

            {/* Hero Section */}
            <div className="bg-primary text-white text-center py-4">
                <h1>Available Cars</h1>
                <p className="lead">Explore our collection of cars available for rent.</p>
            </div>

            {/* Main Content - Centered */}
            <div className="container mt-5">
                <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "900px" }}>
                    <h3 className="text-center text-dark mb-4">Cars List</h3>

                    <div className="table-responsive">
                        <table className="table table-striped table-bordered text-center align-middle">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Number</th>
                                    <th>Model</th>
                                    <th>Class</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>car1</th>
                                    <td>KA09asc1231</td>
                                    <td>Zen</td>
                                    <td>Small Car</td>
                                    <td>
                                        <a className="btn btn-primary btn-sm px-4 py-2 rounded-pill fw-bold shadow-sm" href="/car/view/car1">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th>car2</th>
                                    <td>KA09asc3211</td>
                                    <td>Beatle</td>
                                    <td>Hatchback</td>
                                    <td>
                                        <a className="btn btn-primary btn-sm px-4 py-2 rounded-pill fw-bold shadow-sm" href="/car/view/car2">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <p className="mb-0">&copy; 2025 Car Rental. All rights reserved.</p>
            </footer>
        </>
    );
}
