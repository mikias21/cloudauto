import { Link } from "react-router-dom";

const NoticeComponent = () => {
    return(
        <div>
            <div>
                <p className="font-popins text-center text-xs mt-10">
                If you want to schedule Test drive at Xi'an Cloud Auto technology contact us.
                </p>
            </div>
            <div className="mt-6 text-center">
                <Link to="/contact" style={{fontSize: "11px"}} className="bg-transparent border border-1 border-slate-800 font-popins tracking-widest text-xs w-56 text-black uppercase font-semibold py-3 px-8 rounded-sm hover:bg-gray-800 hover:text-white">
                    Contact us
                </Link>
            </div>
        </div>
    );
}

export default NoticeComponent;