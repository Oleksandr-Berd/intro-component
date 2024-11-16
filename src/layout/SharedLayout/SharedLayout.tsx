import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import OrderForm from "../../components/OrderForm/OrderForm";
import * as SC from "./SharedLayoutStyled"
import { IData } from "../../utils/interfaces";

const SharedLayout:React.FC = () => {
const [user, setUser] = useState<IData | null>(null)

const handleSubmit = (data: IData) =>{ 
    data && setUser(data)
}


console.log(user);

    return (
      <SC.SharedLayoutCustom>
        <Hero />
        <OrderForm handleSubmit={handleSubmit} />
      </SC.SharedLayoutCustom>
    );
}
 
export default SharedLayout;