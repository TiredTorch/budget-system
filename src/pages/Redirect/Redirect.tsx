import { getBudgetState } from 'contexts/BudgetContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Redirect = () => {
  const navigate = useNavigate();
  const budgetState = getBudgetState();

  useEffect(() => {
    navigate(
      !!budgetState?.user ? '/' : '/login',
    );
  });


  return (
    <div></div>
  );
};

export default Redirect;
