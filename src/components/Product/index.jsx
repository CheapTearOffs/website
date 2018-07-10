import React, {Component} from 'react';
import LazyLoad from 'react-lazyload'
import Link, { withPrefix } from 'gatsby-link'
import { Button } from 'reactstrap'

import VariantSelector from '../VariantSelector';
import VariantQty from '../VariantQty';

class Product extends Component {
  constructor(props) {
    super(props);
    
    let Model = this.props.product.project.variants[0].selectedOptions[0].value

    // this.props.product.project.variants.forEach((selector) => {
      // console.log(selector.selectedOptions[0])
      // defaultOptionValues[selector.selectedOptions[0].name] = selector.selectedOptions[0].value;
    // });
    this.state = { 
      selectedOptions: {
        Model,
        Qty: "50 pack"
      }
    };
 
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }
 
  findImage(images, variantId) {
    const primary = images[0];
 
    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];
 
    return (image || primary).src;
  }
 
  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;
 
    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product.project, selectedOptions)
    console.log(selectedVariant)
 
    this.setState({
     selectedVariant: selectedVariant,
    //  selectedVariantImage: selectedVariant.image.originalSrc
    });
  }
 
  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }
 
  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.project.images[0].originalSrc
    let variant = this.state.selectedVariant || this.props.product.project.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantPrice = variant.price
    let variants = this.props.product.project.variants.map((variant) => {
      return variant.selectedOptions.map((option) => {
        return option
      })
    })

    return (
    <LazyLoad key={this.props.product.project.title} height={200} once>
      <div className={'col-sm-4 col-12 pb-5'} >
        <div className="text-center hovereffect">
          {/* <Link to={withPrefix(``)}> */}
            <img src={variantImage} style={{ margin: 0, padding: 0, width: '100%' }} />
            <div className="overlay">
              <h2 className="vendor" >
                {this.props.product.project.title}
              </h2>
              <h2 className="price" >
                ${variantPrice}
              </h2>
            </div>
          {/* </Link> */}
        </div>
        <div className="mt-3 container">
          <div className="row justify-content-between">
            <VariantSelector handleOptionChange={this.handleOptionChange} name="Model" variantOption={variants} productType={this.props.product.project.productType} />
            <Button className="btn btn-outline-danger col-3 mt-2" onClick={() => this.props.addVariantToCart(variant.shopifyId, 1)}>Buy</Button>
            <VariantQty handleOptionChange={this.handleOptionChange} name="Qty" variantOption={variants} productType={this.props.product.project.productType} />
          </div>
          <div className="row justify-content-between pt-2">
          </div>
        </div>
      </div>
    </LazyLoad>
    );
  }
}
 
 export default Product;