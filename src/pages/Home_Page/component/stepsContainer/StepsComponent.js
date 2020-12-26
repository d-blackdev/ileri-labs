import React from 'react'
import './StepsContainer.css'
import { Image } from 'react-bootstrap'
import Image1 from '../../../../assets/images/Signup.svg'
import Image2 from '../../../../assets/images/Lab.svg'
import Image3 from '../../../../assets/images/Payment.svg'
import Image4 from '../../../../assets/images/Launch.svg'

const StepsComponent = () => {
    return (
      <div className="container">
        {/* Single container */}
        <div className="single_Cont">
          <Image src={Image1} alt="Ileri" />
          <h6 className="single_text">Sign Up</h6>
          <h6 className="single_steps">
            The first step for creating your brand
          </h6>
        </div>
        {/* Single container */}
        <div className="single_Cont">
          <Image src={Image2} alt="Ileri" />
          <h6 className="single_text">Choose Your Products</h6>
          <h6 className="single_steps">
            Pick any products you are interested in launching and add to cart.
            Make sure to check the details of each product to be sure it’s in
            line with the solution you hope to provide to your customers.
          </h6>
        </div>
        {/* Single container */}
        <div className="single_Cont">
          <Image src={Image3} alt="Ileri" />
          <h6 className="single_text">Make Payment</h6>
          <h6 className="single_steps">
            Make payment and check out from your cart. Delivery timelines will
            depend on the products you choose. Our lead time is usually between
            4 to 8 weeks.
          </h6>
        </div>
        {/* Single container */}
        <div className="single_Cont">
          <Image src={Image4} alt="Ileri" />
          <h6 className="single_text">Launch Your Brand</h6>
          <h6 className="single_steps">
            Once products are received, you can brand with your labels and
            launch. We also have free basic branding for new clients. Terms and
            conditions apply.
          </h6>
        </div>
      </div>
    );
}

export default StepsComponent
