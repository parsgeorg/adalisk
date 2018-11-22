import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getProductById, Product as ProductItem } from '../../services/Products';
import View from './View';

interface UrlParams {
  accountId: string;
}

interface Props extends RouteComponentProps<UrlParams> {}

@observer
class Product extends React.Component<Props> {
  @observable product?: ProductItem = undefined;

  @action setProduct = (product: ProductItem) => (this.product = observable(product));

  componentDidMount() {
    getProductById(this.props.match.params.accountId).then(this.setProduct);
  }

  render() {
    const { product } = this;

    if (!product) return 'Wait a second, dear customer!';

    return <View data={product} />;
  }
}

export default Product;
