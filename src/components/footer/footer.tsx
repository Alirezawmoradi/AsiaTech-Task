import {Link} from "react-router-dom";
import {FaGithub} from "react-icons/fa";

export const Footer:React.FC = () => {
    return (
        <footer className=" w-full border-t border-gray-300 border-opacity-5 font-bold text-gray-300">
                <div className="container row px-4 p-3">
                    <div className="col-12 flex items-center justify-between">
                        <p className="mb-0">
                            © 2024 - <a className="text-muted">AsiaTech</a>
                        </p>
                        <div className="flex space-x-4">
                            <Link to="https://github.com/Alirezawmoradi/AsiaTech-Task"><FaGithub/></Link>
                        </div>
                    </div>
                </div>
        </footer>

    )
}