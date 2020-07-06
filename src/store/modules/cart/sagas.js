import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import formatter from '../../../util/formatter';

import api from '../../../services/api';

import { addToCartSuccess, updateCartAmountSuccess } from './actions';

function* addToCart({ id }) {
  const foundProduct = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const { data: stock } = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.amount;
  const currentAmount = foundProduct ? foundProduct.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (foundProduct) {
    yield put(updateCartAmountSuccess(id, amount));
  } else {
    const { data: product } = yield call(api.get, `/products/${id}`);

    const data = {
      ...product,
      amount: 1,
      formattedPrice: formatter.price(product.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const { data: stock } = yield call(api.get, `/stock/${id}`);

  if (amount > stock.amount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateCartAmountSuccess(id, amount));
}

export default all([
  takeLatest('ADD_TO_CART_REQUEST', addToCart),
  takeLatest('UPDATE_CART_AMOUNT_REQUEST', updateAmount),
]);
