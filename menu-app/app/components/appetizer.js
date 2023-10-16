export default function Appetizer (){
    return(
        <div>
        {data && data.filter((fast) => fast.category.includes('Appetizer')).map(item => (
            <div key={item.id}>
                <h4 key={item.title} className="card-title item-title fontcolor">{item.title}</h4>
                <p key={item.description} className="card-text item-description fontcolor">{item.description}</p>
                <p className="card-text fontcolor">${item.price}</p>
            </div>
        ))}
        {!data && <div>There is no data</div>}
        </div>
    )
}