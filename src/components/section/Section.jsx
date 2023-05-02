import Item from '../item/Item';
import './Section.css'
function Section({products, title}) {
    return (
        <div className="section">
            <p>{title}</p>
            {
                products.map((item) => {
                    return (
                        <Item key = {item.id} item = {item}></Item>
                    )
                })
            }
        </div>
    )
}

export default Section;