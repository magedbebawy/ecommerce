import './Item.css';

function Item({item}) {
    return (
        <div className='item'>
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <p>$<strong>{item.price}</strong></p>
            <div className='button'>
            <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Item;