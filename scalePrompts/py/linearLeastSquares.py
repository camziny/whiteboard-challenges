import numpy as np
from scipy.optimize import leastsq


def constrained_least_squares(A, b, constraints):
    """
    Solves the constrained linear least-squares problem:

    min_x ||Ax - b||^2

    subject to constraints.

    Args:
      A: A NumPy array of shape (m, n).
      b: A NumPy array of shape (m,).
      constraints: A list of constraints. Each constraint is a tuple of the form
        (A_i, b_i), where A_i is a NumPy array of shape (m_i, n) and b_i is a
        NumPy array of shape (m_i,).

    Returns:
      x: A NumPy array of shape (n,). The solution to the constrained least-
        squares problem.
    """

    # Convert the constraints to a matrix form.
    A_c = np.concatenate([A_i for A_i, b_i in constraints], axis=0)
    b_c = np.concatenate([b_i for A_i, b_i in constraints], axis=0)

    # Solve the least-squares problem without constraints.
    x_hat = leastsq(lambda x: np.linalg.norm(A @ x - b), np.zeros(n))[0]

    # Project x_hat onto the feasible set.
    x = np.linalg.lstsq(A_c, b_c, rcond=None)[0]

    return x
