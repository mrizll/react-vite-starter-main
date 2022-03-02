import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "./../products.json"
import "./home.css"

const HomePage = () => {
  const navigate = useNavigate();
	const [cart, setCart] = useState([])
	const [products, setProducts] = useState([])

	useEffect(() => {
		if(products.length === 0){
			setProducts(productsData)
		}
	})


	const handleAddToCart = (type, item) => {
		let itemExists = cart.find(x => x.id === item.id)
		let itemIndex = products.findIndex(x => x.id === item.id)
		let itemCartIndex = cart.findIndex(x => x.id === item.id)
		let tempCart = [...cart]
		let tempProducts = [...products]

		if(itemExists && type === 'add'){
			tempProducts[itemIndex].quantity -= 1
			tempCart[itemCartIndex].qty += 1
		}else if(itemExists && type === 'remove'){
			tempProducts[itemIndex].quantity += 1
			if(tempCart[itemCartIndex].qty === 1){
				tempCart.splice(itemCartIndex, 1)
			}else{
				tempCart[itemCartIndex].qty -= 1
			}
		}else if(!itemExists){
			console.log("masuk")
			item.qty = 1
			tempCart.push(item)
		}

		setProducts(tempProducts)
		setCart(tempCart)
		
	}

  return (
    <Container maxW="container.xl">
      <Heading>Products</Heading>
      {productsData.map(item => {
				return(
					<div className="item" key={item.id}>
						<img src={item.imageUrl} />
						<div className="desc">
							<h4>{item.name}</h4>
							<p style={{marginBottom: 10}}>Rp.{item.price}</p>
							<Button
								onClick={() => {
									handleAddToCart("add", item)
								}}
							>
								Add to Cart
							</Button>
						</div>
					</div>
				)
			})}

			<div className="cart">
				<Heading>Cart</Heading>
				<div className="cart-items">
					{cart.map(item => {
						return(
							<div className="cart-item-container" key={item.id}>
								<div className="cart-item-desc">
									<h4>{item.name}</h4>
									<p>{item.price}</p>
								</div>
								<div className="cart-item-desc">
									<button 
										onClick={() => {
											handleAddToCart('remove', item)
										}}
										className="decrement"
									>-</button>
									<input type="text" name="qty" id="" value={item.qty} onChange={() => null} />
									<button 
										className="increment"
										onClick={() => {
											handleAddToCart('add', item)
										}}
									>+</button>
								</div>
							</div>
						)
					})}
				</div>

				<div className="total">
					<Heading>Total</Heading>
					<p>Rp.{cart.reduce((acc, item) => acc + ( item.price * item.qty ), 0 ).toFixed(2)}</p>
				</div>
			</div>
    </Container>
  );
};

export default HomePage;
