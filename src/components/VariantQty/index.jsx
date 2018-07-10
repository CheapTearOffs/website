import React, {Component} from 'react';

class VariantQty extends Component {
  render() {
    let valueQty = []
    return (
      <select
        className={this.props.productType == "Tear-Offs" ? 'Product__option col-7 mt-2' : 'd-none'}
        name={this.props.name}
        // key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        {this.props.variantOption.map((option) => {
          return option.map((value) => {
            if(value.name == "Qty" && !valueQty.includes(value.value)) {
              valueQty.push(value.value)
              return (
                <option value={value.value} key={`${this.props.name}-${value.value}`}>{`${value.value}`}</option>
              )
            }
          })
        })}
      </select>
    );
  }
}

export default VariantQty;