import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../services/Products';

const renderData = (product: Product) => {
  return (
    <TableRow key={product.caseUid}>
      <TableCell numeric>
        <Link to={`/products/${product.caseUid}`}>{product.reference}</Link>
      </TableCell>
      <TableCell numeric>{product.accountId}</TableCell>
      <TableCell numeric>{product.caseUid}</TableCell>
      <TableCell numeric>{product.creationDate}</TableCell>
      <TableCell numeric>{product.publicId}</TableCell>
      <TableCell numeric>{product.status}</TableCell>
    </TableRow>
  );
};

interface Props {
  products: Product[];
}

class View extends React.PureComponent<Props> {
  render() {
    return (
      <div className="row" id="Body">
        <div className="medium-12 columns">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell numeric>Reference</TableCell>
                  <TableCell numeric>AccountId</TableCell>
                  <TableCell numeric>CaseUid</TableCell>
                  <TableCell numeric>CreationDate</TableCell>
                  <TableCell numeric>PublicId</TableCell>
                  <TableCell numeric>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.props.products.map(renderData)}</TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default View;
