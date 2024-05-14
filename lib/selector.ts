// selectors.ts
import { RootState } from '../redux/store';

export const selectCartItemCount = (state: RootState) => {
    return state.cart.items.length;
};
