import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable green pill button
 *
 * Props:
 *  - to      {string}   route path (e.g. "/about") – required for navigation
 *  - label   {string}   button text (default: "See More")
 *  - onClick {function} optional click handler (renders as <button> if no `to`)
 *  - className {string} optional extra class
 */
const SeeMoreButton = ({ to, label = "See More", onClick, className = "" }) => {
  const classes = `see-more-btn ${className}`.trim();

  // If a route is provided → Link
  if (to) {
    return (
      <>
        <Link to={to} className={classes}>
          {label}
        </Link>
        <ButtonStyles />
      </>
    );
  }

  // Otherwise → regular button
  return (
    <>
      <button type="button" className={classes} onClick={onClick}>
        {label}
      </button>
      <ButtonStyles />
    </>
  );
};

const ButtonStyles = () => (
  <style>{`
    .see-more-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 1.8rem;
      border-radius: 50px;
      border: none;
      background: linear-gradient(135deg, #2e7d32, #43a047);
      color: #ffffff;
      font-size: 0.95rem;
      font-weight: 650;
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(46, 125, 50, 0.3);
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .see-more-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 26px rgba(46, 125, 50, 0.4);
      background: linear-gradient(135deg, #1b5e20, #2e7d32);
    }

    .see-more-btn:active {
      transform: translateY(-1px);
    }
  `}</style>
);

export default SeeMoreButton;
