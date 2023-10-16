export default function Nav({ setView }){
    return (
        <>
        <div className="menu">
            <ul>
                <li><button style={{color: 'black'}} className="btn bg-transparent" onClick={() => setView('Initial')}>Home</button></li>
                <li><button style={{color: 'black'}} className="btn bg-transparent" onClick={() => setView('Initial')}>Breakfast</button></li>
                <li><button style={{color: 'black'}} className="btn bg-transparent" onClick={() => setView('Initial')}>Lunch</button></li>
                <li><button style={{color: 'black'}} className="btn bg-transparent" onClick={() => setView('Initial')}>Dinner</button></li>
                <li><button style={{color: 'black'}} className="btn bg-transparent" onClick={() => setView('Initial')}>Appetizers</button></li>
                <li><button style={{color: 'black'}} className="btn bg-transparent" onClick={() => setView('Initial')}>Drinks</button></li>
            </ul>
        </div>
        </>
    )
}