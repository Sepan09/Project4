

export default function navbar() {
    return (
        <nav className="flex flex-row w-full justify-between align-center items-center">
            <h1 > 
                NOVA IMPROVEMENT
            </h1>

            <div className="flex flex-row justify-between items-center"> 
                <button className="m-2.5">
                    Dashboard
                </button>
                <button className="m-2.5">
                    Reviews
                </button>
                <button className="m-2.5">
                    Contact
                </button>
            </div>
        </nav>
    )
}