import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
    let valueModel = []

    return (
      <select
        className={this.props.variantOption[0][0].name == "Model" && this.props.productType == "Tear-Offs" ? 'Product__option col-12' : 'd-none'}
        name={this.props.name}
        // key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        <option key={`${this.props.name}-default`}>Select*</option>
        {this.props.variantOption.map((option) => {
          return option.map((value) => {
            if(value.name == "Model" && !valueModel.includes(value.value)) {
              valueModel.push(value.value)
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

export default VariantSelector;