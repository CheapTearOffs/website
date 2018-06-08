import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
    return (
      <select
        className={this.props.variantOption[0] != "" ? 'Product__option col-7' : 'd-none'}
        name={this.props.name}
        // key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        {this.props.variantOption.map((value) => {
          return (
            <option value={value} key={`${this.props.name}-${value}`}>{`${value}`}</option>
          )
        })}
      </select>
    );
  }
}

export default VariantSelector;