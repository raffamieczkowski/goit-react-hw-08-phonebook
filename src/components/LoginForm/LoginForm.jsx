import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
          />
        </label>
        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
