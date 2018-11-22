import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { Product } from '../../services/Products';
import View from './View';

const Input = styled.input.attrs({
  type: 'text',
})`
  display: inline-block;
  width: 50% !important;
  margin: 0 auto !important;
`;

interface Props {
  products: Product[];
}

@observer
class FilteredProducts extends React.Component<Props> {
  @observable products = Array<Product>();

  @action setProducts = (x: Product[]) => (this.products = observable(x));

  filterProducts = (value: string) => {
    value = value.trim();

    if (value === '') return this.setProducts(this.props.products);

    const filteredProducts = this.products.filter(
      product =>
        product.reference.indexOf(value) !== -1 ||
        product.accountId.indexOf(value) !== -1 ||
        product.creationDate.indexOf(value) !== -1 ||
        product.caseUid.indexOf(value) !== -1 ||
        product.publicId.indexOf(value) !== -1 ||
        product.status.indexOf(value) !== -1,
    );

    this.setProducts(filteredProducts);
  };

  onEnter = ({ keyCode, currentTarget: { value } }: React.KeyboardEvent<HTMLInputElement>) =>
    keyCode === 13 && this.filterProducts(value);

  @action
  UNSAFE_componentWillReceiveProps({ products }: Props) {
    this.products = products;
  }

  render() {
    return (
      <div>
        <Input
          id="filterProducts"
          onKeyUp={this.onEnter}
          placeholder="Введите значение искомого элемента"
        />
        <View products={this.products} />
      </div>
    );
  }
}

export default FilteredProducts;
