const NoticeComponent = () => {
    return(
        <div>
            <div>
                <p className="font-popins text-center text-xs mt-10">
                To get behind the wheel of the Cloud Auto, schedule your test drive now
                and experience the best for yourself.
                </p>
            </div>
            <div className="mt-6 text-center">
                <button style={{fontSize: "11px"}} className="bg-transparent border border-1 border-slate-800 font-popins tracking-widest text-xs w-56 text-black uppercase font-semibold py-3 px-8 rounded-sm hover:bg-gray-800 hover:text-white">
                    View details
                </button>
            </div>
        </div>
    );
}

export default NoticeComponent;