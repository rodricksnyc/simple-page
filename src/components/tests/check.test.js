import { render, screen, cleanup } from '@testing-library/react';
import AddressCard from '../AddressCard';


test('should render non-completed AddressCard', () => {
const check = {id:1, name: "Barb", city: 'Scarsdale', completed: false};
render(<AddressCard check={check}/>);
// const checkElement = screen.getAllByTestId('check-1').innerHTML

const checkElement = screen.getAllByTestId('check-1')





});
