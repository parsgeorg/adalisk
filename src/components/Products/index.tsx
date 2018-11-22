import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { getProducts, Product } from '../../services/Products';
import FilteredProducts from '../FilteredProducts';
import './styles.css';

@observer
class Products extends React.Component<any> {
  @observable products = Array<Product>();
  @observable pageCount = 0;
  @observable offset = 0;
  perPage = 10;

  @action setProducts = (products: Product[]) => (this.products = products);
  @action setPageCount = (value: number) => (this.pageCount = value);
  @action setOffset = (value: number) => (this.offset = value);

  @action onProductsReceived = (res: any) => {
    this.setPageCount(Math.ceil(res.total / this.perPage));
    this.setProducts(res.items);
  };

  getProducts = () => {
    getProducts({ perPage: this.perPage, offset: this.offset }).then(this.onProductsReceived);
  };

  componentDidMount() {
    this.getProducts();
  }

  @action onPageChange = (data: { selected: number }) => {
    this.setOffset(Math.ceil(data.selected * this.perPage));
    this.getProducts();
  };

  render() {
    return (
      <div>
        <FilteredProducts products={this.products} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.onPageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default Products;
